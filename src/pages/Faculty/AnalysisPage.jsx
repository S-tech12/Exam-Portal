import Footer from "../Footer";
import { FaUserCircle } from "react-icons/fa";
import "../../CSS/Faculty/ExamAnalysis.css";
import {
    PieChart,
    Pie,
    Cell,
    Legend,
    Tooltip,
} from "recharts";

export default function FacultyExamAnalysis() {
    const data = [
        { name: "High (70–100%)", value: 45 },
        { name: "Medium (40–69%)", value: 35 },
        { name: "Low (<40%)", value: 20 },
    ];

    const COLORS = ["#22c55e", "#facc15", "#ef4444"];

    return (

        <>
            <div className="dashboard">

                {/* HEADER */}
                <header className="dashboard-header">
                    <h1>Exam Portal</h1>
                    <h2>Exam Analysis</h2>
                    <FaUserCircle className="profile-icon" />
                </header>

                <div className="analysis-page">

                    {/* TOP GRID */}
                    <div className="analysis-top">

                        {/* EXAM DETAILS */}
                        <div className="analysis-card">
                            <h3>Exam Details</h3>
                            <p><b>Exam:</b> DSA Mid Term</p>
                            <p><b>Subject:</b> Data Structures</p>
                            <p><b>Total Students:</b> 120</p>
                            <p><b>Average Marks:</b> 18 / 30</p>
                            <p><b>Pass Percentage:</b> 82%</p>
                        </div>

                        {/* PERFORMANCE CHART */}
                        <div className="analysis-card">
                            <h3>Performance Distribution</h3>

                            <PieChart width={500} height={320}>
                                {/* Bottom shadow layer (3D effect) */}
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    cx="40%"
                                    cy="55%"
                                    outerRadius={110}
                                    innerRadius={40}
                                    fill="#8884d8"
                                    opacity={0.35}
                                />

                                {/* Main pie */}
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    cx="40%"
                                    cy="45%"
                                    outerRadius={110}
                                    innerRadius={40}
                                    label={({ percent }) =>
                                        `${(percent * 100).toFixed(1)}%`
                                    }
                                >
                                    {data.map((_, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index]}
                                        />
                                    ))}
                                </Pie>

                                <Tooltip />
                                <Legend
                                    layout="vertical"
                                    align="right"
                                    verticalAlign="middle"
                                />
                            </PieChart>
                        </div>
                    </div>

                    {/* INSIGHTS */}
                    <div className="analysis-insights">
                        <div className="insight-box green">
                            Highest Score: <b>28 / 30</b>
                        </div>
                        <div className="insight-box red">
                            Lowest Score: <b>6 / 30</b>
                        </div>
                        <div className="insight-box blue">
                            Most Frequent Range: <b>15 – 20</b>
                        </div>
                    </div>

                    {/* STUDENT LIST */}
                    <div className="student-result-card">
                        <h3>Student Performance</h3>

                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Student Name</th>
                                    <th>Marks</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Patel Dhruv</td>
                                    <td>28 / 30</td>
                                    <td className="pass">Pass</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Patel Rishin</td>
                                    <td>25 / 30</td>
                                    <td className="pass">Pass</td>
                                </tr>
                                <tr>
                                    <td>118</td>
                                    <td>Rahul Shah</td>
                                    <td>6 / 30</td>
                                    <td className="fail">Fail</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
