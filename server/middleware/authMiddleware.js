import { LocalStorage } from "node-localstorage";
import url from "url";

var localStorage = new LocalStorage("./users");

const protect = (req, res, next) => {
    var url_parts = url.parse(req.url);
    const currentPath = url_parts.pathname.split("/")[1];

    console.log(url_parts.pathname.split("/")[1]);

    console.log("Auth middleware called!!");
    const userData = localStorage.getItem("user").split(",");
    if (userData.length === 0) {
        res.json("Not Loggedin").status(502);
    } else if (userData[1] !== "faculty") {
        res.json("You dont have permission to this route").status(502);
    }
    next();
};

const adminProtect = (req, res, next) => {};

export { protect };
