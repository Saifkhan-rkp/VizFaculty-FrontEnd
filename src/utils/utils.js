import { useNavigate } from "react-router-dom";


export const getAuthData = () => {
    return JSON.parse(localStorage.getItem("auth")) || null;
};


export const LogoutUser = () => { 
    window.localStorage.removeItem("auth");
    window.location.reload();
}