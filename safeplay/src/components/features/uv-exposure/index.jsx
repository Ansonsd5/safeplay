import {LineChart} from '@mui/x-charts';
import './index.css';
import {Box, Checkbox, FormControl, ListItemText, MenuItem, Select} from '@mui/material';
import {memo, useState} from 'react';
import UVPrecautions from '../uv-precautions/index.jsx';

// UVExposure component that provides a historical analysis of UV radiation for selected cities
// It includes a line chart to compare UV exposure across different seasons and a section for UV precautions
function UVExposure() {
    // TODO: get from API?
    // {summer: 6, spring: 4, winter: 2, rainy: 3, snow: 1};
    function getCitySeasonData(city) {
        const data = [];
        for (let i = 0; i < 5; i++) {
            data.push(Math.floor(Math.random() * 10));
        }
        console.log(city, data);
        return data;
    }

    // Function to determine UV risk level
    function getUVRiskLevel(uvIndex) {
        if (uvIndex <= 2) {
            return 'Low';
        }
        if (uvIndex <= 5) {
            return 'Moderate';
        }
        if (uvIndex <= 7) {
            return 'High';
        }
        return 'Very High';
    }

    // TODO: get from API?
    const cities = ['Tokyo', 'Shanghai', 'Delhi', 'Sydney'];
    const seasonLabels = ['summer', 'spring', 'winter', 'rainy', 'snow'];
    const melbourneCityData = {
        label: 'Melbourne',
        data: [6, 4, 2, 3, 1],
        valueFormatter: (v) => {
            return `UV Index ${v} is ${getUVRiskLevel(v)}`;
        },
    };

    const [selectedCities, setSelectedCities] = useState([]);
    const [citiesData, setCitiesData] = useState([melbourneCityData]);

    // Handle city selection change
    function handleCityChange(event) {
        const {target: {value}} = event;
        const newSelectedCities = typeof value === 'string' ? value.split(',') : value;
        setSelectedCities(newSelectedCities);
        const updatedCityData = newSelectedCities.map(city => ({
            label: city,
            data: getCitySeasonData(city),
            valueFormatter: (v) => {
                return `UV Index ${v} is ${getUVRiskLevel(v)}`;
            },
        }));
        setCitiesData([melbourneCityData, ...updatedCityData]);
    }

    return (
        <>
            <section className='features'>
                <h2>Analyse Historical UV Radiation with your city</h2>
                <div className='uv-radiation'>
                    <div className='uv-chart-city'>
                        <div className='uv-left-section'>
                            <p className='feature-name'>Compare UV Exposure</p>
                            {/* Line chart to display UV exposure data */}
                            <LineChart
                                xAxis={[
                                    {
                                        id: 'seasons',
                                        data: seasonLabels,
                                        label: 'Seasons',
                                        scaleType: 'point',
                                    },
                                ]}
                                yAxis={[
                                    {
                                        id: 'uv-exposure',
                                        label: 'UV Index',
                                    },
                                ]}
                                series={citiesData}
                                width={500}
                                height={300}
                                margin={{top: 50}}
                            />
                        </div>
                        <div className='uv-right-section'>
                            <Box className='cityInput' sx={{minWidth: 150}}>
                                <FormControl fullWidth>
                                    {/* Dropdown to select cities */}
                                    <Select labelId='city-select-label'
                                            id='city-select'
                                            value={selectedCities}
                                            onChange={handleCityChange}
                                            multiple
                                            displayEmpty
                                            renderValue={selected =>
                                                selected.length === 0 ? 'Select a city...' : selected.join(', ')
                                            }
                                    >
                                        {cities.map(city => (
                                            <MenuItem key={city} value={city}>
                                                <Checkbox checked={selectedCities.indexOf(city) > -1}/>
                                                <ListItemText primary={city}/>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                    <p className='uv-description'>
                        The UV index is a measure of the strength of the sun's ultraviolet (UV) rays. It is a scale
                        primarily used in daily forecasts aimed at the general public. The UV index is designed as an
                        open-ended linear scale, directly proportional to the intensity of UV radiation that causes
                        sunburn on human skin.
                    </p>
                    <div className='scroll-down'>
                        <p>↓↓ Scroll down to check UV levels and precautions ↓↓</p>
                    </div>
                </div>
                <div className='uv-precautions'>
                    <h2>Preventive measures for different UV Levels</h2>
                    {/* Section for UV precautions */}
                    <UVPrecautions/>
                </div>
            </section>
        </>
    );
}

export default memo(UVExposure);