import Sidebar from "../../components/sidebar/Sidebar";
import Steper from "./Steper";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const MarkAttendance = ({ inputs, title }) => {
    const [file, setFile] = useState("");

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <div style={{ width: "70vw", margin: "20px" }}>
                    <Steper />
                </div>
            </div>
        </div>
    );
};

export default MarkAttendance;
