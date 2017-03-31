import React, { Component , PropTypes} from 'react';
import {icon, colors, dimens} from '../../config/appConfig'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, 
  Image,
  StatusBar
} from 'react-native'

const settingText = ['Highlights', 'My Moments', 'Lists', 'Connect'];
const settingIcon = [icon.tab_home_unselect, icon.tab_noti_unselect, icon.tab_profile_unselect, icon.tab_message_unselect];
const settingSubText = ['Qr Code', 'Setting and privacy', 'Help Center'];
export default class ControlPanel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  _getMainMenuDrawer(){
    var menuDrawer = [];
    for(let i = 0 ; i< settingText.length;i++){
        menuDrawer.push(<TouchableOpacity key={i} style = {styles.layout_itemMenu}>
            <Image style ={styles.itemIcon}
            source = {settingIcon[i]} />
            <Text style = {styles.itemText}>{settingText[i]}</Text>
          </TouchableOpacity>)
    }
    return (
      <View>
      {menuDrawer}
      </View>
    );
  }


  _getSubMenuDrawer(){
    var menuDrawerSub = [];
    for(let i = 0 ; i< settingSubText.length;i++){
        menuDrawerSub.push(<TouchableOpacity key={i} style = {styles.layout_itemMenu}>
            <Text style = {styles.itemText}>{settingSubText[i]}</Text>
          </TouchableOpacity>)
    }
    return (
      <View>
      {menuDrawerSub}
      </View>
    );
  }


  render() {
    let {closeDrawer} = this.props
    return (
      <ScrollView style={styles.container}>
         <StatusBar barStyle = "light-content"/>
        <View style ={styles.profileHeader}>
          <Image  style ={styles.coverImage}
          source = {{uri:'https://scontent.fsgn2-2.fna.fbcdn.net/v/t31.0-8/17240409_272074939905160_4141327764769978811_o.jpg?oh=b9dbd313e2539c33efa6747cb6135d5a&oe=59928B2F'}} />
          <View  style ={styles.profilAvatar}>
            <Image style ={styles.avatarImage}
            source = {{uri:'https://scontent.fsgn2-2.fna.fbcdn.net/v/t31.0-8/15304449_644480075724724_7008031781527667179_o.jpg?oh=79b0d15f36d2b2b5a26478ac0b9b7fc1&oe=59518C45'}}/>
            <Text style ={styles.textBig}>Thanh Nguyen</Text>
            <Text style ={styles.textNormal}>@thanhcs94</Text>
          </View>

          {this._getMainMenuDrawer()}
          <View 
          style={{
            marginTop:dimens.space_big,
            marginBottom:dimens.space_small,
            borderBottomColor: colors.divider_color,
            borderBottomWidth:1, 
            }}></View>
          {this._getSubMenuDrawer()}

        </View>
        {/*<TouchableOpacity style={styles.button} onPress={closeDrawer}>
          <Text>Close Drawer</Text>
        </TouchableOpacity>*/}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.default_primary_color
  },
  profileHeader:{
    flex:1,
  },
  profilAvatar:{
    position: 'absolute',
    justifyContent:'flex-end',
    padding: dimens.space_big,
    marginBottom: dimens.space_big
  },
  button: {
    flex :0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: dimens.space_small,
  },
  avatarImage:{
    width: dimens.my_avatar,
    height: dimens.my_avatar, 
    borderRadius : 25, 
    marginTop:dimens.space_super_big
  }, 
  coverImage:{
    opacity: 0.1,
    height: dimens.cover_photo_height,
  },
  textBig: {
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: dimens.text_title,
        textAlign: 'left',
        marginTop: 10,
        fontWeight:'700',
        color : colors.primary_text_color
  },
  textNormal: {
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: dimens.text_description,
        textAlign: 'left',
        marginTop: dimens.space_small,
        color : colors.secondary_text_color
  },
  layout_itemMenu:{
    flexDirection:'row',
    paddingLeft : dimens.space_normal,
    marginTop:dimens.space_big,
    borderBottomColor: colors.dark_primary_color,
    borderBottomWidth:0.4, 
    paddingBottom:dimens.space_normal
  },
  itemIcon:{
    width: dimens.space_big,
    height: dimens.space_big,
    marginLeft:dimens.space_normal 
  },
  itemText:{
    color:colors.text_primary_color, 
    marginLeft:dimens.space_normal
  }
})