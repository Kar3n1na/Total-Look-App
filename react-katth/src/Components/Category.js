import React from "react";
import "./Category.css";
import clothes from "../Assets/clothes.png"
function Category() {
    return (
        <div class="contendor">
            <img src={clothes} alt="" />
            <div class="texto-encima">Texto Imagen :3</div>
        </div>
    );
}

export default Category;
