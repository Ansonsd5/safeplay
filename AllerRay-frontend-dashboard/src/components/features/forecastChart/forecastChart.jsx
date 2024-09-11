import React, {useEffect, useState} from "react";
import {LineChart} from "@mui/x-charts/LineChart";
import {Card, CardContent, Typography} from "@mui/material";

// General function to parse data for different forecasts
const parseForecastData = (forecastType, apiResponse) => {
    const dailyInfo = apiResponse.dailyInfo || [];
    return dailyInfo.map((dayInfo) => {
        const date = new Date(dayInfo.date.year, dayInfo.date.month - 1, dayInfo.date.day);
        return {
            date,               // X-axis (formatted as YYYY-MM-DD)
            value: dayInfo[forecastType], // Y-axis (value)
        };
    });
};

// Reusable Forecast Chart component
const ForecastChart = ({apiResponse, forecastType, chartTitle, lineColor}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Parse the forecast data whenever apiResponse or forecastType changes
        const parsedData = parseForecastData(forecastType, apiResponse);
        console.log("Parsed data:", parsedData);
        setChartData(parsedData);
    }, [apiResponse, forecastType]);

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {chartTitle}
                </Typography>
                {chartData.length > 0 ? (
                    <LineChart
                        xAxis={[
                            {
                                id: 'forecast-date',
                                dataKey: 'date',  // Use the 'date' field for the x-axis
                                label: 'Date',    // Label for the x-axis
                                scaleType: 'time',  // Set scaleType to 'time' to handle dates correctly
                            },
                        ]}
                        yAxis={[
                            {
                                id: 'forecast-value',
                                label: chartTitle,  // Use the chart title as the label for the y-axis
                            },
                        ]}
                        width={300}
                        height={200}
                        dataset={chartData}
                        series={[
                            {
                                id: 'series',
                                dataKey: 'value',
                                color: lineColor,
                            },
                        ]}
                        margin={{top: 20, right: 30, left: 20, bottom: 20}}/>
                ) : (
                    <Typography variant="body2">No data available</Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default ForecastChart;