import '../assets/css/error.css';

const ErrorPage = () => {
    return (
        <div>
          <div className="not-found-overlay"></div>
          <div className="not-found-container">
            <h1 className="not-found-heading">Oops! Error 404 😭</h1>
            <p className="not-found-message">The page you are looking for could not be found.</p>
          </div>
        </div>
      );
    };

export default ErrorPage
