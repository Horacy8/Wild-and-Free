import React from "react";
import { Link } from "react-router-dom";
import Plant from "../../components/Plant/Plant.js";
import data from "../../data";
import "./CollectionPage.css";

function CollectionPage(props) {
  let products = [];
  if (props.match.params.category === "cala") {
    products = data.products;
  } else if (props.match.params.category === "bestseller") {
    products = data.products.filter((item) => {
      const productList = item.isBestseller;
      return productList;
    });
  } else if (props.match.params.category === "nowosci") {
    products = data.products.filter((item) => {
      const productList = item.isNew;
      return productList;
    });
  } else {
    products = data.products.filter((item) => {
      const productList = item.category === props.match.params.category;
      return productList;
    });
  }

  console.log(props.match.params);

  let categoryName = "";
  switch (props.match.params.category) {
    case "sukienki":
      categoryName = "Sukienki";
      break;
    case "bluzy":
      categoryName = "Bluzy";
      break;
    case "spodnie":
      categoryName = "Spodnie";
      break;
    case "spodnice":
      categoryName = "Spódnice";
      break;
    case "bestseller":
      categoryName = "Bestseller";
      break;
    case "nowosci":
      categoryName = "Nowości";
      break;
    default:
      categoryName = "Kolekcja";
  }

  return (
    <section className="collection-page">
      <h2 className="collection-page__name">{categoryName}</h2>
      <Plant />
      <ul className="collection-page__product-list">
        {products.map((item) => {
          return (
            <li key={item._id} className="collection-page__product-item">
              <Link to={`/produkt/${item._id}`}>
                <img
                  className="collection-page__product-img"
                  src={item.image[0]}
                  alt={item.category}
                />
                <p className="collection-page__product-name">{item.name}</p>
                <strong className="collection-page__product-price">
                  {item.price},00 zł
                </strong>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CollectionPage;
