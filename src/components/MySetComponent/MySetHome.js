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
var {width, height, scale} = require('../../lib/windowStyle');
var NavigationBar = require('../_thirdpartComponent/NavBar');
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
        var router = {Component: component};
        this.props.navigator.push(router);
    }
    _openCalculator(type){

        var router = {Component: Calculator,Payload:{type:type}};
        this.props.navigator.push(router);
    }


    //渲染头部
    _renderHeader() {
        var title = '个人中心';
        return (
            <NavigationBar
                title={{ title: title}}
                />
        );
    }

    loginIn() {
        this.props.navigator.push({Component: LoginContainer});
    }

    userTitle() {
        var currentUser = this.props.global.currentUser;
        if (currentUser == '') {
            return (
                <View style={styles.transparent}>
                    <TouchableOpacity onPress={this.loginIn.bind(this)}>
                        <View style={styles.loginButton}>
                            <Text style={styles.login}>立即登录</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            );
        }
        else {

            return (
                <View style={styles.transparent}>
                    <Image style={[styles.logoSize]} source={require('./Thumbnails/logo.png')}/>
                    <Text style={styles.userName}>您好,{currentUser}!!</Text>
                </View>
            );

        }
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{height:height-80}}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        {this._renderHeader()}
                        <View style={{backgroundColor:'#fff'}}>
                            {this.userTitle()}
                        </View>

                        <MenuItem
                            margin2Top='10'
                            title='个人信息'
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                            onClick={() => {this._tabSelectedEvent('MyInfo',"个人信息")}}/>
                        <MenuItem
                            title='晨会一页纸'
                            margin2Top='1'
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                            onClick={() => {this._tabSelectedEvent('MorningPaper',"晨会一页纸")}}/>

                        <MenuItem
                            margin2Top='10'
                            title='常用计算器'
                            showChildren={this.props.mySet.calChdShow}
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                            onClick={() => {this.props.mySetActions.chgCalChdState()}}>

                            <MenuItem
                                title='存款计算器'
                                margin2Top='3'
                                color='#dddddd'
                                icon_l={require('./Image/icon_bottomtag_me_n.png')}
                                icon_r={require('./Image/arrow_right_grey.png')}
                                onClick={() => {this._openCalculator('save')}}/>
                            <MenuItem
                                title='贷款计算器'
                                color='#dddddd'
                                margin2Top='1'
                                icon_l={require('./Image/icon_bottomtag_me_n.png')}
                                icon_r={require('./Image/arrow_right_grey.png')}
                                onClick={() => {this._openCalculator('loan')}}/>
                            <MenuItem
                                title='汇率计算器'
                                color='#dddddd'
                                margin2Top='1'
                                icon_l={require('./Image/icon_bottomtag_me_n.png')}
                                icon_r={require('./Image/arrow_right_grey.png')}
                                onClick={() => {this._openCalculator('rate')}}/>

                        </MenuItem>

                        <MenuItem
                            title='帮助'
                            margin2Top='1'
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                            onClick={() => {this._tabSelectedEvent('HelpMe',"帮助")}}/>
                        <MenuItem
                            title='意见反馈'
                            margin2Top='1'
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                            onClick={() => {this._tabSelectedEvent('HelpMe',"帮助")}}/>
                        <MenuItem
                            title='设置'
                            margin2Top='10'
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                            onClick={() => {this._tabSelectedEvent(SettingContainer)}}/>

                    </ScrollView>
                </View>
            </View>
        );
    }
}
;

/*<TouchableHighlight
 style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red',height:45,marginTop:30}}
 underlayColor="#dad9d7" onPress={()=>this._call()}>
 <Text style={styles.themeName}>退出登录</Text>
 </TouchableHighlight>

 <TouchableHighlight
 style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#ffffd0',height:45,marginTop:30}}
 underlayColor="#dad9d7" onPress={()=>this._call()}>
 <Text >拨打客服:999-95599</Text>
 </TouchableHighlight>*/
var styles = StyleSheet.create({

    contentContainer: {
        paddingVertical: 70
    },
    loginButton: {
        width: 80,
        padding: 5,
        borderColor: '#eeeeee',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: '#6A85B1',
        height: 300,
        flex: 1
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
        alignItems: 'center',
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