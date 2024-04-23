import React, { useRef, useState, useEffect } from "react";
import "./MenuContent.scss";
import "./ContentBox.scss";
import Media from "./Media";
import Links from './Links';

// Breaks content into dot points. May not always want dot points.
const FormattedContent = ({ content }) => {
  const paragraphs = content.split("\n\n");
  const firstParagraph = paragraphs.shift(); // Remove the first paragraph from the array

  return (
    <>
      <p className="content-information-first-paragraph">{firstParagraph}</p>
      <ul className="content-information-list">
        {paragraphs.map((paragraph, index) => (
          <li key={index}>
            {paragraph.split("\n").map((line, lineIndex) => (
              <React.Fragment key={`${index}-${lineIndex}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};

function ContentBox(props) {
  const videoRef = useRef();
  const contentInfoRef = useRef();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  // Common function for determining media type
  const determineMediaType = (media) => {
    if (!media) return { type: "null", src: null };
    return { type: media.type, src: media.src };
  };

  const { type: type1, src: src1 } = determineMediaType(props.media_1);
  const { type: type2, src: src2 } = determineMediaType(props.media_2);

  const isVideo1 = type1 === "video";
  const isVideo2 = type2 === "video";

  const handleButtonClick = () => {
    setIsButtonClicked((prevState) => !prevState);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
  
    }
  }, [props.playing, props.id]);

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
          {!props.isMobile && (
            <Media
              className="media"
              type={type2}
              src={src2}
              title={props.title}
              videoRef={isVideo2 ? videoRef : null}
            />
          )}
        </div>
      );
    } else if (props.logo) {
      return (
        <div className="logo-stuff">
          <img logo={1} src={props.logo} alt={props.title} />
        </div>
      );
    }
    return null;
  };
  if (props.isProjectContent) {
    return (
      <div id={props.id} className="content-box content-box-projects">
        <div className="content-title">
          <h1>{props.title}</h1>
          <button
            className={`button-links ${isButtonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            what is this?
          </button>
        </div>
        <div ref={contentInfoRef} className="content-information">
          {renderMedia()}
          <div className={`hidden-content ${isButtonClicked ? "show" : ""}`}>
            <FormattedContent content={props.content} />
          </div>
        </div>
        {/* ... */}
      </div>
    );
  }
  else {
    return (
      <div id={props.id} className="content-box services-box">
        <div className="content-title">
          <h1>{props.title}</h1>
            <Links showLinks={true} buttonText="Book Intro"/>
        </div>
        <div ref={contentInfoRef} className="content-information">
          <FormattedContent content={props.content} />
        </div>
        {/* ... */}
      </div>
    );
  }
}

export default ContentBox;
