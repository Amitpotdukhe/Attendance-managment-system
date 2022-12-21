import {
    FormControl,
    Grid,
    InputLabel,
    NativeSelect,
    Typography,
} from "@mui/material";
import React from "react";

import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ margin: "50px" }}
        >
            <div>
                <Grid container direction="row" alignItems="center">
                    <Typography>Select Date: </Typography>
                    <input type="date" />
                </Grid>
                <br />
                <Grid container direction="row" alignItems="center">
                    <Typography>Choose Slot: </Typography>
                    <FormControl>
                        <InputLabel
                            variant="standard"
                            htmlFor="uncontrolled-native"
                        >
                            Slots
                        </InputLabel>
                        <NativeSelect
                            defaultValue={1}
                            inputProps={{
                                name: "age",
                                id: "uncontrolled-native",
                            }}
                        >
                            <option value={10}>1</option>
                            <option value={20}>2</option>
                            <option value={30}>3</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
            </div>
        </Grid>
    );
};
export default Datepicker;
