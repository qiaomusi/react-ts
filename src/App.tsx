import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Counter from './pages/counter/Counter';
import NewApp from './componetns/Hoc';
import Button from './componetns/Button';
import { request } from './utils/http';
import Input from './componetns/Input';
import Form from './componetns/Form'

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

  handleClick = (e: React.MouseEvent) => {
    console.log('e', e.target)
  }

  async componentDidMount() {
    let res = await request({
      url: 'www.baidu.com',
      type: 'get'
    });
    console.log('res', res)
  }

  render() {
    return (
      <div>
        <Home name="hello"></Home>
        <Counter count={this.state.count} increment={this.incrementCount} decrement={this.decrementCount}></Counter>
        <NewApp></NewApp>
        <Button click={this.handleClick}>
          <span>  test </span>
        </Button>
        <Input />
        <Form />
      </div>
    );
  }
}

export default App;
