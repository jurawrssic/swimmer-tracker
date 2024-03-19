import { useState } from 'react';

import Header from './components/Header';
import SwimmingLapsForm from './components/SwimmingLapsForm';
import LapsProgressList from './components/LapsProgressList';

const App = () => {
  const [swimStyles, setSwimStyles] = useState([
    {
      id: 0,
      name: 'Did not track individually',
      value: 'overall'
    },
    {
      id: 1,
      name: 'Crawl/Freestyle',
      value: 'crawl'
    },
    {
      id: 2,
      name: 'Backstroke',
      value: 'backstroke'
    },
    {
      id: 3,
      name: 'Butterfly',
      value: 'butterfly'
    }
  ]);

  const [lapsHistoryList, setLapsHistoryList] = useState([]);

  return (
    <>
      <Header />

      <div className="container">
        <SwimmingLapsForm
          swimStyles={swimStyles}
          currentHistory={lapsHistoryList}
          setHistory={setLapsHistoryList}
        />

        <LapsProgressList currentHistory={lapsHistoryList} />
      </div>
    </>
  );
};

export default App;
