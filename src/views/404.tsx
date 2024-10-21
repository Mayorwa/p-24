import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="uk-section uk-section-2xlarge@m uk-flex-middle uk-flex-center"
      data-uk-height-viewport
    >
      <div className="uk-container">
        <div className="uk-width-2xlarge@m uk-margin-auto uk-text-center">
          <h3 className="uk-heading-xlarge">404</h3>
          <h1 className="uk-heading-medium">Page not found!</h1>
          <p>you seem quite curious</p>
          <Link to="/" className="uk-link-underline uk-margin-large-top@m">
            <i className="material-icons">arrow_back</i>
            <span>Back to Earth</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
