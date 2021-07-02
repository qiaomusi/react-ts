import React, { Component } from "react";

interface IProps {

}

type IState = {
    xing: string,
    ming: string,
    [key:string]: any // 上面两个必须是他的子集，或者也可以string|number这样写
}

export default class Input extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            xing: '',
            ming: ''
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        })
    }

    render() {
        const { xing, ming } = this.state;
        return (
            <div>
                <div>  姓： <input type="text" name="xing" value={xing} onChange={this.handleChange}/></div>
                <div>  名： <input type="text" name="ming" value={ming} onChange={this.handleChange}/></div>
                { xing } { ming }
            </div>
        )
    }
}