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
    ListView,
    Dimensions,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';
var Lightbox = require('react-native-lightbox');
var {height, width} = Dimensions.get('window');
var image1 = require('../../../resource/image11.jpeg')
var image2 = require('../../../resource/image10.jpeg')
var image3 = require('../../../resource/image9.jpeg')
var image4 = require('../../../resource/image8.jpeg')
var image5 = require('../../../resource/image7.jpeg')
var image6 = require('../../../resource/image6.jpeg')
var image7 = require('../../../resource/image5.jpeg')
var image8 = require('../../../resource/image4.jpeg')
var image9 = require('../../../resource/image3.jpeg')
var image10 = require('../../../resource/image2.jpeg')
var image11 = require('../../../resource/image1.jpeg')

const data = [{
  "id": 1,
  "first_name": "Gina",
  "last_name": "Hill",
  "tweet": "Phasellus sit ag lorem, vitae mattis elit.",
  "time": "9:48 AM",
  "isLiked": true,
  "play": false,
  avatar : image1, 
  image: image5,
}, {
  "id": 2,
  "first_name": "Marta",
  "last_name": "Little",
  "tweet": "Vivamus tortor. D sollicitudin ut, suscipitique. Fusce con sed augue.",
  "time": "8:39 PM",
  "isLiked": false,
  "play": false,
  avatar : image2, 
  image: '',
}, {
  "id": 3,
  "first_name": "Christy",
  "last_name": "Powell",
  "tweet": "Integer pede justo, lacinia eget, tinciduntet, sem. Fusce consequat. Nulla nisl. Nunc n Donec quis orci eget orndimentum. Curabitur in libert. Nulla tempus. Donec quis orci eget orndimentum. Curabitur in libert. Nulla tempus.Donec quis orci eget orndimentum. Curabitur in libert. Nulla tempus.",
  "time": "8:01 AM",
  "isLiked": false,
  "play": false,
  avatar : image3, 
  image: '',
}, {
  "id": 4,
  "first_name": "Cynthia",
  "last_name": "Nichols",
  "tweet": "Donec quis orci eget orndimentum. Curabitur in libert. Nulla tempus.",
  "time": "3:36 AM",
  "isLiked": false,
  "play": false,
  avatar : image4, 
  image: image1,
}, {
  "id": 5,
  "first_name": "Maria",
  "last_name": "Harrison",
  "tweet": "Ut at dolor quis odio consequat varius. Integer ac let ac nulla.",
  "time": "9:34 AM",
  "isLiked": false,
  "play": false,
  avatar : image5, 
  image: image3
}, {
  "id": 6,
  "first_name": "Ana",
  "last_name": "Porter",
  "tweet": "Donec odit sapien arcu sed augue. Aliquam erat volutpat.",
  "time": "3:09 PM",
  "isLiked": false,
  "play": false,
  avatar : image6, 
  image: image2
}, {
  "id": 7,
  "first_name": "Clara",
  "last_name": "Bennett",
  "tweet": "Mauris.",
  "time": "8:04 PM",
  "isLiked": false,
  "play": false,
  avatar : image7, 
  image: ''
}, {
  "id": 8,
  "first_name": "Brenda",
  "last_name": "Rogers",
  "tweet": "ellentesque.",
  "time": "12:46 PM",
  "isLiked": false,
  "play": false,
  avatar : image8, 
  image: ''
}, {
  "id": 9,
  "first_name": "Annie",
  "last_name": "Daniels",
  "tweet": "Phasellus sit ulla ac enim. In tempor, turpis nec euismod scelerisque, qt.",
  "time": "9:35 PM",
  "isLiked": false,
  "play": false,
  avatar : image9, 
  image: image6
}, {
  "id": 10,
  "first_name": "Bri",
  "last_name": "Franklin",
  "tweet": "Nullanisi vulputate nonummy. Maecenas tincidunt lacusvelit. Vivamus rus.",
  "time": "11:22 AM",
  "isLiked": false,
  "play": false,
  avatar : image10, 
  image: image7
}];


