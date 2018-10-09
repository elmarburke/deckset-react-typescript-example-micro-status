import * as React from 'react';
import './App.css';
import Status from './components/Status';

const statusList = [
  {
    id: 1,
    status: 'React ist toll',
    userName: 'ElmarBurke'
  },
  {
    id: 2,
    status: 'Das ist eigentlich ganz einfach',
    userName: 'HCO'
  }
];

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1>Hallo Berlin</h1>
        <hr />
        {statusList.map(({ id, status, userName }) => (
          <Status key={id} status={status} userName={userName} />
        ))}
      </div>
    );
  }
}

export default App;
