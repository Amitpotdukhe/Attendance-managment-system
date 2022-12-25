import "./table.scss";
import React from "react"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1946491245061,
      name: "Amit Potdukhe",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      percentage: "78%",
      status: "Safe",
    },
    {
      id: 1946491245062,
      name: "Nikhil Tidke",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      percentage: "78%",
      status: "Safe",
    },
    {
      id: 1946491245063,
      name: "Tanushree Dhongale",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      percentage: "78%",
      status: "Not Safe",
    },
    {
      id: 1946491245064,
      name: "Tejas Borade",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      percentage: "78%",
      status: "Safe",
    },
    {
      id: 1946491245065,
      name: "Prajwal Bhasme",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      percentage: "78%",
      status: "Safe",
    },
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Profile Pic</TableCell>
            <TableCell className="tableCell">Prn No.</TableCell>
            <TableCell className="tableCell">Full Name</TableCell>
            <TableCell className="tableCell">Total Attendance</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>

              <TableCell className="tableCell">{row.id}</TableCell>

              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.percentage}</TableCell>
              <TableCell className="tableCell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
