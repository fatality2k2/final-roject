import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/BannerForHome.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BannerForHome() {
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

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="slider-container">
        <button className="prev-button" onClick={handlePrevious}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
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
        <button className="next-button" onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
}
export default BannerForHome;
