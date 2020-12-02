const loading = location => ({ type: 'LOADING', payload: location });

const loadResult = ({ results: { sunrise, sunset } }) => ({ 
    type: 'LOAD_RESULT',
    payload: { sunrise, sunset } 
});

// fetch(`https://api.github.com/users/${this.state.username}/repos`)
//             .then(r => r.json())
//             .then(this.diplayRepos)
//             .catch(console.warn)


export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const longLat = await fetchLongLat(searchTerm);
            const riseSet = await fetchSunriseSunset(longLat);
            dispatch(loadResult(riseSet))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};


// Helpers
const fetchLongLat = async searchTerm => {
    try {
        const resp = await fetch(`https://restcountries.eu/rest/v2/capital/${searchTerm}`);
        const data = await resp.json();
        if (data.status === 404) { throw Error('That\'s not a valid capital city!') }
        return data[0].latlng;
    } catch(err) {
        throw new Error(err.message)
    }
}

const fetchSunriseSunset = async ([ longt, latt ]) => {
    try {
        const resp = await fetch(`https://api.sunrise-sunset.org/json?lat=${latt}&lng=${longt}&date=today`);
        const data = await resp.json();
        return data;
    } catch(err) {
        throw new Error(err.message)
    }
}