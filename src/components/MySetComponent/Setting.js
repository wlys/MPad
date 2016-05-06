'use strict';

var React = require('react-native');
var {
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    ToolbarAndroid,
    Component,
    } = React;

var NavigationBar = require( '../_thirdpartComponent/NavBar');
import SettingContainer from '../../containers/SettingContainer'

var Calculator = require('./SetsComponent/Calculator');
var HelpMe = require('./SetsComponent/HelpMe');
var MenuItem = require('./SetsComponent/MenuItem');
var MyInfo = require('./SetsComponent/MyInfo');
var LogOut = require('./SetsComponent/LogOut');
var MorningPaper = require('./SetsComponent/MorningPaper');
import LoginContainer from "../../containers/LoginContainer"

class SetHome extends Component {

    _tabSelectedEvent(component, title) {
        var router = {Component:component};
        this.props.navigator.push(router);
    }

    _call() {
        alert('tel:... 95599 ...');
    }

    //渲染头部
    _renderHeader() {
        var title = '设置';
        return (
            <NavigationBar
                title={{ title: title}}
                />
        );
    }

    loginIn(){
        this.props.navigator.push({Component:LoginContainer});
    }
    loginOut() {
        var currentUser = this.props.global.currentUser;
        if (currentUser != '') {
            return (
                <TouchableHighlight
                    style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red',height:45,marginTop:30}}
                    underlayColor="#dad9d7" onPress={()=>this.props.globalActions.login()}>
                    <Text style={styles.themeName}>退出登录</Text>
                </TouchableHighlight>
            );
        }

    }

    render() {
        return (

            <ScrollView style={{backgroundColor:'#eeeeee'}}>

                {this._renderHeader()}

                <View>
                    <View style={{backgroundColor:'#fff'}}>
                    </View>

                    <MenuItem
                        title='关于我们'
                        margin2Top='10'
                        icon_l={require('./Image/icon_bottomtag_me_n.png')}
                        icon_r={require('./Image/arrow_right_grey.png')}
                        onClick={() => {this._tabSelectedEvent('MorningPaper',"晨会一页纸")}}/>

                    <MenuItem
                        margin2Top='1'
                        title='清除缓存'
                        icon_l={require('./Image/icon_bottomtag_me_n.png')}
                        icon_r={require('./Image/arrow_right_grey.png')}
                        onClick={() => {this._tabSelectedEvent('Calculator',"常用计算器")}}/>
                    <MenuItem
                        title='检查更新'
                        margin2Top='1'
                        icon_l={require('./Image/icon_bottomtag_me_n.png')}
                        icon_r={require('./Image/arrow_right_grey.png')}
                        onClick={() => {this._tabSelectedEvent('HelpMe',"帮助")}}/>
                    <MenuItem
                        title='接受推送'
                        margin2Top='1'
                        icon_l={require('./Image/icon_bottomtag_me_n.png')}
                        icon_r={require('./Image/arrow_right_grey.png')}
                        onClick={() => {this._tabSelectedEvent('HelpMe',"帮助")}}/>
                    <MenuItem
                        title='联系我们'
                        margin2Top='1'
                        icon_l={require('./Image/icon_bottomtag_me_n.png')}
                        icon_r={require('./Image/arrow_right_grey.png')}
                        onClick={() => {this._tabSelectedEvent('HelpMe',"帮助")}}/>

                    {this.loginOut.bind(this)}


                </View>

            </ScrollView>
        );
    }
};

/*

 <TouchableHighlight
 style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#ffffd0',height:45,marginTop:30}}
 underlayColor="#dad9d7" onPress={()=>this._call()}>
 <Text >拨打客服:999-95599</Text>
 </TouchableHighlight>*/
var styles = StyleSheet.create({

    contentContainer: {
        paddingVertical: 70
    },
    loginButton:{
        width:80,
        padding:5,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth:1,
        borderRadius:5,
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: '#6A85B1',
        height: 300,
        flex:1
    },
    container: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        color: 'pink',
        fontSize: 13,
        alignItems: 'center',
        alignSelf: 'center',
    },
    transparent: {
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        //flexDirection:'row'
        //backgroundColor: 'grey',
    },
    header: {
        height: 100,
    },
    iconSize: {
        height: 20,
        width: 20,
        resizeMode: Image.resizeMode.contain,
    },
    logoSize: {
        height: 40,
        width: 40,
        alignSelf: 'center',
        alignItems: 'center',
        resizeMode: Image.resizeMode.stretch,
    },
});

module.exports = SetHome;