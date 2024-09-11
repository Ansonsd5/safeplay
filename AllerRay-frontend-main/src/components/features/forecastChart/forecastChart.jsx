import React, {useEffect, useState} from "react";
import {LineChart} from "@mui/x-charts/LineChart";
import {Card, CardContent, Typography} from "@mui/material";

// General function to parse data for different forecasts
const parseForecastData = (forecastType, apiResponse) => {
    const dailyInfo = apiResponse.dailyInfo || [];

    return dailyInfo.map((dayInfo) => {
        const date = `${dayInfo.date.year}-${dayInfo.date.month}-${dayInfo.date.day}`;

        const forecastData = {label: date, data: []};

        dayInfo[forecastType].forEach((forecast) => {
            forecastData.data.push(forecast.indexInfo ? forecast.indexInfo.value : 0);
            // forecastData[forecast.displayName] = forecast.indexInfo ? forecast.indexInfo.value : 0;
        });

        return forecastData;
    });
};

// Reusable Forecast Chart component
const ForecastChart = ({apiResponse, forecastType, chartTitle, lineColors}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
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
                                id: 'forecast-day',
                                data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                                dataKey: "date",
                                label: 'Weekly Forecast',
                                scaleType: 'point',
                            },
                        ]}
                        yAxis={[
                            {
                                id: 'forecast-value',
                                label: chartTitle,
                            },
                        ]}
                        width={600}
                        height={400}
                        series={chartData}
                        margin={{top: 20, right: 30, left: 20, bottom: 20}}>
                    </LineChart>
                ) : (
                    <Typography variant="body2">No data available</Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default ForecastChart;
