/**
 * Created by liu on 2016/4/25.
 */
import React, {
    AppRegistry,
    Platform,
    } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from './reducers/index';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

import Router from './router';
export default function native(platform) {

    const MPad = React.createClass ({

        render() {
            if (Platform.OS === 'android') {
                console.log(platform)
                return (


                    <Provider store={store}>

                        <Router/>

                    </Provider>



                );

            }
            else {

            }
        }
    })

    AppRegistry.registerComponent('MPad', () => MPad);

}