import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GithubForm, Result } from '../../components';
import { getResult } from '../../actions';

class Search extends Component {

    componentDidMount(){this.getResult("London")};  //added this line
    
    getResult = searchTerm => this.props.getResult(searchTerm);

    renderResult = () => this.props.loading ? <p>Loading . . .</p> : <Result result={this.props.result}/>;

    render() {
        return (
            <div id="search">
                Where do you want to search?

                <GithubForm getResult={this.getResult}/>    {/* all it needed was to add a <this.> before getResult!!*/}

                <h1>{this.props.location}</h1>

                { this.props.error ? <p>Oops there's been an error! {this.props.error}</p> : this.renderResult() }
                               
            </div>
        );
    };
};

// mSTP has to change

export const mSTP = state => ({
    result: state.result,
    location: state.location,
    loading: state.loading,
    error: state.error
});

export default connect(mSTP, { getResult })(Search);