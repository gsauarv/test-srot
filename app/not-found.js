const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Oh no! We can't seem to find the page you're looking for.</h2>
      <p>
        The page you requested may not exist, or the URL might be incorrect.
      </p>
      <a href="/">Go back to the homepage</a>
    </div>
  );
};

export default NotFoundPage;
