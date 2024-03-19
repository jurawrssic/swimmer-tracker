import propTypes from 'prop-types';
import { useState } from 'react';

const SwimmingStyleForm = ({ stylesCount, swimStyles, setSwimmingStyle, setLaps, formInfo }) => {
  const [selectedSwimStyle, setSelectedSwimStyle] = useState('');

  const onChange = (e) => {
    setSelectedSwimStyle(e.target.value);
    setSwimmingStyle(e.target.value, stylesCount);
  };

  const onChangeLaps = (e) => {
    setLaps(e.target.value, stylesCount);
  };

  return (
    <>
      <div>
        <label htmlFor="swimStyleSelect">Which swimming style?</label>
        <select id="swimStyleSelect" onChange={onChange}>
          <option value={formInfo.lapsPerStyle[stylesCount].style}>Choose a style</option>
          {swimStyles.map(({ id, name, value }) => (
            <option key={id} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor={`lapsAmount${stylesCount}`}>{`How many ${selectedSwimStyle} laps did you get in?`}</label>
        <input
          type="number"
          id={`lapsAmount${stylesCount}`}
          placeholder="Enter laps amount"
          value={formInfo.lapsPerStyle[stylesCount].laps}
          onChange={onChangeLaps}
        />
      </div>
    </>
  );
};

SwimmingStyleForm.propTypes = {
  stylesCount: propTypes.number,
  swimStyles: propTypes.array,
  setSwimmingStyle: propTypes.func,
  setLaps: propTypes.func,
  formInfo: propTypes.object
};

SwimmingStyleForm.defaultProps = {
  stylesCount: 1
};

export default SwimmingStyleForm;
