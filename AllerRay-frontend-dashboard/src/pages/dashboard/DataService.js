import outdoor from "../../assets/emojis/outdoor.png";
import sunscreen from "../../assets/emojis/sunscreen.png";
import sunglasses from "../../assets/emojis/sunglasses.png";
import hats from "../../assets/emojis/hats.png";
import umbrella from "../../assets/emojis/umbrella.png";
import thermometer from "../../assets/emojis/thermometer.png";
import clothes from "../../assets/emojis/clothes.png";
import tree from "../../assets/emojis/tree.png";
import house from "../../assets/emojis/house.png";
import drink from "../../assets/emojis/drink.png";
import mask from "../../assets/emojis/mask.png";
import tissues from "../../assets/emojis/tissues.png";
import meds from "../../assets/emojis/meds.png";
import changeClothes from "../../assets/emojis/change-clothes.png";
import shower from "../../assets/emojis/shower.png";
import windows from "../../assets/emojis/windows.png";
import wiping from "../../assets/emojis/wiping.png";
import airPurifier from "../../assets/emojis/air-purifier.png";
import vacuum from "../../assets/emojis/vacuum.png";
import laundry from "../../assets/emojis/laundry.png";
import { CustomSegmentLabelPosition } from "react-d3-speedometer";

class DataService {
    // Mock API responses
    static pollenApiResponse = {
        regionCode: "IL",
        dailyInfo: [
            { date: { year: 2023, month: 7, day: 11 }, pollenValue: 1 },
            { date: { year: 2023, month: 7, day: 12 }, pollenValue: 4 },
            { date: { year: 2023, month: 7, day: 13 }, pollenValue: 3 },
            { date: { year: 2023, month: 7, day: 14 }, pollenValue: 2 },
            { date: { year: 2023, month: 7, day: 15 }, pollenValue: 5 },
        ],
    };

    static uvApiResponse = {
        regionCode: "IL",
        dailyInfo: [
            { date: { year: 2023, month: 7, day: 11 }, uvIndex: 1 },
            { date: { year: 2023, month: 7, day: 12 }, uvIndex: 8 },
            { date: { year: 2023, month: 7, day: 13 }, uvIndex: 10 },
            { date: { year: 2023, month: 7, day: 14 }, uvIndex: 3 },
            { date: { year: 2023, month: 7, day: 15 }, uvIndex: 2 },
        ],
    };

    // Line colors for forecast charts
    static pollenForecastLineColor = "#4cca79";
    static uvForecastLineColor = "#ff7300";

    // Colors for range gauges
    static uvRangeColors = ["#1C9D31", "#68BE4C", "#FCBD24", "#F56B33", "#eb184a"];
    static pollenRangeColors = ["#DADADA", "#1C9D31", "#43B447", "#FAFF00", "#FC9200", "#F33600"];

    // List of suburbs for the autocomplete
    static suburbs = [
        { label: 'Carlton' },
        { label: 'Clayton' },
        { label: 'Glen Huntly' },
        { label: 'Caulfield' },
        { label: 'Carrum' },
        { label: 'Aspendale' },
        { label: 'Hawthorn' },
    ];

    // Mapping of UV data to emojis
    static uvDataEmojiMap = {
        'outdoor': { image: outdoor, label: 'Good time for outdoor activities.' },
        'sunscreen-30': { image: sunscreen, label: 'Use SPF 30 sunscreen.' },
        'sunscreen-50': { image: sunscreen, label: 'Use SPF 50 sunscreen.' },
        'sunglasses': { image: sunglasses, label: 'Wear sunglasses.' },
        'hats': { image: hats, label: 'Wear a hat.' },
        'umbrella': { image: umbrella, label: 'Carry an umbrella.' },
        'thermometer': { image: thermometer, label: 'Stay hydrated during excessive heat.' },
        'clothes': { image: clothes, label: 'Wear light clothes.' },
        'tree': { image: tree, label: 'Stay in the shade.' },
        'house': { image: house, label: 'Stay indoors.' }
    };

    // Mapping of pollen data to emojis
    static pollenDataEmojiMap = {
        'drink': { image: drink, label: 'Stay hydrated.' },
        'mask': { image: mask, label: 'Wear a mask.' },
        'tissues': { image: tissues, label: 'Carry tissues.' },
        'meds': { image: meds, label: 'Take your medication.' },
        'change-clothes': { image: changeClothes, label: 'Change clothes after coming indoors.' },
        'shower': { image: shower, label: 'Take a shower.' },
        'windows': { image: windows, label: 'Keep windows closed.' },
        'wiping': { image: wiping, label: 'Wipe surfaces.' },
        'indoor': { image: house, label: 'Stay indoors.' },
        'air-purifier': { image: airPurifier, label: 'Use an air purifier.' },
        'vacuum': { image: vacuum, label: 'Vacuum regularly.' },
        'laundry': { image: laundry, label: 'Do laundry.' },
        'sunscreen': { image: sunscreen, label: 'Use sunscreen.' },
        'outdoor': { image: outdoor, label: 'Good time for outdoor activities.' }
    };

