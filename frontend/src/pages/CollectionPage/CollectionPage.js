import React from "react";
import { Link } from "react-router-dom";
import data from "../../data";
import "./CollectionPage.css";

function CollectionPage(props) {
  const products = data.products.filter((item) => {
    let productList = item.category === props.match.params.category;
    return productList;
  });

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
    default:
      categoryName = "Kolekcja";
  }

  return (
    <section className="collection-page">
      <h2 className="collection-page__name">{categoryName}</h2>
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
