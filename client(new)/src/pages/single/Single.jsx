import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import Featured from "../../components/featured/Featured";


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        {/* <Navbar /> */}
        
        <div className="top">
          <div>
            <label for="cars">Choose a semister: </label>
            <select>
              <optgroup >
                <option value="volvo">1st Sem</option>
                <option value="saab">2nd Sem</option>
                <option value="saab">3rd Sem</option>
                <option value="saab">4th Sem</option>
              </optgroup>
            </select>
          </div>

          <Featured/>

          <div className="right">
            <Chart aspect={3 / 1} title="Semester Attendance uptil now." />
          </div>

        </div>

        <div className="bottom">
        <h1 className="title">Student List</h1>
          <List/>
        </div>

      </div>
    </div>
  );
};

export default Single;
