import React, { useState } from 'react';

const CheckoutPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15, quantity: 1 },
  ]);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('Checkout successful!');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <form onSubmit={handleCheckout}>
        <div className="checkout-section">
          <h2>Billing Details</h2>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="address">Shipping Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 Street, City, Country"
              required
            />
          </div>
        </div>

        <div className="checkout-section">
          <h2>Payment Information</h2>
          <div>
            <label htmlFor="payment-method">Payment Method</label>
            <select
              id="payment-method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Order Summary</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price} = $
                {item.quantity * item.price}
              </li>
            ))}
          </ul>
          <div>
            <strong>Total: ${totalAmount}</strong>
          </div>
        </div>

        <button type="submit" className="checkout-button">
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
