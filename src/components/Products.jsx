import { StarRate } from "@mui/icons-material";
import { Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  useGetCatagoryQuery,
  useGetProductsQuery,
  useGetCatDataQuery,
} from "../Store/productSlice";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";

const Products = ({ qty }) => {
  const [type, setType] = useState();
  const { data: cat } = useGetCatagoryQuery();
  let limit = qty ? 5 : 30;
  const { data: products, isLoading, isError } = useGetProductsQuery(limit);
  const { data: catData } = useGetCatDataQuery(type);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  if (isLoading) return "Loading...";

  if (isError) return "Something went wrong...";

  function n(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(1);
    }
    return arr;
  }

  function filterData() {
    let filterData = type ? catData : products;
    if (type === "select") filterData = products;

    return filterData;
  }

  return (
    <>
      {!qty && (
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Category :{" "}
          <select name="cat" id="cat" onChange={(e) => setType(e.target.value)}>
            <option value="select">Select Category</option>
            {cat &&
              cat.map((c) => (
                <option value={c} key={c}>
                  {c}
                </option>
              ))}
          </select>
        </Typography>
      )}
      <div className="prods">
        {filterData().map((prod) => (
          <Card
            key={prod.id}
            className="
        card"
          >
            <div className="img-container">
              <img src={prod.image} alt="prod" width="100%" />
            </div>
            <Typography variant="p">{prod.title.slice(0, 20)}..</Typography>
            <Typography variant="h6">$ {prod.price}</Typography>
            <Typography variant="p"></Typography>
            <div className="rating">
              {n(prod.rating.rate).map((n, i) => (
                <StarRate key={i} />
              ))}
            </div>
            <Button
              variant="contained"
              onClick={() => dispatch(addToCart({ ...prod, qty: 1 }))}
              style={
                cart.find((item) => item.id == prod.id)
                  ? {
                      color: "black",
                      background: "none",
                      border: "2px solid #db6904",
                    }
                  : { background: "#db6904" }
              }
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Products;
