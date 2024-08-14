import React from 'react'
import "./PaymentSuccess.css";
import { useNavigate } from "react-router-dom";

const Sucess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };
  return (
    <>
      <div className="payment-success-container">
        <div className="success-card">
          <div className="icon-container">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path
                className="checkmark-check"
                fill="none"
                d="M14 27l7 7 16-16"
              />
            </svg>
          </div>
          <h2>Payment Successful!</h2>
          <p>Your transaction was completed successfully.</p>
          <div className="order-details">
            <p><strong>Order ID:</strong> 200</p>
          </div>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  )
}

export default Sucess