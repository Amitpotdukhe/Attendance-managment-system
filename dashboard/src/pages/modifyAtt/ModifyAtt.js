import Steper from "./Steper";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const MarkAttendance = ({ inputs, title }) => {
    const [file, setFile] = useState("");

    return (
        <div className="new">
            <div className="newContainer">
                <div style={{ width: "70vw", margin: "20px" }}>
                    <Steper />
                </div>
            </div>
        </div>
    );
};

export default MarkAttendance;
