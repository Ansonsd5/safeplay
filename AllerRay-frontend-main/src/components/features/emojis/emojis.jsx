import ReactSpeedometer from "react-d3-speedometer";

const DEFAULT_TEXT_COLOR = '#2f3b52';
const DEFAULT_NEEDLE_COLOR = '#C6352C';
const DEFAULT_NEEDLE_TRANSITION_DURATION = 3333;
const DEFAULT_RING_WIDTH = 47;

export const RangeGaugeComponent = ({
    width = 300,
    height = 200,
    needleHeightRatio = 0.5,
    value,
    minValue,
    maxValue,
    currentValueText,
    customSegmentLabels,
    ringWidth = DEFAULT_RING_WIDTH,
    needleTransitionDuration = DEFAULT_NEEDLE_TRANSITION_DURATION,
    needleColor = DEFAULT_NEEDLE_COLOR,
    textColor = DEFAULT_TEXT_COLOR,
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