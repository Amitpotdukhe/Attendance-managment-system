const protect = (req, res, next) => {
    console.log("Auth middleware called!!");
    next();
};

export { protect };
