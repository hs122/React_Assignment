import React, { useContext } from "react"
import classes from "./ProductListing.module.css"
import ProductItem from "./ProductItem"
import Card from "../Card/Card"



const ProductListing = props => {



    return <section className={classes.list}>

        <h1 className={classes['users-name']}>Users</h1>
        <Card>
            {props.items.map((user) => (
                <ProductItem
                    user={user}
                    onShown={props.onShow}
                />
            ))}
        </Card>
    </section>

}

export default ProductListing