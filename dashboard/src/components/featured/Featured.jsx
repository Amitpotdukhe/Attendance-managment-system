import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Attendance Today</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="bottom">

        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>

        <p className="title positive">Total Students</p>
        <p className="amount">69</p>
        
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Total Absent Students</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">20</div>
            </div>
          </div>
          {/* <div className="item">
            <div className="itemTitle"></div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">124</div>
            </div>
          </div> */}
          <div className="item">
            <div className="itemTitle">Total Present Students</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">49</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Featured;
