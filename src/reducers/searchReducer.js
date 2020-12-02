const initState = { location: "", result: { sunrise: "", sunset: "" }, loading: false };

//the initstate has to match the github api format

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, location: action.payload, loading: true };
        case 'LOAD_RESULT':
            return { ...state, result: action.payload, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
        default :
            return state    //Added missing default case!
    };
};

export default searchReducer;