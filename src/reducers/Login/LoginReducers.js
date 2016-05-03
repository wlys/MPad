/**
 * Created by liu on 2016/3/30.
 */
import InitialState from './LoginInitialStates';
const {
    CHG_FORM_TYPE,ON_AUTH_FORM_FIELD_CHANGE,IS_FETCHING
    } = require('../../lib/constants').default;
const initialState = new InitialState;
const fieldValidation = require('../../lib/fieldValidation').default;
const formValidation = require('./authFormValidation').default;
export default function LoginReducers(state = initialState, action={}) {
    if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
    switch (action.type) {
        case CHG_FORM_TYPE:
        {
            state = initialState;
            return state.set('formType', action.formType);
        }
        case IS_FETCHING:
        {
            return state.set('isFetching', true);
        }
        case ON_AUTH_FORM_FIELD_CHANGE:
        {
            const {field, value} = action.payload;
            let nextState =  state.setIn([ 'fields', field], value);
            var finalState = formValidation(
                fieldValidation( nextState, action)
                , action);

            return finalState;
        }
        default:
            return state
    }
}
