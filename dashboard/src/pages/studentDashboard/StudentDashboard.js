import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Accordions from "./Accordian";
import { Grid } from "@mui/material";
import SubjectCard from "./SubjectCard";

const StudentDashboard = () => {
    const subjects = [
        { sub: "Big Data Analytics", att: "33%" },
        { sub: "Cloud Computing", att: "40%" },
        { sub: "Software Engineering", att: "33%" },
        { sub: "Machine Learning", att: "33%" },
        { sub: "Software Engineering Lab", att: "33%" },
        { sub: "Blockchain Technology", att: "33%" },
    ];
    return (
        <div className="home">
            <div className="homeContainer">
                <Grid container direction="row">
                    <Widget type="CURRENT_SEM" />
                    <Widget type="CURRENT_SUB" />
                </Grid>

                {subjects.map((item) => {
                    return (
                        <Grid container direction="row">
                            <SubjectCard />
                        </Grid>
                    );
                })}

                <div className="widgets">
                    <Accordions />
                </div>

                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Attendance)" aspect={2 / 1} />
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
