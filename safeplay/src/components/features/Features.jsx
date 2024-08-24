import {LineChart} from '@mui/x-charts';
import './Features.css';
import {Box, Checkbox, FormControl, ListItemText, MenuItem, Select} from '@mui/material';
import {memo, useState} from 'react';
import UVPrecautions from './uv-precautions/UVPrecautions.jsx';

function Features() {
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

    // TODO: get from API?
    const cities = ['Tokyo', 'Shanghai', 'Delhi', 'Sydney'];
    const seasonLabels = ['summer', 'spring', 'winter', 'rainy', 'snow'];
    const melbourneCityData = {
        label: 'Melbourne',
        data: [6, 4, 2, 3, 1],
        // area: true,
        // stack: stackCheckBox ? 'total' : ''
    };
    const uvLevels = [
        {riskLevel: 'low', description: 'Low (1-3)'},
        {riskLevel: 'medium', description: 'Medium (4-6)'},
        {riskLevel: 'high', description: 'High (7-10)'},
    ];
    const [selectedCities, setSelectedCities] = useState([]);
    const [citiesData, setCitiesData] = useState([melbourneCityData]);

    function handleCityChange(event) {
        const {target: {value}} = event;
        const newSelectedCities = typeof value === 'string' ? value.split(',') : value;
        setSelectedCities(newSelectedCities);
        const updatedCityData = newSelectedCities.map(city => ({
            label: city,
            data: getCitySeasonData(city),
            // area: true,
            // stack: stackCheckBox ? 'total' : ''
        }));
        setCitiesData([melbourneCityData, ...updatedCityData]);
    }

    return (
        <>
            <section id='features' className='features'>
                <h2>Features</h2>
                <div className='feature-list'>
                    <div className='feature-item'>
                        <p className='feature-name'>Compare UV Exposure</p>
                        <LineChart
                            xAxis={[
                                {
                                    id: 'seasons',
                                    data: seasonLabels,
                                    scaleType: 'point',
                                },
                            ]}
                            yAxis={[
                                {
                                    id: 'uv-exposure',
                                    label: 'UV exposure',
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
                        <div className='uv-info'>
                            <p className='feature-name'>UV Index</p>
                            <div className='uv-level-info'>
                                {uvLevels.map((level, index) => (
                                    <div key={index} className='uv-level'>
                                        <span className={`uv-pill ${level.riskLevel}`}></span>
                                        {level.description}
                                    </div>
                                ))}
                            </div>
                            <p className='uv-description'>
                                The UV index is a measure of the strength of the sun's ultraviolet (UV) rays. It is a scale
                                primarily used in daily forecasts aimed at the general public. The UV index is designed as an
                                open-ended linear scale, directly proportional to the intensity of UV radiation that causes
                                sunburn on human skin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='precaution' className='precaution'>
            <h2 >General Precautions</h2>
            <UVPrecautions/>
            </section>
        </>
    );
}

export default memo(Features);
