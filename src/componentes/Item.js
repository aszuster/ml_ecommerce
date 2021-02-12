import React, { useContext, useState, useEffect } from "react";
import { Context } from '../Context'
import { ContenedorItems } from './ContenedorItems'

const Item = ({title, price, province, image}) => {
    return(
        <>
        <h2>{title}</h2>
        <h3>${price}</h3>
        <p>{province}</p>
        <img src={image} alt={title}/>
        </>
    )
}

export default Item