import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  DrawerLayoutAndroid,
  AsyncStorage
} from 'react-native';  
import Login from './components/Login';
import TabNewFeeds from './components/Tabbar/TabNewFeeds';
import TabNotifications from './components/Tabbar/TabNotifications';
import TabMessages from './components/Tabbar/TabMessages';
import ControlPanel from './components/Drawer/ControlPanel';
import TabProfile from './components/Tabbar/TabProfile';
import {colors} from './config/appConfig'
import {icon} from './config/appConfig'
import {dataKey} from './config/Constraint'
import { twitter, uri } from 'react-native-simple-auth';
import Drawer from 'react-native-drawer'
import {Actions,ActionConst, Scene, Router,Route, NavigationDrawer} from 'react-native-router-flux';
var ohauth = require('ohauth');
var isLogin = '0';
var mainView ;
class TabIcon extends React.Component {
    
    _getIcon(){
        switch(this.props.title){
            case "Home":
                   return this.props.selected? icon.tab_home_selected: icon.tab_home_unselect
            case "Notifications":
                   return this.props.selected? icon.tab_noti_selected: icon.tab_noti_unselect
            case "Inbox":
                   return this.props.selected? icon.tab_message_selected: icon.tab_message_unselect
             case "Profile":
                   return this.props.selected? icon.tab_profile_selected: icon.tab_profile_unselect
        }
    }
    render(){
        return (
            <View style ={styles.tabView}>
                <Image style={styles.tabIcon}
                source = {this._getIcon()}>
                </Image>
                <Text style={{color: this.props.selected ? colors.light_primary_color :colors.secondary_text_color }}>{this.props.title}</Text>
            </View>
        );
    }
}


var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
  );
  
const scenes = Actions.create(
    
    <Scene key="root">
       <Scene key='tab' tabs={true} hideNavBar type={ActionConst.REPLACE}>
            <Scene key='tabFeeds' title='Home' component={TabNewFeeds} icon={TabIcon}></Scene>
            <Scene key='tabNotifications' title='Notifications' component={TabNotifications} icon={TabIcon}></Scene>
            <Scene key='tabMessages' title='Inbox' component={TabMessages} icon={TabIcon}></Scene>
            <Scene key='tabProfile' title='Profile' component={TabProfile} icon={TabIcon}></Scene>
     </Scene> 
  </Scene>
);

export default class Index extends Component {

 state={
    drawerOpen: false,
    drawerDisabled: false,
    isLogin : '0'
  };

 closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  


  componentWillMount() {
    this._checkLogin();
   }

    async _checkLogin(){
         try {
             var isin = await AsyncStorage.getItem(dataKey.islogin);
             console.log("=======islogin======= "+ isin)
            if (isin !== null){
                if(isin=='1'){
                    this.setState({
                        isLogin:'0'
                    })
                    this._loginWithTwitter();
                    AsyncStorage.getItem(dataKey.accountData).then((value) => {
                         console.log("=====Login roi=====")
                         console.log(JSON.stringify(value))
                         console.log("====================")
                        
                        }).then(res => {isLogin='1'});
                   }
             }else{
                 console.log("=======Not yet Login=======")
                 console.log("==============================")
                 isLogin='0';
                 this.setState({
                     isLogin:'0'
                 })
             }
        } catch (error) {
        // Error retrieving data
         console.log("=======Error=======")
         console.log(error)
        }
    }

// "credentials" : -{
// "oauth_token" : 2785041523-AYeDkSyy6n6oMwym5gyetMGfE8qjAHCOEeNqGBy,
// "oauth_token_secret" : OuKyh2ZSZzPqAGmKW0XjWF1ZEZJOUSHumwMmXYRo3JOhk
// }   
    async _loginWithTwitter() {
        try {
        const info = await twitter({
            appId: 'Se9Zj1Jaeybn1R4VHk8ZXobOM',
            appSecret: '309PQFS093hTtf5RzfbO5pYmeBvSz3WjyT6kJUi8SMqSRwqRE7',
            callback: 'demotwitter://authorize',
        });
        console.log('info ======= ', info);
            AsyncStorage.setItem(dataKey.token, info.credentials.oauth_token);
            AsyncStorage.setItem(dataKey.tokenSecret,info.credentials.oauth_token_secret);
            this.setState({
                   isLogin:'1'
             })
        }catch(error){
              console.log('info error ======= ', error);
        }
    }
  render() {
      if(this.state.isLogin=='0'){
        mainView = <Login/>
      }else{
        mainView = <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        acceptDoubleTap
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        content={<ControlPanel closeDrawer={this.closeDrawer} />}
         onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.1}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => {
          return 100
        }}
        panOpenMask={0.95}
        negotiatePan>
         <Router hideNavBar={true} 
        scenes={scenes}
        style = {styles.container}/>

