import React, { useState } from "react";
import "./../styles/Information.css";

function Information(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [text, setText] =
    useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
  ornare convallis sapien eget varius. Fusce eros nisi, posuere eu
  eros id, faucibus finibus odio. Maecenas sagittis at est id
  faucibus. Vestibulum vitae urna blandit, luctus lacus eu, mattis
  nunc. Phasellus volutpat mauris in lectus viverra finibus. Nunc
  sagittis arcu ac velit condimentum pretium. Suspendisse potenti. Sed
  vitae nisi laoreet, ornare lectus ac, gravida turpis.`);


  function handleToggleDisplay() {    
    setShowEdit((current) => !current);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="information-div" id={props.heading}>
      <form>
        <h3>{props.heading}</h3>
        {!showEdit && (
          <div>
            <p id="paragraph">{text}</p>
            <button 
              type="button" 
              id="editButton" 
              onClick={handleToggleDisplay}
            >
              Edit
            </button>
          </div>
        )}
        {showEdit && (
          <div>
            <textarea id="textArea" onChange={handleChange}>{text}</textarea>
            <button
              type="button"
              id="submitButton"
              onClick={handleToggleDisplay}
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Information;
