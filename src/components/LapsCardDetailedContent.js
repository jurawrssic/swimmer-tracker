import propTypes from 'prop-types';

const LapsCardDetailedContent = ({
  lapsHistory: { id, lapsPerStyle, totalLaps, lapLength },
  displayCardDetails
}) => {
  return (
    <div className={`card__details ${displayCardDetails ? 'show' : 'hide'}`}>
      {lapsPerStyle.map(({ style, laps }) => (
        <p key={`card-details-${id}`}>
          {laps} {style} Laps
        </p>
      ))}

      <p>Total length: {totalLaps * lapLength}m</p>
    </div>
  );
};

LapsCardDetailedContent.propTypes = {
  lapsHistory: propTypes.array,
  displayCardDetails: propTypes.bool
};

LapsCardDetailedContent.defaultProps = {
  displayCardDetails: false
};

export default LapsCardDetailedContent;
