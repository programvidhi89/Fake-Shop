import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://fakestoreapi.com/products")
      .catch((err) => console.log("Err", err));

    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //   console.log("Products:", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
