import React from 'react';

class Result extends React.Component{
    data = this.props;

    allRepos = ()=>{
        const repos = [];

        this.props.repos.forEach(repo => {
            repos.push(
                <div key={repo.name}>
                    <h1>{repo.name}</h1>
                    <a href = {repo.html_url} />
                    <p>{repo.updated_at}</p>
                </div>
            )
        })
        return repos;
    }
    
    // data.repos.forEach(repo => {
    //     allRepos.push(
    //         <div key={repo.name}>
    //             <h1>{repo.name}</h1>
    //             <a href = {repo.html_url} />
    //             <p>{repo.updated_at}</p>
    //         </div>
    //     )
    // });

    render(){
        console.log(this.props.repos);
        return (
            this.allRepos()
        )
    }
};

export default Result;