import React from "react";
import { useParams } from "react-router-dom";

import { Accordion } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./details.css";
import { Button } from "@mui/material";
function ItemDetails() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products?limit=3&offset=3"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  const history = useHistory();

  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await response.json();
      setItem(data);
    }
    fetchData();
  }, [id]);
  console.log(item);
  // on add to card click save the item in the local storage
  const addToCart = () => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    // history.push('/cart');
  };
  return (
    <div>
      <div>
        {item ? (
          <>
            <div className="everything">
              <div className="image">
                <img
                  className="img"
                  style={{ width: "%" }}
                  src={item.images}
                  alt={item.title}
                />
              </div>
              <div className="textside">
                <div>
                  <div className="title">
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "pooppins",
                        fontSize: "25px",
                      }}
                    >
                      {item.title}
                    </p>
                  </div>

                  <div className="price">
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "pooppins",
                        fontSize: "20px",
                        color: "#e2342d",
                      }}
                    >
                      $ {item.price}
                    </p>
                  </div>
                  <div className="buttons">
                    <Button variant="outlined">BLACK</Button>
                    <Button variant="outlined">GOLD</Button>
                    <Button variant="outlined">APOLLO</Button>
                  </div>

                  <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    color="secondary"
                    onClick={addToCart}
                  >
                    ADD TO CART
                  </Button>
                  <Accordion.Header>Description</Accordion.Header>
                  <p>{item.description}</p>

                  <Accordion defaultActiveKey="0">
                    <Accordion.Body>{item.description}</Accordion.Body>

                    <button style={{ marginTop: "20px", marginBottom: "20px" }}>
                      Return Policy
                    </button>
                    <Accordion.Body>
                      A return policy is a set of rules a retailer creates to
                      manage how customers return and exchange unwanted
                      merchandise they've purchased. Return policies tell
                      customers what items can be returned and for what reasons,
                      as well as the timeframe over which returns are accepted
                    </Accordion.Body>

                    <button style={{ marginTop: "20px", marginBottom: "20px" }}>
                      Citizen Policy
                    </button>
                    <Accordion.Body>
                      Citizens online and mobile-friendly, policyholder
                      self-service tool. You can use myPolicy to view and
                      download policy documents (excluding claims documents);
                      submit a claim; and view your policy, claims and billing
                      information. You also can make payments under certain
                      conditions.
                    </Accordion.Body>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="alsolike">
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "pooppins",
                  fontSize: "25px",
                  padding: "50px",
                }}
              >
                YOU MAY ALSO LIKE
              </p>

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
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ItemDetails;