//var data =[];
//var isReload = true;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class TabNewFeeds extends Component {
    constructor(props){
    super(props)
    this.springValue = new Animated.Value(1)
    this.springValueDefault = new Animated.Value(1)
    this.state = {
      dataSource: ds.cloneWithRows(data),
      play: false
    }
  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  //   console.log('componentWillMount', this.props.title);
  //   isReload = true;
  // }
  
  // conponentDidMount(){
  //       console.log('feed data : _getDataTimeLine conponentDidMount')
  //       console.log('feed data : _getDataTimeLine conponentDidMount '+ this.props.title)
  //   }

spring (x) {
    this.springValue.setValue(0.3)
    console.log('dataaaa'+ JSON.stringify(data))
    const dataClone=data;
    console.log('dataaaa2'+ JSON.stringify(dataClone))
    for (let i = 0; i < dataClone.length; i++) {
       if(dataClone[i]==x){
         dataClone[i].isLiked = !dataClone[i].isLiked;
         dataClone[i].play = true;
         this.setState({
         dataSource: ds.cloneWithRows(dataClone),
         });
          Animated.spring(
          this.springValue,
          {
            toValue: 1,
            friction: 1,
            tension: 1
          }
        ).start(()=>{
          dataClone[i].play = false;
           this.setState({
              dataSource: ds.cloneWithRows(dataClone),
         });
        })
       }
    }
  }

    // async _getDataTimeLine(){
    //     try{
    //         var token =  await AsyncStorage.getItem(dataKey.token);
    //         var tokenSecret =  await AsyncStorage.getItem(dataKey.tokenSecret);
    //         data = _getHomeTimeLine(token, tokenSecret);
    //         console.log('feed data : token '+token +' : tokenSecret '+ tokenSecret)
    //         this.setState({
    //             dataSource : data
    //         })
    //         console.log('feed data : data '+  JSON.stringify(dataSource))
    //     }catch(error){
    //         console.log('feed data : error '+  error)
    //     }
    // }
    _renderRow(x, sectionID, rowID){
      console.log('row dataaaa: '+JSON.stringify(x) + '--- sectionid ---' + sectionID +'------- rowid '+ rowID);
      var img;
            if(x.image !== ''){
              img =<Lightbox navigator={this.props.navigator} activeProps ={{flex:1, resizeMode: 'contain'}} >
                 {/*renderContent={() => {
                        return (<Image source={x.image}*/}
                              {/*style={{flex: 1, width:width, resizeMode: 'contain', }}/>);}}>*/}
            <Image source = {x.image}  style ={{resizeMode: 'cover',height:170, width:null, borderRadius:4, marginTop: dimens.space_normal}} />
          </Lightbox>
            }else
            img = null;
    return(
      <View key ={rowID} style={{width:width, borderBottomWidth:0.3, borderColor:colors.divider_color}}>
      <View style={{flex:1, flexDirection:'row', marginTop:dimens.space_normal}}>
      <Image source = {x.avatar} resizeMode="contain" style ={{height:54, width:54, borderRadius:8, margin:10, marginTop:8}} />
      <View style={{flex:1}}>
      <View style={{ flexDirection:'row', marginLeft:5, marginTop:5, alignItems:'center'}}>
      <Text style={{color:colors.primary_text_color, fontWeight:'500', fontSize:dimens.tit}}>{dimens.text_title} {x.last_name}</Text>
      <Text style={{color:colors.secondary_text_color,fontWeight:'300', fontSize:12}}> | @{x.first_name}</Text>
      </View>
      <View style={{ margin:5, marginRight:10, flexDirection:'column'}}>
      <Text style={{color:colors.primary_text_color,fontSize:13, fontWeight:'400'}}>{x.tweet}</Text>
      {img}
      </View>

      <View style={{ marginTop:dimens.space_normal, marginBottom:dimens.space_normal, marginRight:10, flexDirection:'row', flex:1}}>
        <TouchableOpacity  style ={{flex:1,  flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
          <Image source = {icon.ic_forward} resizeMode="contain" style ={{height:20, width:20}} />
          <Text style={{color:colors.secondary_text_color,fontWeight:'300', fontSize:12, marginLeft:8}}>12</Text>
        </TouchableOpacity>

        <TouchableOpacity  style ={{flex:1,  flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
            <Image source = {icon.ic_loop} resizeMode="contain" style ={{height:20, width:20, marginLeft:dimens.space_big}} />
            <Text style={{color:colors.secondary_text_color,fontWeight:'300', fontSize:12, marginLeft:8}}>96</Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.spring(x)} style ={{flex:1,  flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
       <Animated.Image  source = {x.isLiked==true?icon.ic_hearted:icon.ic_heart} 
                        resizeMode="contain" 
                        style ={{height:20, width:20, marginLeft:dimens.space_big, transform: x.play?[{scale: this.springValue}]:[{scale: this.springValueDefault}]}}/>
             <Text style={{color:colors.secondary_text_color,fontWeight:'300', fontSize:12, marginLeft:8}}>121</Text>
        </TouchableOpacity>

      </View>
      
      </View>
      </View>
      </View>
      )
  }

    render() {
        //   if(isReload){
        //     this._getDataTimeLine();
        //     isReload = false;
        // }
         console.log('feed data : _getDataTimeLine render ')
        return (
            <View style={styles.container}>
                <View style={{marginTop:16,flexDirection:'row', alignItems:'center', padding:10, borderBottomWidth:1, borderColor: colors.divider_color}}>
                <Text style={{fontWeight:'900', fontSize:20, color:colors.primary_text_color, marginBottom:-1 }}>TWEETS</Text>
                <TouchableOpacity><Text style={{fontSize:14, color:'#01addf', fontWeight:'400', marginLeft:10}}>ALL</Text></TouchableOpacity>
                <Text style={{fontSize:14, fontWeight:'400', color:'#888'}}>   /</Text>
                <TouchableOpacity><Text style={{fontSize:14, fontWeight:'400', color:"#555"}}>   TODAY</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{fontSize:14, fontWeight:'400', color:"#555"}}>   SPORT</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{fontSize:14, fontWeight:'400', color:"#555"}}>   NEW</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{fontSize:14, fontWeight:'400', color:"#555"}}>   ENTERTAINMENT</Text></TouchableOpacity>
                </View>
                <ListView 
                dataSource = {this.state.dataSource}
                renderRow = {this._renderRow.bind(this)}
                
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.dark_primary_color,
        height:null,
        width:null,
    },
    textBig: {
        fontSize: dimens.text_title,
        textAlign: 'center',
        margin: 10,
        color : colors.primary_text_color
    }
});