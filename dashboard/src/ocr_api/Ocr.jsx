import axios from 'axios';
import './App.css';
import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Ocr() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState(10);

  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("file", selectedFile);
    setLoading(false);

    try {
      const response = await axios({
        method: "post",
        url: "https://app.nanonets.com/api/v2/OCR/Model/c8101cb0-1968-43dd-9aee-d564299656a6/LabelFile/",
        data: formData,
        headers: {
          "authorization": "Basic " + btoa("_AXtFkD24ssSSY9oEJBZjEg50vFXNJ3Q:")
        }
      })
      .then((res) => {
        setData([res.data.result[0].prediction[0].cells]);
        setColumns(res.data.result[0].prediction[0].cells.length / 10);
        console.log(res.data.result[0].prediction[0].cells);
      })
    } catch(error) {
      console.log(error)
    }

    setLoading(true);
  }



  const students = [
    {
      roll: "401",
      name: "Harshal Atmaramani"
    },
    {
      roll: "402",
      name: "Shveta Yadav"
    },
    {
      roll: "403",
      name: "Swati Dhoke"
    },
    {
      roll: "404",
      name: "Nikhil Tidke"
    },
    {
      roll: "405",
      name: "Amit Potdukhe"
    },
    {
      roll: "406",
      name: "Tejas Borade"
    },
    {
      roll: "407",
      name: "Tanushree Dhongale"
    },
    {
      roll: "408",
      name: "Rahul Atkar"
    },
    {
      roll: "409",
      name: "Tanushree Dhongale"
    },
    {
      roll: "410",
      name: "Rahul Atkar"
    },
  ]
  
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const incrementDates = () => {
    setCount(count+1);
  }

  return (
    <div className="ocr-container">
      <div className="table-container">
      
      <TableContainer style={{ width: "auto" }} component={Paper}>
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell height="50px">Roll No.</TableCell>
              <TableCell height="50px" align="center">Name</TableCell>
            </TableRow>

            {
              students.map((student) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {student.roll}
                  </TableCell>
                  <TableCell align="right">{student.name}</TableCell>
                </TableRow>
              ))
            }

            <TableRow></TableRow>
          </TableHead>
        </Table>
      </TableContainer>



      <TableContainer style={{ width: "auto" }} component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
                loading && (
                  data[0].length > 0 && (
                    [...Array(columns)].map((_, i) => {
                      return (
                         <TableCell >
                            <TextField  placeholder="dd-mm-yyyy" type="date"/>
                         </TableCell>
                      );
                    })
                  )
                )
              }
            

            <TableCell align="center">
              <form style={{display:"flex",}} onSubmit={handleSubmit}>
                <input className='fileField' type="file" onChange={handleFileSelect}/>
                <input className='submitBtn' type="submit" value="Upload File" />
              </form>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              loading && (
                data[0].length > 0 && (
                  [...Array(rows)].map((_, i) => {
                    return (
                      <TableRow>
                        {
                          data[0].filter((data) => data.row === i+1).map((data) => 
                          {
                            return (
                              <TableCell align="center" height="18px">
                                {
                                  data.text === 'A' ? (
                                    <Typography color="error" style={{fontWeight: "bold"}} variant="">
                                      {data.text}
                                    </Typography>
                                  ) : (
                                    <Typography color="primary" style={{fontWeight: "bold"}} variant="p">
                                      {data.text}
                                    </Typography>
                                  )
                                }
                              </TableCell>
                            )
                          })
                        }
                      </TableRow>
                    );
                  })
                )
              )
              
            }
            

          

            {
                loading && (
                  data[0].length > 0 && (
                    [...Array(columns)].map((_, i) => {
                      return (
                         <TableCell align="center">
                            <Button variant="outlined">Publish</Button>
                         </TableCell>
                      );
                    })
                  )
                )
              }


        </TableBody>
      </Table>
    </TableContainer>
    </div>

    </div>
  );
}

export default Ocr;
