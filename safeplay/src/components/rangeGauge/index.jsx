import ReactSpeedometer from "react-d3-speedometer";

export const RangeGaugeComponent = ({
    width = 600,
    height = 350,
    needleHeightRatio = 0.5,
    value,
    minValue,
    maxValue,
    currentValueText,
    customSegmentLabels,
    ringWidth = 47,
    needleTransitionDuration = 3333,
    needleColor = '#90f2ff',
    textColor = '#d8dee9',
}) => (
    <div>
        <ReactSpeedometer
            width={width}
            height={height}
            needleHeightRatio={needleHeightRatio}
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            currentValueText={currentValueText}
            customSegmentLabels={customSegmentLabels}
            ringWidth={ringWidth}
            needleTransitionDuration={needleTransitionDuration}
            needleTransition='easeElastic'
            needleColor={needleColor}
            textColor={textColor}
        />
    </div>
);