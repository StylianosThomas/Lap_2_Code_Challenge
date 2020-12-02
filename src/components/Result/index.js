import React from 'react';

export default function (data) {
    console.log(data)
    // data.repos.forEach(repo => {
    //     return (
    //         <section>
    //         <div >
    //             <h1>{repo.name}</h1>
    //             <a href = {repo.html_url} />
    //             <p>{repo.updated_at}</p>
    //         </div>
    //         </section>
    //     )
    // });

    return (
        <section>
        <div >
            <h1>{data.repos.name}</h1>
            <a href = {data.repos.html_url} />
            <p>{data.repos.updated_at}</p>
        </div>
        </section>
    )
};