import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router";
const Dashboard = () => {
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
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
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
            <NavLink to="/">Home</NavLink>
          </p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <p>
            <NavLink to="contact">Contact</NavLink>
          </p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <p>
            <NavLink to="about">About</NavLink>
          </p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <p>
            <NavLink to="signup">Sign Up</NavLink>
          </p>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Dashboard;
