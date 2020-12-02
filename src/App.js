import React, { Component } from 'react';
import { Header, Footer } from './layout';
// import { GithubForm, RepoContainer } from './components';

class App extends Component {
    render() {
        return (
            <div id="App">
                {/* <Header/> */}
                <Switch>
                    {/* <Route exact path="/" component={ Welcome }/>
                    <Route path="/about" component={ About }/> */}
                    <Route path="/search"component={ Search }/>
                </Switch>
                {/* <Footer/> */}
            </div>
        )
    };
};

export default App;