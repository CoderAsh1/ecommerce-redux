import { Button, Typography } from "@mui/material";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Delete, Height } from "@mui/icons-material";
import { incrementQty, decrementQty, deleteItem } from "../../Store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let cartQty =
    cart.length &&
    cart.reduce((ini, acc) => {
      return ini + acc.qty;
    }, 0);
  let total =
    cart.length &&
    cart.reduce((ini, acc) => {
      return ini + acc.price * acc.qty;
    }, 0);

  return (
    <div className="cart-container">
      <Typography variant="h4">Cart</Typography>
      <div className="cart">
        <div className="items">
          {cart &&
            cart.map((prod) => (
              <div key={prod.id} className="cart-item">
                <div className="img-container">
                  <img src={prod.image} alt="prod" width="100%" />
                </div>
                <div className="details">
                  <Typography className="title" variant="p">
                    {prod.title}
                  </Typography>
                  <Typography variant="h6">
                    $ {prod.price} x {prod.qty}
                  </Typography>
                  <div className="qty-btn">
                    <Button
                      onClick={() =>
                        prod.qty > 1 && dispatch(decrementQty(prod.id))
                      }
                    >
                      -
                    </Button>
                    {prod.qty}
                    <Button onClick={() => dispatch(incrementQty(prod.id))}>
                      +
                    </Button>
                  </div>
                </div>

                <Button
                  sx={{ width: "5px" }}
                  className="delete-btn"
                  variant="contained"
                  onClick={() => dispatch(deleteItem(prod.id))}
                >
                  <Delete />
                </Button>
              </div>
            ))}
        </div>
        <div className="checkout">
          <Typography variant="h5">Total Items : {cartQty}</Typography>
          <Typography variant="h6">
            Total amount : {total.toFixed(2)}
          </Typography>

          <Button className="checkout-btn" variant="contained">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
