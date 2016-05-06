/**
 * Created by liu on 2016/3/11.
 */

'use strict';
var React = require('react-native');
var NavigationBar = require( '../../_thirdpartComponent/NavBar');
var {
    AppRegistry,
    Navigator,
    WebView,
    View,
    Text,
    Component,
    Dimensions,
    StyleSheet,
    ScrollView,
    BackAndroid,
    ToastAndroid,

    } = React;


class Calculator extends Component {

    _tabSelectedEvent(){
        /*        const {showTabBar,tabBarShow}=this.props;
         showTabBar(true);*/
        if (this.props.navigator.getCurrentRoutes().length > 1) {
            this.props.navigator.pop();
            return true;
        }
    }
    _renderHeader() {
        const leftButtonConfig = {
            title: String.fromCharCode(parseInt('f142', 16)),
            handler: () => this._tabSelectedEvent(),

            styleText: {
                fontFamily: 'Entypo',
                fontSize: 40,
            },
        };
        return (


            <NavigationBar
                title={{ title: "计算器" }}
                leftButton={leftButtonConfig}
                />

        );
    }
    loadCalculator(uri,chgHTML){
       if(uri!=''){
          return( <WebView style={styles.webview_style}
                    source={{uri:uri}}
                    automaticallyAdjustContentInsets={false}
                    startInLoadingState={true}
                    injectedJavaScript={chgHTML}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
               >
           </WebView>
          )
       }else{
           return(<Text>计算器加载失败.....</Text>)
       }
    }
    render() {
        let uri = '';
        switch (this.props.type) {
            case 'rate':
                uri = 'http://app.abchina.com/mobileSite/Rate/Calculator/ExchangeCalculate';
                break;
            case 'save':
                uri = 'http://app.abchina.com/mobileSite/Rate/Calculator/SaveCalculate';
                break;
            case 'loan':
                uri = 'http://app.abchina.com/mobileSite/Rate/Calculator/LoanCalculate';
                break;

        }



        var chgHTML = `$(document).ready(function(){

$(".mVersion").hide();
$(".mFooter").hide();
$(".mHeader").hide();
$(".mSlotHeader").hide();
});
           `;
        return (

            <View style={styles.webContainer}>
                {this._renderHeader()}
                {this.loadCalculator(uri,chgHTML)}
            </View>


        );
    }
}
var styles = StyleSheet.create({

    page: {
        flex: 1,
    },
    webContainer: {
        backgroundColor: '#fff',
        flex: 1,
    },
    webview_style: {
        backgroundColor: '#fff',


    }


});
module.exports = Calculator;