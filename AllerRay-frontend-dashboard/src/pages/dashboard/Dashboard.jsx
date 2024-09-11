import './Dashboard.css';
import {RangeGaugeComponent} from "@/components/features/rangeGauge/rangeGauge.jsx";
import ForecastChart from "@/components/features/forecastChart/forecastChart.jsx";
import {Autocomplete, TextField} from "@mui/material";
import {useState} from "react";
import RecommendationImages from "@/components/features/recommendationImages/recommendationImages.jsx";
import DataService from "@/pages/dashboard/DataService.js";

function Dashboard() {
    const [selectedSuburb, setSelectedSuburb] = useState('');
    const [uvIndexData, setUvIndexData] = useState(1);
    const [pollenData, setPollenData] = useState(0);
    const [uvDataEmoji, setUvDataEmoji] = useState([]);
    const [pollenDataEmoji, setPollenDataEmoji] = useState([]);
    const [uvForecastData, setUvForecastData] = useState({});
    const [pollenForecastData, setPollenForecastData] = useState({});

    const onSuburbChange = (newValue) => {
        if (newValue) {
            setSelectedSuburb(newValue);
            // Fetch data for the selected suburb
            const uvData = DataService.getUVIndexData(newValue.label);
            setUvIndexData(uvData.value);
            const pollenData = DataService.getPollenData(newValue.label);
            setPollenData(pollenData.value);
            setUvDataEmoji(uvData.emojis);
            setPollenDataEmoji(pollenData.emojis);
            setUvForecastData(DataService.getUVForecastData(newValue.label));
            setPollenForecastData(DataService.getPollenForecastData(newValue.label));
            console.log("Selected Suburb:", newValue, "UV data:", uvData, "Pollen data:", pollenData);
        }
    }

    return (
        <div className='dashboard'>
            <Autocomplete
                disablePortal
                options={DataService.suburbs}
                value={selectedSuburb}
                onChange={(event, newValue) => {
                    onSuburbChange(newValue);
                }}
                sx={{width: 300}}
                renderInput={(params) =>
                    <TextField {...params} label={selectedSuburb ? selectedSuburb.value : 'Enter suburb...'}/>}
            />
            <div className='row-container'>
                <div className='left-container'>
                    <RangeGaugeComponent
                        value={uvIndexData}
                        minValue={1}
                        maxValue={11}
                        currentValueText={uvIndexData > 1 ? "UV Level - " + uvIndexData : "UV Level"}
                        segments={5}
                        segmentColors={DataService.uvRangeColors}
                        customSegmentLabels={DataService.uvSegmentLabels}
                    />
                    <RecommendationImages emojis={uvDataEmoji}/>

                    <RangeGaugeComponent
                        value={pollenData}
                        minValue={0}
                        maxValue={6}
                        currentValueText={pollenData ? "Pollen Level - " + pollenData : "Pollen Level"}
                        segments={6}
                        segmentColors={DataService.pollenRangeColors}
                        customSegmentLabels={DataService.pollenSegmentLabels}
                    />
                    <RecommendationImages emojis={pollenDataEmoji}/>
                </div>
                <div className='right-container'>
                    <ForecastChart
                        apiResponse={uvForecastData}
                        forecastType="uvIndex"
                        chartTitle="5-Day UV Exposure Forecast"
                        lineColor={DataService.uvForecastLineColor}
                    />

                    <ForecastChart
                        apiResponse={pollenForecastData}
                        forecastType="pollenValue"
                        chartTitle="5-Day Pollen Forecast"
                        lineColor={DataService.pollenForecastLineColor}
                    />

                </div>
            </div>
        </div>
    );
}

export default Dashboard;