import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "AMS",
});

const connectDb = async () => {
    await db.connect((err) => {
        if (err) {
            console.log("error");
        } else {
            console.log(`connected to mysql`.green.bold);
        }
    });
};
connectDb();

export default db;

// db.query("select * from blog_data", (err, result) => {
//     if (err) {
//         console.log("result", err);
//     } else {
//         console.log("result", result);
//     }
// });
