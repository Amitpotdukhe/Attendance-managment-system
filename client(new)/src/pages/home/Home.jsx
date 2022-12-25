import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="STUDENTS" />
          <Widget type="FACULTY" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Attendance)" aspect={2 / 1} />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
