import React from "react";
import { Link } from "react-router";
import { Helmet } from 'react-helmet-async';
const NoPage = () => {
  return (
    <>
      <Helmet>
        <title>No Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2>404 Not Found</h2>
      <button>
        <Link to="/">Go Home</Link>
      </button>
    </>
  );
};

export default NoPage;
