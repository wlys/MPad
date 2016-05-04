/**
 * Created by liu on 2016/4/7.
 */
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from '../components/_thirdpartComponent/react-native-tabbar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MainScreenActions from '../reducers/MainScreen/MainScreenActions';
var React = require('react-native');
var {
    AppRegistry,
    Text,
    Component
    } = React;

const glypy = glypyMapMaker({
    Home: 'e900',
    LobbyMgr: 'f0c0',
    Fiancial: 'e902',
    Settings: 'e903'

});
//var Home = require('../components/HomeComponent');

//var Fiancial=require('../components/FinancialComponent');
//var MySet=require('../components/MySetComponent');
import LobbyMgrContainer from './LobbyMgrContainer';
var tabBarProps={};
tabBarProps['onActiveColor']='#009900';
tabBarProps['onInactiveColor']='gray';
tabBarProps['onActiveColorBar']='#009900';
tabBarProps['onInactiveColorBar']='#fff';
class MainScreenContainer extends Component{
    _tabbarToggle(value) {
        this.refs['myTabbar'].getBarRef().show(value);
    }
/*   shouldComponentUpdate(){
        return false;
    }*/
    componentWillReceiveProps(nextProps){
        const {ShowTabBar}=nextProps.MainScreen;
        var name=this.props.global.currentUser;
       this. _tabbarToggle(ShowTabBar);
    }
    render () {

        return (
            <Tabbar ref="myTabbar" barColor={'#eeeeee'} >
                <Tab name="Home">
                    <IconWithBar label=" 首页" {...tabBarProps} type={glypy.Home} from={'icomoon'}/>
                    <RawContent>
                        <Text>我的</Text>

                    </RawContent>

                </Tab>

                <Tab name="LobbyMgr">
                    <IconWithBar label="大堂管理"  {...tabBarProps} type={glypy.LobbyMgr} from={'FontAwesome'}/>
                    <RawContent>
                       < LobbyMgrContainer {...this.props}/>
                    </RawContent>

                </Tab>

                <Tab name="Fiancial">
                    <IconWithBar label="理财产品"  {...tabBarProps} type={glypy.Fiancial} from={'icomoon'}/>
                    <RawContent>
                        <Text>理财产品</Text>
                    </RawContent>
                </Tab>
                <Tab name="FiancialMarket">
                    <IconWithBar label="金融行情"  {...tabBarProps}type={glypy.Fiancial} from={'icomoon'}/>
                    <RawContent>
                        <Text>金融行情</Text>
                    </RawContent>
                </Tab>
                <Tab name="settings">
                    <IconWithBar label="我的"  {...tabBarProps} type={glypy.Settings} from={'icomoon_slg2'}/>
                    <RawContent>
                        <Text>我的</Text>
                    </RawContent>

                </Tab>
            </Tabbar>
        );
    }
}
function mapStateToProps(state) {
    return {
        ...state
    };
}
function mapDispatchToProps(dispatch) {

    return {
        mainScreenActions: bindActionCreators(MainScreenActions, dispatch)

    };
}
export default connect(mapStateToProps, mapDispatchToProps,null,{withRef:true})(MainScreenContainer);