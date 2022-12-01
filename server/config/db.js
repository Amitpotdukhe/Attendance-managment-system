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
