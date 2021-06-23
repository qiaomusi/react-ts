import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1> react </h1>
                    <p> React.js最棒 </p>
                </div>
            </React.Fragment>
        )
    }
}

const withStar = (WrappedComponent: React.ComponentType) => {
    return class extends Component {
        render() {
            return (
                <>
                <WrappedComponent></WrappedComponent>
                <div> 100k </div>
                </>
            )
        }
    }
}

const NewApp = withStar(App);

export default NewApp;