      </Drawer>

      }
    return mainView;

       //this.openControlPanel();
  } 
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.dark_primary_color,
    },
    tabView:{
        justifyContent:'center', alignItems:'center', marginBottom:10
    },
    tabIcon:{
        width:20, height:20, marginBottom:5, marginTop:5
    },
    navBar: {
    backgroundColor:colors.dark_primary_color,
    },
    navBarTitle:{
        color:colors.text_primary_color
    },
    barButtonTextStyle:{
        color:colors.text_primary_color
    },
    barButtonIconStyle:{
        tintColor:colors.dark_primary_color
    }
})

/**
navigationBarStyle={styles.navBar} 
titleStyle={styles.navBarTitle} 
barButtonTextStyle={styles.barButtonTextStyle} 
barButtonIconStyle={styles.barButtonIconStyle}
 */

/*{ 
"user" : -{
"id" : 2785041523,
"id_str" : 2785041523,
"name" : Thanh Nguyen🦉,
"screen_name" : thanhcs94,
"location" : Ho Chi Minh, Vietnam,
"description" : The very important partner of @google . Try not to be unsuccessful people and play #fasterthinking game everyday.,
"url" : https://t.co/hvNBSQPA9k,
"entities" : -{
"url" : -{
"urls" : -[
-{
"url" : https://t.co/hvNBSQPA9k,
"expanded_url" : http://appa2z.com,
"display_url" : appa2z.com,
"indices" : -[
0,
23
]
}
]
},
"description" : -{
"urls" : -[
]
}
},
"protected" : false,
"followers_count" : 90,
"friends_count" : 287,
"listed_count" : 21,
"created_at" : Tue Sep 02 01:39:55 +0000 2014,
"favourites_count" : 110,
"utc_offset" : -25200,
"time_zone" : Pacific Time (US & Canada),
"geo_enabled" : true,
"verified" : false,
"statuses_count" : 1688,
"lang" : en,
"status" : -{
"created_at" : Fri Mar 31 18:43:07 +0000 2017,
"id" : 847881963532722200,
"id_str" : 847881963532722176,
"text" : Happy #DevHumor Friday. When you try to fix the last known tiny bug in the app on a Friday evening.\n#fixbug https://t.co/mzSobAaWqO,
"truncated" : false,
"entities" : -{
"hashtags" : -[
-{
"text" : DevHumor,
"indices" : -[
6,
15
]
},
-{
"text" : fixbug,
"indices" : -[
100,
107
]
}
],
"symbols" : -[
],
"user_mentions" : -[
],
"urls" : -[
],
"media" : -[
-{
"id" : 847881856045338600,
"id_str" : 847881856045338626,
"indices" : -[
108,
131
],
"media_url" : http://pbs.twimg.com/tweet_video_thumb/C8RIDkkU0AIXMTN.jpg,
"media_url_https" : https://pbs.twimg.com/tweet_video_thumb/C8RIDkkU0AIXMTN.jpg,
"url" : https://t.co/mzSobAaWqO,
"display_url" : pic.twitter.com/mzSobAaWqO,
"expanded_url" : https://twitter.com/thanhcs94/status/847881963532722176/photo/1,
"type" : photo,
"sizes" : -{
"small" : -{
"w" : 340,
"h" : 255,
"resize" : fit
},
"medium" : -{
"w" : 600,
"h" : 450,
"resize" : fit
},
"thumb" : -{
"w" : 150,
"h" : 150,
"resize" : crop
},
"large" : -{
"w" : 610,
"h" : 458,
"resize" : fit
}
}
}
]
},
"extended_entities" : -{
"media" : -[
-{
"id" : 847881856045338600,
"id_str" : 847881856045338626,
"indices" : -[
108,
131
],
"media_url" : http://pbs.twimg.com/tweet_video_thumb/C8RIDkkU0AIXMTN.jpg,
"media_url_https" : https://pbs.twimg.com/tweet_video_thumb/C8RIDkkU0AIXMTN.jpg,
"url" : https://t.co/mzSobAaWqO,
"display_url" : pic.twitter.com/mzSobAaWqO,
"expanded_url" : https://twitter.com/thanhcs94/status/847881963532722176/photo/1,
"type" : animated_gif,
"sizes" : -{
"small" : -{
"w" : 340,
"h" : 255,
"resize" : fit
},
"medium" : -{
"w" : 600,
"h" : 450,
"resize" : fit
},
"thumb" : -{
"w" : 150,
"h" : 150,
"resize" : crop
},
"large" : -{
"w" : 610,
"h" : 458,
"resize" : fit
}
},
"video_info" : -{
"aspect_ratio" : -[
305,
229
],
"variants" : -[
-{
"bitrate" : 0,
"content_type" : video/mp4,
"url" : https://video.twimg.com/tweet_video/C8RIDkkU0AIXMTN.mp4
}
]
}
}
]
},
"source" : <a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>,
"in_reply_to_status_id" : ,
"in_reply_to_status_id_str" : ,
"in_reply_to_user_id" : ,
"in_reply_to_user_id_str" : ,
"in_reply_to_screen_name" : ,
"geo" : ,
"coordinates" : ,
"place" : -{
"id" : 2371490f9d073edc,
"url" : https://api.twitter.com/1.1/geo/id/2371490f9d073edc.json,
"place_type" : country,
"name" : Vietnam,
"full_name" : Vietnam,
"country_code" : VN,
"country" : Vietnam,
"contained_within" : -[
],
"bounding_box" : -{
"type" : Polygon,
"coordinates" : -[
-[
-[
102.144583,
8.3291933
],
-[
109.4903078,
8.3291933
],
-[
109.4903078,
23.392735
],
-[
102.144583,
23.392735
]
]
]
},
"attributes" : -{
}
},
"contributors" : ,
"is_quote_status" : false,
"retweet_count" : 0,
"favorite_count" : 0,
"favorited" : false,
"retweeted" : false,
"possibly_sensitive" : true,
"lang" : en
},
"contributors_enabled" : false,
"is_translator" : false,
"is_translation_enabled" : false,
"profile_background_color" : 455A64,
"profile_background_image_url" : http://abs.twimg.com/images/themes/theme5/bg.gif,
"profile_background_image_url_https" : https://abs.twimg.com/images/themes/theme5/bg.gif,
"profile_background_tile" : false,
"profile_image_url" : http://pbs.twimg.com/profile_images/841892295972646912/_ePP0dKB_normal.jpg,
"profile_image_url_https" : https://pbs.twimg.com/profile_images/841892295972646912/_ePP0dKB_normal.jpg,
"profile_banner_url" : https://pbs.twimg.com/profile_banners/2785041523/1488964544,
"profile_link_color" : 1B95E0,
"profile_sidebar_border_color" : 000000,
"profile_sidebar_fill_color" : 000000,
"profile_text_color" : 000000,
"profile_use_background_image" : true,
"has_extended_profile" : true,
"default_profile" : false,
"default_profile_image" : false,
"following" : false,
"follow_request_sent" : false,
"notifications" : false,
"translator_type" : none
},
"credentials" : -{
"oauth_token" : 2785041523-AYeDkSyy6n6oMwym5gyetMGfE8qjAHCOEeNqGBy,
"oauth_token_secret" : OuKyh2ZSZzPqAGmKW0XjWF1ZEZJOUSHumwMmXYRo3JOhk
}
}*/