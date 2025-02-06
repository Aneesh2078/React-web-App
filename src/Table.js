import React from "react";
import Header from "./Header";

function Table() {
    return (
        <div>
            <style>
                {` 
                    tr, td, th {
                        padding: 10px;
                        border: 1px solid black;
                        text-align: center;
                        border-collapse: collapse;
                    }
                    table {
                        margin: auto;
                    }
                `}
            </style>
            <Header />
            <table border="1px solid black">
                <thead>
                    <tr>
                        <td>Sl.No</td>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                        <td>Saturday</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Maths</td>
                        <td>Python</td>
                        <td>OS</td>
                        <td>ADS</td>
                        <td colSpan="2">Python Lab</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Python</td>
                        <td>PHP</td>
                        <td>OS</td>
                        <td>ADS</td>
                        <td>OOPS</td>
                        <td>ADS</td>
                    </tr>
                    <tr>
                        <td colSpan="7"><center>Lunch Break</center></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Maths</td>
                        <td>Python</td>
                        <td>OS</td>
                        <td>ADS</td>
                        <td>OOPS</td>
                        <td>PHP</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td colSpan="2">ADS Lab</td>
                        <td>Python</td>
                        <td>OS</td>
                        <td>ADS</td>
                        <td>Maths</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Maths</td>
                        <td>Python</td>
                        <td>OS</td>
                        <td>ADS</td>
                        <td>OOPS</td>
                        <td>PHP</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
