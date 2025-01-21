import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const WomenProducts = () => {
  const [products, setproducts] = useState([]);
  const [search, setsearch] = useState("");
  function handleSearch(e) {
    setsearch(e.target.value);
  }
  function getData() {
    fetch(`http://localhost:3000/women`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="women-products-text">
          <h2>New realeased Products for Women</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="search-input">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search..."
          />
        </div>
        <div className="cards">
          <div className="row">
            {products
              .filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((x) => (
                <div className="col-3" key={x._id}>
                  <img src={x.image} />
                  <p>{x.name}</p>
                  <h4>${x.price}.00</h4>
                  <Link to={`details/${x._id}`}>Details</Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WomenProducts;
