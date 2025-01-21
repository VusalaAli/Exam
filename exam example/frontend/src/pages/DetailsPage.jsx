import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";

const DetailsPage = () => {
  const [products, setproducts] = useState([]);
  const { id } = useParams();
  function getData() {
    fetch(`http://localhost:3000/women/` + id)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="detail-card">
        <ul>
          <li><img src={products.image} alt="" /></li>
          <li><p>{products.name}</p></li>
          <li><h4>${products.price}</h4></li>
        </ul>
      </div>
    </>
  );
};

export default DetailsPage;
