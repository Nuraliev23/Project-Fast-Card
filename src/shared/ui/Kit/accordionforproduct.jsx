import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import toast from "react-hot-toast";

import stars from "@images/Five star.png";

let api = import.meta.env.VITE_API_URL;
import {
  addToCart,
  addToWishlist,
  get2,
  GetBrands,
  GetMinPrice,
} from "../../../entities/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { TextField } from "@mui/material";
import axios from "axios";
import Button from "./button";

const Accordionforproduct = () => {
  const dispatch = useDispatch();
  //   let { filterPoducts } = useSelector((store) => store.counter);
  let { wishlist } = useSelector((store) => store.counter);
  const { brands } = useSelector((store) => store.counter);
  const { data2 } = useSelector((store) => store.counter);
  const { minprice } = useSelector((store) => store.counter);
  //   console.log(minprice);
  const [filterPoducts, setFilterProducts] = React.useState([]);
  const [minPrice, setminPrice] = React.useState("");
  const [categoryId, setcategoryId] = React.useState("");
  const [brandId, setBrandId] = React.useState("");
  console.log(brandId + "brand", categoryId + "category");

  const getProductFilter = async (brandID = "", categoryID = "") => {
    try {
      let { data } = await axios.get(
        `${api}/Product/get-products?BrandId=${brandID}&CategoryId=${categoryID}`
      );
      setFilterProducts(data.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  function post() {
    toast.success("Added to Wishlist");
  }
  function erpost() {
    toast.error("Deleted from Wishlist");
  }

  React.useEffect(() => {
    dispatch(get2());
    dispatch(GetBrands());
    dispatch(GetMinPrice(300));
  }, []);
  React.useEffect(() => {
    getProductFilter(JSON.stringify(brandId), JSON.stringify(categoryId));
  }, [brandId, categoryId]);
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start gap-[30px]">
        <aside className="md:w-[25%] w-[90%] mx-auto">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Category</Typography>
            </AccordionSummary>
            {data2.map((el) => {
              return (
                <AccordionDetails key={el.id}>
                  <Typography className="flex gap-[10px]">
                    <input
                      value={categoryId}
                      onChange={() => setcategoryId(el.id)}
                      type="radio"
                      className="accent-[red]"
                      name="filter1"
                    />
                    {el.categoryName}
                  </Typography>
                </AccordionDetails>
              );
            })}
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Brands</Typography>
            </AccordionSummary>
            {Array.isArray(brands) &&
              brands.map((el) => {
                return (
                  <AccordionDetails key={el.id}>
                    <Typography className="flex gap-[10px]">
                      <input
                        value={brandId}
                        onChange={() => setBrandId(el.id)}
                        type="radio"
                        className="accent-[red]"
                        name="filter2"
                      />
                      {el.brandName}
                    </Typography>
                  </AccordionDetails>
                );
              })}
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Features</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="flex gap-[10px]">
                <input
                  type="checkbox"
                  className="accent-[red]"
                  name="filter2"
                />
                Metallic
              </Typography>
              <Typography className="flex gap-[10px]">
                <input
                  type="checkbox"
                  className="accent-[red]"
                  name="filter2"
                />
                Plastic cover
              </Typography>
              <Typography className="flex gap-[10px]">
                <input
                  type="checkbox"
                  className="accent-[red]"
                  name="filter2"
                />
                8GB Ram
              </Typography>
              <Typography className="flex gap-[10px]">
                <input
                  type="checkbox"
                  className="accent-[red]"
                  name="filter2"
                />
                Super power
              </Typography>
              <Typography className="flex gap-[10px]">
                <input
                  type="checkbox"
                  className="accent-[red]"
                  name="filter2"
                />
                Lenovo
              </Typography>
              <Typography className="flex gap-[10px]">See all</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography component="span">Price range</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-[100%] flex flex-col gap-[30px]">
                <Typography component="div" className="flex gap-[10px]">
                  <input type="range" className="accent-[#DB4444]" />
                  <input type="range" className="accent-[#DB4444]" />
                </Typography>
                <Typography component="div" className="flex gap-[10px]">
                  <TextField
                    id="outlined-basic"
                    label="Min"
                    variant="outlined"
                    size="small"
                    placeholder="0"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Max"
                    variant="outlined"
                    size="small"
                    placeholder="0"
                  />
                </Typography>
                <button className="border-[1px] border-[#DB4444] text-[#DB4444] bg-transparent p-[12px_60px] rounded-[4px]">
                  Apply
                </button>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography component="span">Condition</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="flex gap-[10px]">
                <input type="radio" className="accent-[red]" name="filtering" />
                Any
              </Typography>
              <Typography className="flex gap-[10px]">
                <input type="radio" className="accent-[red]" name="filtering" />
                Refurbished
              </Typography>
              <Typography className="flex gap-[10px]">
                <input type="radio" className="accent-[red]" name="filtering" />
                Brand new
              </Typography>
              <Typography className="flex gap-[10px]">
                <input type="radio" className="accent-[red]" name="filtering" />
                Old items
              </Typography>
              <Typography className="flex gap-[10px]">See all</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              <Typography component="span">Ratings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="flex gap-[10px]">
                <input
                  type="checkbox"
                  className="accent-[red]"
                  name="filter2"
                />
                <Rating name="simple-controlled" />
              </Typography>
              <Typography className="flex gap-[10px]">
                <input
                  type="checkbox"
                  className="accent-[red]"
                  name="filter2"
                />
                <Rating name="simple-controlled" />
              </Typography>
              <Typography className="flex gap-[10px]">
                <input
                  type="checkbox"
                  className="accent-[red]"
                  name="filter2"
                />
                <Rating name="simple-controlled" />
              </Typography>
              <Typography className="flex gap-[10px]">
                <input
                  type="checkbox"
                  className="accent-[red]"
                  name="filter2"
                />
                <Rating name="simple-controlled" />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </aside>

        <aside className="flex flex-col items-center md:w-[75%] w-[90%] border-b-[1px] border-b-[#d6d4d4]  pb-[60px]">
          <div className=" flex md:flex-wrap gap-[20px] md:flex-row flex-col items-start">
            {filterPoducts.map((e) => (
              <div
                key={e.id}
                className="bg-[#F5F5F5] flex flex-col items-center p-[10px] gap-[10px] rounded-[10px] h-[350px] hover:shadow-lg w-[270px] mx-auto"
              >
                <div className="flex justify-between w-full">
                  <div className="flex gap-[8px] flex-col">
                    <button>
                      <NavLink to={`/getId/${e.id}`}>
                        <VisibilityIcon className="bg-white rounded-full p-[3px]" />
                      </NavLink>
                    </button>
                    <button
                      onClick={() => {
                        const alreadyInWishlist = wishlist.find(
                          (el) => el.id === e.id
                        );

                        dispatch(addToWishlist(e));

                        if (alreadyInWishlist) {
                          erpost();
                        } else {
                          post();
                        }
                      }}
                    >
                      {" "}
                      <FavoriteBorderIcon
                        className="bg-white rounded-full p-[3px]"
                        style={{
                          backgroundColor: wishlist.find((el) => el.id == e.id)
                            ? "#DB4444"
                            : "white",
                          color: wishlist.find((el) => el.id == e.id)
                            ? "white"
                            : "blue",
                        }}
                      />
                    </button>
                  </div>
                </div>
                <img
                  style={{ width: "150px", height: "170px" }}
                  src={e.image ? `${api}/images/${e.image}` : "placeholder.jpg"}
                  alt={e.productName}
                />
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <h1>{e.productName}</h1>
                  <div className="flex gap-[20px] items-center">
                    <p className="text-[#DB4444]">${e.price}</p>

                    <img src={stars} alt="stars" />
                  </div>
                  <button
                    onClick={() => dispatch(addToCart(e.id))}
                    className="bg-black text-white w-[100%]"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-[40px]">
            <Button text="More Products" />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Accordionforproduct;
