import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x-axix
    LinearScale, //y-axis
    PointElement,
    Legend,
    Tooltip
} from "chart.js"
import { getSpecificDataPointData } from "../services/dashboardService";
import { Box } from "@mui/system";


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const Dashboard = () => {
    const dataPointDict = {
        "Open" : "Open",
        "High" : "High",
        "Low" : "Low",
        "Close" : "Close",
        "AdjClose" : "Adjusted Close",
        "Volume" : "Volume"
    }
    const chartOptions = {
        plugins: {
            legend: true,
            filler: {
                propagate: true
            }
        }
    }
    const [dataPoint, setDataPoint] = useState("Open");
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            label: dataPoint,
            data: [],
            backgroundColor: "#ff6e30",
            borderColor: "#2e2c21",
            pointBorderColor: "#2e2c21",
            fill: 'yellow'
        }]
    });

    const getDataPointHistoricalData = (datapoint) => {
        getSpecificDataPointData(datapoint).then((response) => {
            const { dates, values } = response.data;
            setChartData({
                labels: dates,
                datasets: [{
                    label: dataPointDict[datapoint],
                    data: values,
                    backgroundColor: "#ff6e30",
                    borderColor: "#2e2c21",
                    pointBorderColor: "#2e2c21",
                    fill: 'yellow'
                }]
            });
        })
    }

    useEffect(() => {
        getDataPointHistoricalData(dataPoint);
    }, [])

    const handleDataPointChange = (event) => {
        const { value } = event.target;
        setDataPoint(value);
        getDataPointHistoricalData(value);
    }

    return (
        <React.Fragment>
            <div style={{
                backgroundColor: "#3e3c2f",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                width: "100vw",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1
            }}>
            </div>
            <div style={{ textAlign: "center" }}>
                <Box
                    sx={{ flexGrow: 1 }}
                    m={10}
                    mb={5}
                    bgcolor="#bbbbbb"
                    style={{ padding: "15px" }}
                >
                    <Grid container spacing={1} margin="auto">
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
                                Olympic Industries Lumber Futures OHLCV Data
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} margin="auto">
                        <Grid item xs={12} sm={2} md={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Data Point</InputLabel>
                                <Select
                                    labelId="data-point-label"
                                    id="data-point"
                                    value={dataPoint}
                                    label="Data Point"
                                    onChange={(event) => handleDataPointChange(event)}
                                >
                                    <MenuItem value={"Open"}>Open</MenuItem>
                                    <MenuItem value={"High"}>High</MenuItem>
                                    <MenuItem value={"Low"}>Low</MenuItem>
                                    <MenuItem value={"Close"}>Close</MenuItem>
                                    <MenuItem value={"AdjClose"}>Adjusted Close</MenuItem>
                                    <MenuItem value={"Volume"}>Volume</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} margin="auto">
                        <Grid item xs={12} sm={12} md={12}>
                            <Line
                                data={chartData}
                                height = {"90%"}
                                options={chartOptions}
                            >
                            </Line>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;