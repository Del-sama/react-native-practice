import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const initial_state = { 
    email: '',
    password: '',
    user: '',
    error: '',
    loading: false
 };

export default (state = initial_state, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, 
                     ...initial_state, 
                     error: '', 
                     user: action.payload, 
                     loading: false, 
                     email: '', 
                     password: '' 
                };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication failed', password: '', loading: false  };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
