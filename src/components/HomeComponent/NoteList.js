'use strict';

var React = require('react-native');

var {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    ListView,
    TouchableHighlight,
    Dimensions,
    } = React;

var FundListHeader =require('./FundListHeader');

var GiftedListView = require('../_thirdpartComponent/react-native-gifted-listview');
var Util = require('../../util/util.js');
var ServerConfig = require('../../util/serverconfig.js');

var noteData=[{"code":"1", "note":"请巡检大厅自助设备","date":"20160510"},
    {"code":"2","note":"总行零售业务部今日发布《关于规范大厅营销管理》的相关规定，请及时查阅","date":"20160320"},
    {"code":"3", "note":"请巡检大厅自助设备","date":"20160210"},
    {"code":"4","note":"总行零售业务部今日发布《关于规范大厅营销管理》的相关规定，请及时查阅","date":"20160110"},
    {"code":"5", "note":"请巡检大厅自助设备","date":"20160110"},
    {"code":"6","note":"总行零售业务部今日发布《关于规范大厅营销管理》的相关规定，请及时查阅","date":"20160109"},
    {"code":"7", "note":"请巡检大厅自助设备","date":"20160110"},
    {"code":"8","note":"总行零售业务部今日发布《关于规范大厅营销管理》的相关规定，请及时查阅","date":"20160510"},
    {"code":"9", "note":"请巡检大厅自助设备","date":"20160510"},
    {"code":"10","note":"总行零售业务部今日发布《关于规范大厅营销管理》的相关规定，请及时查阅","date":"20160510"},
    {"code":"11", "note":"请巡检大厅自助设备","date":"20160510"},
    {"code":"12","note":"总行零售业务部今日发布《关于规范大厅营销管理》的相关规定，请及时查阅","date":"20160510"}];

var NoteList = React.createClass({


    _tabSelectedEvent(msg){
        //var router ={name:"NoteDetail",msg:msg,depth:3};
        //this.props.navigator.push(router) ;
    },


    _renderRow: function(rowData: string, sectionID: number, rowID: number) {
        return (
            <TouchableOpacity onPress={()=>this._tabSelectedEvent(this._noteData[rowData].code)}>
                <View>
                    <View style={styles.row}>
                        <View style={[styles.part_1_left]}>
                            <Text style={styles.textLeftUp}>
                                {this._noteData[rowData].date}
                            </Text>
                        </View>

                        <View style={[styles.part_1_right]}>
                            <Text style={styles.textRight}>
                                {this._noteData[rowData].note}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableOpacity>
        );
    },

    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            this._noteData = noteData;
            var rows = [];
            for (var ii = 0; ii < 6; ii++) {
                rows.push(ii);
            }
            if (page === 3) {
                callback(rows, {
                    allLoaded: true, // the end of the list is reached
                });
            } else {
                callback(rows);
            }
        }, 1000); // simulating network fetching
    },
    render: function() {
        return (
        <View>
        <FundListHeader navigator={this.props.navigator} title="信息列表" mainScreen={this.props.mainScreen} direction={this.props.router.direction}></FundListHeader>
            <GiftedListView
                rowView={this._renderRow}
                onFetch={this._onFetch}
                firstLoader={true} // display a loader for the first fetching
                pagination={true} // enable infinite scrolling using touch to load more
                refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                withSections={false} // enable sections
                customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}
                refreshableTintColor="blue"
                />
        </View>

        );
    }
});

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    thumb: {
        width: 64,
        height: 64,
    },
    textLeftUp: {
        fontSize: 20,
        color :'#F00',
    },
    textLeftDown: {
        fontSize: 13,
        opacity:0.5,
    },
    textRight:{
        fontSize: 20,
        //justifyContent: 'center',
        textAlign: 'center',
    },

    listViewHeight:{height:(Dimensions.get('window').height-130)},

    part_1_left:{
        flex: 1,
        borderColor: '#CCCCCC',
        borderRightWidth: 1,
    },
    part_1_right:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center',
    },
});
module.exports=NoteList;
