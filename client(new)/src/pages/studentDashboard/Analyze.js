import React from "react";
import Chart from "../../components/chart/Chart";
import Sidebar from "../../components/sidebar/Sidebar";

const Analyze = () => {
    return (
        <>
            <div className="home">
                {/* <Sidebar /> */}
                <div className="homeContainer">
                    <div className="widgets"></div>

                    <div className="charts">
                        <Chart
                            title="Last 6 Months (Attendance)"
                            aspect={2 / 1}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Analyze;
