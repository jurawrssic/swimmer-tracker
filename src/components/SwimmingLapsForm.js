import propTypes from 'prop-types';
import SwimmingStyleForm from './SwimmingStyleForm';
import { useState, useEffect } from 'react';

const SwimmingLapsForm = ({ swimStyles, currentHistory, setHistory }) => {
  const [stylesCount, setStylesCount] = useState(1);

  const [formInfo, setFormInfo] = useState({
    id: Math.round(Math.random() * 1000 + 1),
    lapsPerStyle: [{ style: '', laps: '' }]
  });

  const clearState = () => {
    setStylesCount(1);

    setFormInfo({
      id: Math.round(Math.random() * 1000 + 1),
      lapsPerStyle: [{ style: '', laps: '' }],
      lapLength: '',
      date: '',
      totalLaps: ''
    });
  };

  const addSwimmingStyle = () => {
    const updatedLapsPerStyle = [...formInfo.lapsPerStyle];
    updatedLapsPerStyle.push({ style: '', laps: '' });

    setFormInfo({ ...formInfo, lapsPerStyle: updatedLapsPerStyle });
    setStylesCount(stylesCount + 1);
  };

  const calculateTotalLaps = (lapsPerStyle) =>
    lapsPerStyle.reduce((totalLaps, { laps }) => totalLaps + parseInt(laps), 0);

  const onSubmit = (e) => {
    e.preventDefault();
    const { id, lapsPerStyle, lapLength, date } = formInfo;

    setHistory([
      ...currentHistory,
      {
        id,
        lapsPerStyle,
        lapLength,
        totalLaps: calculateTotalLaps(lapsPerStyle),
        date
      }
    ]);

    clearState();
  };

  const onCancel = () => {
    console.log('cancel');
  };

  const setDate = (e) => {
    setFormInfo({ ...formInfo, date: e.target.value });
  };

  const setLapLength = (e) => {
    setFormInfo({ ...formInfo, lapLength: e.target.value });
  };

  // TODO: REFACT
  const setSwimmingStyle = (style, index) => {
    const updatedLapsPerStyle = formInfo.lapsPerStyle;

    if (!updatedLapsPerStyle[index]) updatedLapsPerStyle.push({ style });
    else updatedLapsPerStyle[index].style = style;

    setFormInfo({ ...formInfo, lapsPerStyle: updatedLapsPerStyle });
  };

  // TODO: REFACT
  const setLaps = (laps, index) => {
    const updatedLapsPerStyle = formInfo.lapsPerStyle;

    if (!updatedLapsPerStyle[index]) updatedLapsPerStyle.push({ laps });
    else updatedLapsPerStyle[index].laps = laps;

    setFormInfo({ ...formInfo, lapsPerStyle: updatedLapsPerStyle });
  };

  return (
    <form onSubmit={onSubmit} className="laps-form">
      <div className="laps-form__content">
        <div>
          <label htmlFor="swimmingSessionDate">Swim Session Date:</label>
          <input type="date" id="swimmingSessionDate" value={formInfo.date} onChange={setDate} />
        </div>

        <div>
          <label htmlFor="lapLength">Meters per lap</label>
          <input
            type="number"
            id="lapLength"
            placeholder="Enter lap length"
            value={formInfo.lapLength}
            onChange={setLapLength}
          />
        </div>

        {[...Array(stylesCount)].map((_, index) => (
          <SwimmingStyleForm
            key={`swimStyle-${index}-${formInfo.id}`}
            swimStyles={swimStyles}
            stylesCount={index}
            setSwimmingStyle={setSwimmingStyle}
            setLaps={setLaps}
            formInfo={formInfo}
          />
        ))}
      </div>

      <div className="laps-form__actions">
        <button type="button" onClick={addSwimmingStyle}>
          Add more
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
};

SwimmingLapsForm.propTypes = {
  swimStyles: propTypes.array.isRequired,
  currentHistory: propTypes.array.isRequired,
  setHistory: propTypes.func.isRequired
};

export default SwimmingLapsForm;
