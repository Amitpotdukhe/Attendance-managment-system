import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
// import Link from '@mui/joy/Link';

export default function AddFacultyForm() {
    return (
        <CssVarsProvider>
            <main>
                <Sheet
                    sx={{
                        width: 450,
                        mx: "auto", // margin left & right
                        my: 4, // margin top & botom
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        borderRadius: "sm",
                        boxShadow: "md",
                    }}
                    variant="outlined"
                >
                    <div>
                        <Typography level="h4" component="h1">
                            <b>Add New Faculty!!!</b>
                        </Typography>
                    </div>
                    <TextField name="id" type="email" label="Id" />
                    <TextField name="email" type="email" label="Email" />
                    <TextField
                        name="fname"
                        type="text"
                        placeholder=""
                        label="First Name"
                    />
                    <TextField name="lname" type="email" label="Last Name" />
                    <TextField
                        name="password"
                        type="password"
                        placeholder="password"
                        label="Password"
                    />

                    <Button sx={{ mt: 1 }}>Add Faculty</Button>
                </Sheet>
            </main>
        </CssVarsProvider>
    );
}
