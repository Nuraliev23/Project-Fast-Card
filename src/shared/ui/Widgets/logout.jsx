import { useDispatch } from "react-redux";
import { logout } from "../../entities/reducers/counterSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
