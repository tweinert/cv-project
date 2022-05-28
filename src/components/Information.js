import React from "react";
import "./../styles/Information.css";

class Information extends React.Component {
  /*
  Include paragraph, textarea, edit button, submit button.
  Use Display: none to switch between p + edit, and textarea + submit.
  */
  render() {
    return (
      <div className="information-div">
        <form>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            ornare convallis sapien eget varius. Fusce eros nisi, posuere eu
            eros id, faucibus finibus odio. Maecenas sagittis at est id
            faucibus. Vestibulum vitae urna blandit, luctus lacus eu, mattis
            nunc. Phasellus volutpat mauris in lectus viverra finibus. Nunc
            sagittis arcu ac velit condimentum pretium. Suspendisse potenti. Sed
            vitae nisi laoreet, ornare lectus ac, gravida turpis.
          </p>
          <textarea></textarea>
          <button id="editButton">Edit</button>
          <button id="submitButton">Submit</button>
        </form>
      </div>
    );
  }
}

export default Information;
