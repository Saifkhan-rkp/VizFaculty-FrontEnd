

export const getAuthData = () => {
    return JSON.parse(localStorage.getItem("auth")) || null;
};  