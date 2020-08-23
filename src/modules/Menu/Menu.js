import React from "react";

import Product from "../../components/Product/Product";
import "./Menu.scss";

function Menu(props) {
  const content = props.content;
  const cssClass = "Menu";

  const Products = (() => {
    return content.products.map((product, index) => {
      return (
        <li key={index} className={`${cssClass}-product`}>
          <Product content={product} />
        </li>
      );
    });
  })();

  return (
    <div className={cssClass}>
      <h3>{content.title}</h3>
      <ul className={`${cssClass}-products grid`}>{Products}</ul>
    </div>
  );
}

export default Menu;
