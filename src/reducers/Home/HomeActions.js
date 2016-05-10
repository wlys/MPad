
const {
    CHG_ACTIVE_TAB,
    } = require('../../lib/constants').default;

export function changeActiveTabStatus (activeNum) {
    return {
        type: CHG_ACTIVE_TAB,
        activeNum:activeNum
    }
}