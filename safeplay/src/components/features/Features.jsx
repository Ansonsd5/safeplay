import {LineChart} from '@mui/x-charts';
import './Features.css';
import {Box, Checkbox, FormControl, ListItemText, MenuItem, Select} from '@mui/material';
import {memo, useState} from 'react';
import UVPrecautions from './uv-precautions/UVPrecautions.jsx';
import AllergicAwareness from '../allergicAwareness';

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
        // stack: 'total'
    };
    const uvLevels = [
        {riskLevel: 'low', description: 'Low (0-2)'},
        {riskLevel: 'moderate', description: 'Moderate (3-5)'},
        {riskLevel: 'high', description: 'High (6-7)'},
        {riskLevel: 'very-high', description: 'Very High (8-10)'},
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
            // stack: 'total'
        }));
        setCitiesData([melbourneCityData, ...updatedCityData]);
    }

    return (
        <>
            <section className='features'>
                <h2>Epic 1 Features</h2>
                <div className='uv-radiation'>
                    <div className='uv-left-section'>
                        <p className='feature-name'>Compare UV Exposure</p>
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
                <div className='uv-precautions'>
                    <h2>Preventive measures for UV Levels</h2>
                    <UVPrecautions/>
                </div>
            </section>
            <section className='features'>
                <h2>Epic 2 Features</h2>
                <div className='allergic-rhinitis'>
                    <h2>Awareness of Allergic Rhinitis (Hay fever)</h2>
                    <AllergicAwareness />
                </div>
            </section>
        </>
    );
}

export default memo(Features);
