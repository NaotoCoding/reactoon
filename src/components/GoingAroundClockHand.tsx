import ClockLoader from 'react-spinners/ClockLoader';

const GoingAroungClockHand = ({clockSize=100, colorCode='#36d7b7'}) => (
  <ClockLoader
    size={clockSize}
    color={colorCode}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
);

export default GoingAroungClockHand;
