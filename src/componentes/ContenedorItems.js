import React, { useContext, useState, useEffect } from "react";
import { Context } from '../Context'
import Item from './Item'


const ContenedorItems = () => {
    const { state, setState } = useContext(Context);

    const [items,setItems] = useState([]);

    useEffect(() => {
        setItems(state)
    },[state])
    console.log(items);

    
    return (
        <>
        {console.log(items)}
        <h2>Itemsss</h2>
        
        {items.slice(0, 4).map((item, i) => {
            return(
            <div key={i}>
                <Item title={item.title} price={item.price} province={item.address.state_name} image={item.thumbnail} />
                 {/* <p>{item.title} </p> */}
            </div>
            )
        })}

        
            {/* {console.log(items)}
            <h2>Itemsss</h2>


        
        
            {items.slice(0, 5).map((item, i) => {
                return(
                    <div key={i}>
                        <Item title={item.title} />
                    </div>
        )

    })} */}
        </>
  ) 

}
export default ContenedorItems;
