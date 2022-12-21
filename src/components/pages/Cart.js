import React from "react";
import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";

const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      setItems(items);
    }
  }, []);
  // console.log(items)

  // remove only one item from the cart
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    console.log(id);
    setItems(newItems);
    localStorage.removeItem("cart", JSON.stringify(newItems));
  };
  const buyItem = (id) => {};
  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
              <th>Buy</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.id}</td>

                <td>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </td>
                <td>
                  <button onClick={() => buyItem(item.id)}>Buy</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Cart;
