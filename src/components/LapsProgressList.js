import propTypes from 'prop-types';
import LapsCard from './LapsCard';

const LapsProgressList = ({ currentHistory }) => {
  return (
    <div className="laps-history">
      {currentHistory.map((lapsHistory, index) => (
        <LapsCard key={`${lapsHistory.id}-${index}`} lapsHistory={lapsHistory} />
      ))}
    </div>
  );
};

LapsProgressList.propTypes = {
  currentHistory: propTypes.array.isRequired
};

export default LapsProgressList;
