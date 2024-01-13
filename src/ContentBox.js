import React, { useRef, useState, useEffect } from 'react';
import './MenuContent.scss';
import './ContentBox.scss';
import Media from './Media';

const FormattedContent = ({ content }) => {
  return content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

function ContentBox(props) {
  const videoRef = useRef();
  const contentInfoRef = useRef();
  const [scrollDown, setScrollDown] = useState(true);
  const [playing, setPlaying] = useState(null);

  // Common function for determining media type
  const determineMediaType = (media) => {
    if (!media) return { type: "null", src: null };
    return { type: media.type, src: media.src };
  };

  const { type: type1, src: src1 } = determineMediaType(props.media_1);
  const { type: type2, src: src2 } = determineMediaType(props.media_2);

  const isVideo1 = type1 === "video";
  const isVideo2 = type2 === "video";

  // Video autoplay and pause logic
  useEffect(() => {
    if (videoRef.current) {
      if (props.playing === props.id) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [props.playing, props.id]);

  const handleClick = () => {
    props.onClick(props.id);
    if (props.setPlaying) {
      props.setPlaying(props.id);
    }

    if (contentInfoRef.current) {
      const currentScroll = contentInfoRef.current.scrollTop;
      const maxScroll = contentInfoRef.current.scrollHeight - contentInfoRef.current.clientHeight;
      let scrollAmount = 300;

      if (scrollDown) {
        if (currentScroll + scrollAmount >= maxScroll) {
          scrollAmount = maxScroll - currentScroll;
          setScrollDown(false);
        }
        contentInfoRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      } else {
        if (currentScroll - scrollAmount <= 0) {
          scrollAmount = currentScroll;
          setScrollDown(true);
        }
        contentInfoRef.current.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const renderMedia = () => {
    if (props.media_1 || props.media_2) {
      return (
        <div className="media-wrapper">
          <Media 
            className="media"
            type={type1}
            src={src1}
            title={props.title}
            videoRef={isVideo1 ? videoRef : null}
          />
          <Media
            className="media"
            type={type2}
            src={src2}
            title={props.title}
            videoRef={isVideo2 ? videoRef : null}
          />
        </div>
      );
    } else if (props.logo) {
      return <img logo={1} src={props.logo} alt={props.title} />;
    }
    return null;
  };

  return (
    <div onClick={handleClick} id={props.id} className="content-box">
      <div className="content-title">
        <h1>{props.title}</h1>
      </div>
      <div ref={contentInfoRef} className="content-information">
        {renderMedia()}
        <p><FormattedContent content={props.content} /></p>
      </div>
      {/* <SkillsTable skills={props.skills} /> */}
    </div>
  );
}

export default ContentBox;