import { useNavigate } from "react-router-dom";


export const getAuthData = () => {
    return JSON.parse(localStorage.getItem("auth")) || null;
};


export const LogoutUser = () => { 
    const navigate = useNavigate();
    localStorage.removeItem("auth");
    return navigate("/");
}