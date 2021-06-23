import React, { Component } from "react";

interface IProps {
    name: string
}

interface IState {
    color: 'red'|'green'
}

export default class Home extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            color: 'red'
        }
    }

    changeColor = () => {
        let color = this.state.color;
        if(color === 'red') {
            this.setState({
                color: 'green'
            })
        } else {
            this.setState({
                color: 'red'
            })
        }
    }


    render() {
        return (
            <React.Fragment>
                <div style={{color: this.state.color}}> { this.props.name } </div>
                <button onClick={this.changeColor}> 改变颜色 </button>
            </React.Fragment>
        )
    }
}