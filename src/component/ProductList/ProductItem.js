
import classes from './ProductItem.module.css';


import Button from '../Button/Button'

const ProductItem = props => {


    return (
        <div className={classes.item}>
            <div className={classes.pic}>
                <img src={props.user.pic} />
            </div>
            <h1 className={classes.name}>{props.user.name}</h1>
            <span>
                {props.user.email}
            </span>
            <span>{props.user.phone}</span>
            <Button onClicks={() => props.onShown(props.user)} />
        </div>
    )
}

export default ProductItem