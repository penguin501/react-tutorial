import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name: "before"};
    }
    changeTitle(title) {
        this.setState({title});
    }
    render() {
        // setTimeout(
        //       () => { this.setState({name: "Hello"}); },
        //       1000);
        const title = "Welcome!";
        return (
            <div>
                {this.state.name}
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Footer />
            </div>
        );
    }
}