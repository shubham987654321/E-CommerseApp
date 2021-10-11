import React, {createContext, useReducer} from "react"
import ProductReducer from "./productReducer"
import iphone from "../assets/1.jpg";
import headphones from "../assets/2.jpg"
import microphone from "../assets/3.jpg"
import rings from "../assets/4.jpg"
import shoes from "../assets/5.jpg"
import watch from "../assets/6.jpg"
import perfum from "../assets/7.jpg"
import dslr from "../assets/8.jpg"
import watch1 from "../assets/watch1.jpg"
import watch2 from "../assets/watch2.jpg"
import watch3 from "../assets/watch3.jpg"
import watch4 from "../assets/watch4.jpg"


export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'Shirt', price: 40, image: dslr, productStatus: 'hot'},
        {id: 2, name: 'Watch', price: 200, image: perfum,productStatus: 'new'},
        {id: 3, name: 'Cotton-Shirt', price: 300, image: watch,productStatus: 'new'},
        {id: 4, name: 'Camera', price: 150, image: shoes,productStatus: 'new'},
        {id: 5, name: 'Sony-Camera', price: 160, image: microphone,productStatus: 'hot'},
        {id: 6, name: 'High-definition-Camera', price: 500, image: headphones,productStatus: 'new'},
        {id: 7, name: 'Camera Pro', price: 240, image: iphone,productStatus: 'hot'},
        {id: 8, name: 'Camera Olympus', price: 120, image: rings,productStatus: 'new'},
        // Watch series
        {id: watch1, name: 'Watch1', price: 120, image: watch1,productStatus: 'new'},
        {id: watch2, name: 'Watch1', price: 120, image: watch2,productStatus: 'new'},
        {id: watch3, name: 'Watch1', price: 120, image: watch3,productStatus: 'new'},
        {id: watch4, name: 'Watch1', price: 120, image: watch4,productStatus: 'new'}
      ])
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;