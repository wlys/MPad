'use strict';

var React = require('react-native');

var {
    Dimensions,
    } = React;

var globalStyles = require('../../../styles/globalStyles');

//const NAV_BAR_HEIGHT = (Dimensions.get('window').height/10);
const STATUS_BAR_HEIGHT = 20;
const NAV_BAR_HEIGHT = globalStyles.NAVBAR_HEIGHT;

module.exports = {
  navBarContainer: {
    backgroundColor: 'white',
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor:'#009900'
  },
  customTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 7,
    alignItems: 'center',
  },
  navBarButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  navBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButtonText: {
    fontSize: 17,
    letterSpacing: 0.5,
    color:'white'
  },
  navBarTitleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitleText: {
    fontFamily:'  ',
    fontSize: 20,
    letterSpacing: 1.4,
    color: 'white',
    fontWeight: '200',
  },
};