    // Segment labels for range gauges
    static uvSegmentLabels = [
        { text: "Low", color: "black", position: CustomSegmentLabelPosition.Outside },
        { text: "Moderate", color: "black", position: CustomSegmentLabelPosition.Outside },
        { text: "High", color: "black", position: CustomSegmentLabelPosition.Outside },
        { text: "Very High", color: "black", position: CustomSegmentLabelPosition.Outside },
        { text: "Extreme", color: "black", position: CustomSegmentLabelPosition.Outside }
    ];

    static pollenSegmentLabels = [
        { text: "None", color: "black", position: CustomSegmentLabelPosition.Outside },
        { text: "Very Low", color: "black", position: CustomSegmentLabelPosition.Outside },
        { text: "Low", color: "black", position: CustomSegmentLabelPosition.Outside },
        { text: "Moderate", color: "black", position: CustomSegmentLabelPosition.Outside },
        { text: "High", color: "black", position: CustomSegmentLabelPosition.Outside },
        { text: "Very High", color: "black", position: CustomSegmentLabelPosition.Outside }
    ];

    // Get emojis based on UV index value
    static getUVEmoji(value) {
        const emojis = [];
        if (value >= 1 && value <= 2) {
            emojis.push(DataService.uvDataEmojiMap.outdoor);
        } else if (value >= 3 && value <= 5) {
            emojis.push(DataService.uvDataEmojiMap['sunscreen-30']);
            emojis.push(DataService.uvDataEmojiMap.hats);
            emojis.push(DataService.uvDataEmojiMap.umbrella);
        } else if (value >= 6 && value <= 7) {
            emojis.push(DataService.uvDataEmojiMap['sunscreen-30']);
            emojis.push(DataService.uvDataEmojiMap.hats);
            emojis.push(DataService.uvDataEmojiMap.sunglasses);
            emojis.push(DataService.uvDataEmojiMap.clothes);
            emojis.push(DataService.uvDataEmojiMap.umbrella);
            emojis.push(DataService.uvDataEmojiMap.thermometer);
            emojis.push(DataService.uvDataEmojiMap.tree);
        } else if (value >= 8 && value <= 10) {
            emojis.push(DataService.uvDataEmojiMap['sunscreen-50']);
            emojis.push(DataService.uvDataEmojiMap.hats);
            emojis.push(DataService.uvDataEmojiMap.clothes);
            emojis.push(DataService.uvDataEmojiMap.sunglasses);
            emojis.push(DataService.uvDataEmojiMap.tree);
            emojis.push(DataService.uvDataEmojiMap.house);
        } else if (value >= 11) {
            emojis.push(DataService.uvDataEmojiMap.house);
        }
        return emojis;
    }

    // Get emojis based on pollen value
    static getPollenEmoji(value) {
        const emojis = [];
        if (value === 0) {
            emojis.push(DataService.pollenDataEmojiMap.outdoor);
            emojis.push(DataService.pollenDataEmojiMap.drink);
            emojis.push(DataService.pollenDataEmojiMap.sunscreen);
        } else if (value === 1) {
            emojis.push(DataService.pollenDataEmojiMap.outdoor);
            emojis.push(DataService.pollenDataEmojiMap.windows);
        } else if (value === 2) {
            emojis.push(DataService.pollenDataEmojiMap.outdoor);
            emojis.push(DataService.pollenDataEmojiMap.windows);
            emojis.push(DataService.pollenDataEmojiMap.wiping);
        } else if (value === 3) {
            emojis.push(DataService.pollenDataEmojiMap.tissues);
            emojis.push(DataService.pollenDataEmojiMap.mask);
            emojis.push(DataService.pollenDataEmojiMap.indoor);
        } else if (value === 4) {
            emojis.push(DataService.pollenDataEmojiMap['change-clothes']);
            emojis.push(DataService.pollenDataEmojiMap.shower);
            emojis.push(DataService.pollenDataEmojiMap.meds);
            emojis.push(DataService.pollenDataEmojiMap.tissues);
            emojis.push(DataService.pollenDataEmojiMap.mask);
            emojis.push(DataService.pollenDataEmojiMap.indoor);
        } else if (value === 5) {
            emojis.push(DataService.pollenDataEmojiMap["air-purifier"]);
            emojis.push(DataService.pollenDataEmojiMap.laundry);
            emojis.push(DataService.pollenDataEmojiMap.vacuum);
        }
        return emojis;
    }

    // Mock function to get UV index data
    // TODO: fetch from API?
    static getUVIndexData(suburb) {
        const uvIndex = Math.floor(Math.random() * 11) + 1;
        const uvEmojis = DataService.getUVEmoji(uvIndex);
        return { value: uvIndex, emojis: uvEmojis };
    }

    // Mock function to get pollen data
    // TODO: fetch from API?
    static getPollenData(suburb) {
        const pollenData = Math.floor(Math.random() * 5) + 1;
        const pollenEmojis = DataService.getPollenEmoji(pollenData);
        return { value: pollenData, emojis: pollenEmojis };
    }

    // Mock function to get UV forecast data
    // TODO: fetch from API?
    static getUVForecastData(suburb) {
        return DataService.uvApiResponse;
    }

    // Mock function to get pollen forecast data
    // TODO: fetch from API?
    static getPollenForecastData(suburb) {
        return DataService.pollenApiResponse;
    }
}

export default DataService;