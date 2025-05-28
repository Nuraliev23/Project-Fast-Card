import React from "react";
import TextField from "@mui/material/TextField";
import Accordionforproduct from "../../shared/ui/Kit/accordionforproduct";
import { store } from "../../app/store";
import { useSelector } from "react-redux";

const Products = () => {


  return (
    <div>
      <div className="pt-[60px] pb-[40px] max-w-[1200px] mx-auto flex justify-between items-center">
        <p>Home / Explore Our Products</p>
        <div>
          <TextField
            label="Populary"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            style={{ width: "220px" }}
          />
        </div>
      </div>
      <section className="max-w-[1200px] mx-auto">
     <Accordionforproduct/>
      </section>
    </div>
  );
};

export default Products;
