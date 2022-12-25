import { LocalStorage } from "node-localstorage";

var localStorage = new LocalStorage("./users");

const protect = (req, res, next) => {
    console.log("Auth middleware called!!");
    const userData = localStorage.getItem("user").split(",");
    if (userData.length === 0) {
        console.log("Login first.");
    } else if (userData[1] !== "HOD") {
        console.log("Not authenticated");
    } else {
        console.log("Login success");
    }
    next();
};

export { protect };
