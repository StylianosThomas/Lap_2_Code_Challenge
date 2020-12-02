const loading = username => ({ type: 'LOADING', payload: username });

const loadResult = ({ name, html_url, updated_at }) => ({
    type: 'LOAD_RESULT',
    payload: { name, html_url, updated_at }
})

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const userRepos = await fetchGithubData(searchTerm)
            userRepos.forEach(repo => {
                dispatch(loadResult(repo))
            });
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
        return data;
    } catch(err) {
        throw new Error(err.message)
    }
};