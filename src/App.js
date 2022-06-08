import React from 'react';
import './style.css';

export default function App() {
  return (
    <React.Fragment>
      <div className="mainParent">
        <div className="childLeftNav">
          <div className="leftChild">D</div>
          <div className="rightChild">Dummy Brand</div>
        </div>
        <div className="childRightNav">
          <div className="abt">About</div>
          <div className="prod">Products</div>
          <div className="blog">Blogs</div>
          <div className="cntc">Contact</div>
        </div>
      </div>
    </React.Fragment>
  );
}
