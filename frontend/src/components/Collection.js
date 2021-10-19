import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import "./Collection.css";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

function Collection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();

    window.scroll(0, 0);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="collection">
          <h2 className="collection__title">Kolekcja</h2>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Collection;
