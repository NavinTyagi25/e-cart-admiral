import React, { useState } from 'react';
import Modal from './modal';
const ProductsDetails = () => {
  const products = [
    { name: 'Item 1', price: 10, imgPath: 'https://designmodo.com/demo/shopping-cart/item-1.png' },
    { name: 'Item 2', price: 30, imgPath: 'https://designmodo.com/demo/shopping-cart/item-1.png' },
    { name: 'Item 3', price: 30, imgPath: 'https://designmodo.com/demo/shopping-cart/item-1.png' },
  ];
  const [show, setShowFlag] = useState(false);
  return (
    <div className="Items">
      {products.map((p) => {
        return (
          <div className="item">
            <div className="img">
              <img src={p.imgPath} />
            </div>
            <div className="content">
              <p>{p.name}</p>
              <p>
                <b>${p.price}</b>
              </p>
            </div>
          </div>
        );
      })}
      <div>
        <button name="Paymeent" className="btn" onClick={() => setShowFlag(true)}>
          {' '}
          Payment
        </button>
      </div>
      {show && <Modal onClose={() => setShowFlag(false)}></Modal>}
    </div>
  );
};

export default ProductsDetails;
