import { Button, Grid, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import React, { useState } from "react";
import Table from "./Table";

const MarkAtt = () => {
    const [showTable, setShowTable] = useState(false);
    return (
        <Grid container direction="row" justifyContent="center">
            {!showTable ? (
                <div>
                    <Button
                        variant="contained"
                        component="label"
                        startIcon={<UploadFileIcon />}
                    >
                        Upload File
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <Typography
                        variant="h4"
                        style={{ margin: "0 20px 0 20px" }}
                    >
                        OR
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => setShowTable(true)}
                    >
                        Mark via table
                    </Button>
                </div>
            ) : (
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Table />
                    <Button variant="contained" style={{ margin: "20px" }}>
                        Submit attendance
                    </Button>
                </Grid>
            )}
        </Grid>
    );
};

export default MarkAtt;
