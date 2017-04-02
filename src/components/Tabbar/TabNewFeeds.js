import React, { Component } from 'react';
import {icon, colors, dimens} from '../../config/appConfig'
import {dataKey} from '../../config/Constraint'
import _getHomeTimeLine from '../../utils/UrlManager'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage,
    ListView
} from 'react-native';
var data =[];
export default class TabNewFeeds extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: []
        };
    }

     conponentDidMount(){
        console.log('feed data : _getDataTimeLine')
        this._getDataTimeLine();
    }
    async _getDataTimeLine(){
        try{
            var token =  await AsyncStorage.getItem(dataKey.token);
            var tokenSecret =  await AsyncStorage.getItem(dataKey.tokenSecret);
            data = _getHomeTimeLine(token, tokenSecret);
            this.setState({
                dataSource : data
            })
            console.log('feed data : '+  JSON.stringify(dataSource))
        }catch(error){
            console.log('feed data : '+  error)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.textBig} >NewFeeds</Text>
                 <Text style = {styles.textBig} >NewFeeds</Text>
                  <Text style = {styles.textBig} >NewFeeds</Text>
                   <Text style = {styles.textBig} >NewFeeds</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.dark_primary_color,
    },
    textBig: {
        fontSize: dimens.text_title,
        textAlign: 'center',
        margin: 10,
        color : colors.primary_text_color
    }
});