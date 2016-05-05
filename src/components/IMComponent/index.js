'use strict';
var React = require('react-native');
var GiftedMessenger = require('./GiftedMessenger');
var {Dimensions,View,ToolbarAndroid,StyleSheet,BackAndroid} = React;
var NavigationBar = require( '../_thirdpartComponent/NavBar');
var index = React.createClass({


    getMessages() {
        return [
            {text: '你好！', name: '柜员', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date(2015, 0, 16, 19, 0)},
            {text: "你好！", name: 'Developer', image: null, position: 'right', date: new Date(2015, 0, 17, 19, 0)},
        ];
    },
    handleSend(message = {}, rowID = null) {
        // Send message.text to your server
    },
    handleReceive() {
        this._GiftedMessenger.appendMessage({
            text: 'Received message',
            name: 'Friend',
            image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
            position: 'left',
            date: new Date(),
        });
    },

_tabSelectedEvent(){
    /*        const {showTabBar,tabBarShow}=this.props;
     showTabBar(true);*/
    if (this.props.navigator.getCurrentRoutes().length > 1) {
        this.props.navigator.pop();
        return true;
    }
},
_renderHeader() {
    const leftButtonConfig = {
        title: String.fromCharCode(parseInt('f142',16)),
        handler: () => this._tabSelectedEvent(),

        styleText:{
            fontFamily:'Entypo',
            fontSize:40,
        },
    };
    return (


        <NavigationBar
            title={{ title: "客户信息" }}
            leftButton={leftButtonConfig}
            />

    );
},
    render() {
       // this.props.tabBarShow(false);
        return (
            <View>
                {this._renderHeader()}
            <GiftedMessenger
                ref={(c) => this._GiftedMessenger = c}

                messages={this.getMessages()}
                handleSend={this.handleSend}
                maxHeight={Dimensions.get('window').height - 84} // 64 for the navBar
                sendButtonText='发送'
                placeholder='请输入...'
                styles={{
          bubbleLeft: {
            backgroundColor: '#e6e6eb',
            marginRight: 70,
          },
          bubbleRight: {
            backgroundColor: '#007aff',
            marginLeft: 70,
          },
        }}
                />
                </View>
        );
    },
});

var styles = StyleSheet.create({
    line: {
        marginTop: 1,
        height: 1,
        backgroundColor: 'gray'
    },
    toolbar: {
        backgroundColor: '#333333',
        height: 56


    },
})
module.exports=index;