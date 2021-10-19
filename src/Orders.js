import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

function Orders() {
  

  return (
    <div className="orders">
      <h1>Your Orders</h1>
    </div>
  );
}

export default Orders;
