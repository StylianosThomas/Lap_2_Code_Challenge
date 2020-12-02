import React, { Component } from 'react';

// only few changes here

class GithubForm extends Component {
    state = { location: "" }

    handleSubmit = e => {
        e.preventDefault();
        this.props.getResult(this.state.location);
        this.setState({location: ""});
    };

    updateInput = e => {
        const location = e.target.value;
        this.setState({ location });
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="userInput" value={this.state.location} onChange={this.updateInput}/>
                <input type="submit" value="Search" />
            </form>
        );
    };
};

export default GithubForm;