import { useDispatch } from "react-redux";
import { logout } from "../../entities/reducers/counterSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());        // 1. Удаляем токен из Redux и localStorage
    navigate("login");        // 2. Перенаправляем на страницу входа
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
