/**
 * Created by liu on 2016/3/30.
 */
import React from 'react-native';
import MainScreenContainer from'./containers/MainScreenContainer';
let {
    Navigator,
    Component
    } = React;


class router extends Component {

    _configureScene () {
        return Navigator.SceneConfigs.PushFromRight;
    }
    _renderScene (router, navigator) {

        return (
            <router.Component navigator={navigator}  {...router.Payload}/>
        )
    }

    render() {
        return(
        <Navigator ref='navigator'
            initialRoute={{Component: MainScreenContainer}}
            configureScene={this._configureScene}
            renderScene={this._renderScene.bind(this)}/>
        )
    }
}

export default router;