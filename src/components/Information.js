import React, { useState } from "react";
import "./../styles/Information.css";

function Information(props) {
  /*
  Include paragraph, textarea, edit button, submit button.
  Use Display: none to switch between p + edit, and textarea + submit.
  */
  const [text, setText] =
    useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
  ornare convallis sapien eget varius. Fusce eros nisi, posuere eu
  eros id, faucibus finibus odio. Maecenas sagittis at est id
  faucibus. Vestibulum vitae urna blandit, luctus lacus eu, mattis
  nunc. Phasellus volutpat mauris in lectus viverra finibus. Nunc
  sagittis arcu ac velit condimentum pretium. Suspendisse potenti. Sed
  vitae nisi laoreet, ornare lectus ac, gravida turpis.`);

  return (
    <div className="information-div">
      <form>
        <h3>{props.heading}</h3>
        <p id="paragraph">{text}</p>
        <textarea id="textArea"></textarea>
        <button type="button" id="editButton" onClick={handleEditButton}>
          Edit
        </button>
        <button type="button" id="submitButton" onClick={handleSubmitButton}>
          Submit
        </button>
      </form>
    </div>
  );

  function handleEditButton() {
    const para = document.getElementById("paragraph");
    const textArea = document.getElementById("textArea");
    const editButton = document.getElementById("editButton");
    const submitButton = document.getElementById("submitButton");

    textArea.style.display = "block";
    submitButton.style.display = "block";

    textArea.value = para.innerHTML;

    para.style.display = "none";
    editButton.style.display = "none";
  }

  function handleSubmitButton() {
    const para = document.getElementById("paragraph");
    const textArea = document.getElementById("textArea");
    const editButton = document.getElementById("editButton");
    const submitButton = document.getElementById("submitButton");

    setText(textArea.value);

    para.style.display = "block";
    editButton.style.display = "block";

    para.innerHTML = text;

    textArea.style.display = "none";
    submitButton.style.display = "none";
  }
}

export default Information;
