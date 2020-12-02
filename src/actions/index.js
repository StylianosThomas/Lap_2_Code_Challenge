const loading = username => ({ type: 'LOADING', payload: username });

const loadResult = (arr) => ({
    type: 'LOAD_RESULT',
    payload: arr
})

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const userRepos = await fetchGithubData(searchTerm);
            //console.log(userRepos);
            dispatch(loadResult(userRepos));
            // userRepos.forEach(repo => {
            //     dispatch(loadResult(repo))
            // });
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};

const fetchGithubData = async searchTerm => {
    try {
        const resp = await fetch(`https://api.github.com/users/${searchTerm}/repos`);
        const data = await resp.json();
        if (data.status === 404) { throw Error('User does not exist!') }
        return data.map(repo => ({
            name: repo.name,
            html_url: repo.html_url,
            updated_at: repo.updated_at
        }));
    } catch(err) {
        throw new Error(err.message)
    }
};