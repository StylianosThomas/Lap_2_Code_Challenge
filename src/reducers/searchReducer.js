const initState = { username: "", 
            repos:[{name:"", html_url:"", update_at:""}], 
            loading: false};

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, username: action.payload, loading: true };
        case 'LOAD_RESULT':
            return { ...state, repos: action.payload, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
        default :
            return state
    };
};

export default searchReducer;