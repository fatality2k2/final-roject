import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/home.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
function NewProducts() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products?limit=20&offset=20"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  const history = useHistory();

  return (
    <>
      <h1>Here is some Top selling items</h1>

      <div className="box-grid">
        <div className="slider-container">
          {items.map((item, index) => (
            <Link
              key={item.id}
              to={`/item/${item.id}`}
              onClick={() => history.push(`/item/${item.id}`)}
              style={{ display: "inline-block", width: "33.33%" }}
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
      </div>
    </>
  );
}
export default NewProducts;
