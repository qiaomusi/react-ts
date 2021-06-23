import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Counter from './pages/counter/Counter';
import NewApp from './componetns/Hoc';


interface IProps {

}

interface IState {
  count: number
}

class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <Home name="hello"></Home>
        <Counter count={this.state.count} increment={this.incrementCount} decrement={this.decrementCount}></Counter>
        <NewApp></NewApp>
      </div>
    );
  }
}

export default App;
