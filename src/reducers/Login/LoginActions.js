/**
 * Created by liu on 2016/3/30.
 */

const {
    CHG_FORM_TYPE,
    ON_AUTH_FORM_FIELD_CHANGE,
    IS_FETCHING
    } = require('../../lib/constants').default;

export function changeFormType (formType) {
    return {
        type: CHG_FORM_TYPE,
        formType:formType
    }
}
export function onAuthFormFieldChange(field,value) {
    return {
        type: ON_AUTH_FORM_FIELD_CHANGE,
        payload: {field: field, value: value}
    };
}
export function isFetching() {
    return {
        type:IS_FETCHING
    };
}