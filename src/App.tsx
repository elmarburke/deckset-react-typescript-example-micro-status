import * as React from 'react';
import './App.css';
import Status from './components/Status';

interface IStatus {
  id: number;
  status: string;
  userName: string;
}

interface IState {
  statusList: IStatus[];
}

class App extends React.Component {
  public state: IState = {
    statusList: []
  };

  public async componentDidMount() {
    const res = await fetch('status.json');
    const statusList = await res.json();

    this.setState({ statusList });
  }

  public render() {
    const { statusList } = this.state;

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
