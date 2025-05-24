import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router";
import user from "../../pages/home/images/user.png";

const Accauntdashboard = () => {

      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    
  return (
    <div >
      <div >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={user} className="text-[white]" alt="" />
      </Button>
      <div >
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <p>
            <NavLink to="account">Account</NavLink>
          </p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <p>
            <NavLink to="checkout">My Order</NavLink>
          </p>
        </MenuItem>
        <div onClick={handleClose} className="block md:hidden pl-[15px]">
          <p className="block md:hidden">
            <NavLink to="wishlist">Wishlist</NavLink>
          </p>
        </div>
        <MenuItem onClick={handleClose}>
        <p onClick={()=>localStorage.removeItem('Token')}>
            <NavLink to="login">
                Logout
            </NavLink>
        </p>
        </MenuItem>
      </Menu>
      </div>
      </div>
    </div>
  )
}

export default Accauntdashboard