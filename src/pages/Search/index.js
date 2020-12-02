import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GithubForm, Result } from '../../components';
import { getResult } from '../../actions';

class Search extends Component {
    
    getResult = searchTerm => this.props.getResult(searchTerm);

    renderResult = () => this.props.loading ? <p>Loading . . .</p> : <Result repos={this.props.repos}/>;

    render() {
        return (
            <div id="search">
                Which user would you like to search?

                <GithubForm getResult={this.getResult}/>

                <h1>{this.props.username}</h1>

                { this.props.error ? <p>Oops there's been an error! {this.props.error}</p> : this.renderResult() }
                               
            </div>
        );
    };
};

export const mSTP = state => ({
    username: state.username,
    repos: state.repos,
    loading: state.loading,
    error: state.error
})

export default connect(mSTP, { getResult })(Search);