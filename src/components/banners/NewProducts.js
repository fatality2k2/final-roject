/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/home.css";
import { useEffect, useState } from "react";

function NewProducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products?limit=4&offset=4"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  const history = useHistory();

  return (
    <>
      <div className="box-grid">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            onClick={() => history.push(`/item/${item.id}`)}
          >
            <div className="imageBoxProduct">
              <img
                className="imageProduct"
                src={item.category.image}
                alt={item.title}
              />
            </div>
            <div className="titleNewProduct">{item.title}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
export default NewProducts;
