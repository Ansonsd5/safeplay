import { LineChart } from "@mui/x-charts";
import "./Features.css";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { memo, useState } from "react";

function Features() {
  // TODO: replace this with actual data
  function getCitySeasonData() {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push(Math.floor(Math.random() * 10));
    }
    return data;
  }

  const seasonLabels = ["summer", "spring", "winter", "rainy", "snow"];
  const melbourneData = [6, 4, 2, 3, 1];
  const countries = ["Vietnam", "Philippines", "India"];
  const uvLevels = [
    { riskLevel: "low", description: "Low (1-3)" },
    { riskLevel: "medium", description: "Medium (4-6)" },
    { riskLevel: "high", description: "High (7-10)" },
  ];

  const [city, setCity] = useState("");
  const [otherCityData, setOtherCityData] = useState([]);

  function handleCityChange(event) {
    console.log(otherCityData);
    setCity(event.target.value);
    setOtherCityData(getCitySeasonData());
  }

  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <p className="feature-name">Compare UV Exposure</p>
          <LineChart
            xAxis={[
              {
                id: "seasons",
                data: seasonLabels,
                scaleType: "point",
              },
            ]}
            yAxis={[
              {
                id: "uv-exposure",
                label: "UV exposure",
              },
            ]}
            series={[
              {
                data: melbourneData,
                label: "Melbourne",
              },
              {
                data: otherCityData,
                label: city ? city : "Other City",
              },
            ]}
            width={500}
            height={300}
            margin={{ top: 50 }}
          />
        </div>
        <div className="uv-right-section">
          <Box className="cityInput" sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="city-select-label">
                {city ? "" : "Select a City..."}
              </InputLabel>
              <Select
                labelId="city-select-label"
                id="city-select"
                value={city}
                label={city ? "" : "Select a City..."}
                onChange={handleCityChange}
              >
                {countries.map((country, key) => (
                  <MenuItem key={key} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <div className="uv-info">
            <p className="feature-name">UV Index</p>
            <div className="uv-level-info">
              {uvLevels.map((level, index) => (
                <div key={index} className="uv-level">
                  <span className={`uv-pill ${level.riskLevel}`}></span>{" "}
                  {level.description}
                </div>
              ))}
            </div>
            <p className="uv-description">
              The UV index is a measure of the strength of the sun's ultraviolet
              (UV) rays. It is a scale primarily used in daily forecasts aimed
              at the general public. The UV index is designed as an open-ended
              linear scale, directly proportional to the intensity of UV
              radiation that causes sunburn on human skin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Features);
