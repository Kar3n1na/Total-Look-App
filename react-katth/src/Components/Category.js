import React from "react";
import "./Category.css";
import clothes from "../Assets/clothes.png"

function Category() {
    return (
        <div class="contendor">
            <img src={clothes} alt=""></img>
            <div class="texto-encima"></div>
        </div>
    );
}

export default Category;
