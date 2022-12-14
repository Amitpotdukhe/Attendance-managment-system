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
        <Grid container justifyContent="center">
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
                        defaultValue={30}
                        inputProps={{
                            name: "age",
                            id: "uncontrolled-native",
                        }}
                    >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </Grid>
        </Grid>
    );
};
export default Datepicker;
