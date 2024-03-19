import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import propTypes from 'prop-types';
import LapsCardDetailedContent from './LapsCardDetailedContent';

import { getUserLocale } from '../js/utils';

const LapsCard = ({ lapsHistory }) => {
  console.log('oi');
  console.log(lapsHistory);
  const { id, date, totalLaps } = lapsHistory;

  const [displayCardDetails, setDisplayCardDetails] = useState(false);

  const formattedDate = new Date(date).toLocaleDateString(getUserLocale());

  const toggleDetailsDisplay = () => setDisplayCardDetails(!displayCardDetails);

  return (
    <div key={id} className="laps-history__card">
      <h2 onClick={toggleDetailsDisplay} className="card__header">
        <span>
          {formattedDate} - {totalLaps} total laps
        </span>
        <span>{displayCardDetails ? <FaAngleDown /> : <FaAngleRight />}</span>
      </h2>

      <LapsCardDetailedContent lapsHistory={lapsHistory} displayCardDetails={displayCardDetails} />
    </div>
  );
};

LapsCard.propTypes = {
  lapsHistory: propTypes.object
};

export default LapsCard;
