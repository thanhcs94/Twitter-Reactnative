/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Index from './src/index';
export default class TwitterApp extends Component {

  render() {
    return (
        <Index/>
    );
  }
}

AppRegistry.registerComponent('TwitterApp', () => TwitterApp);

//{
// "id" : 2785041523,
//     "id_str" : 2785041523,
//     "name" : Thanh Nguyen🦉,
// "screen_name" : thanhcs94,
//     "location" : Ho Chi Minh, Vietnam,
//     "description" : The very important partner of @google . Try not to be unsuccessful people and play #fasterthinking game everyday.,
//     "url" : https://t.co/CJRPl7ZTu0,
//     "entities" : +{ ... },
//     "protected" : false,
//     "followers_count" : 89,
//     "friends_count" : 283,
//     "listed_count" : 21,
//     "created_at" : Tue Sep 02 01:39:55 +0000 2014,
//     "favourites_count" : 109,
//     "utc_offset" : -25200,
//     "time_zone" : Pacific Time (US & Canada),
//     "geo_enabled" : true,
//     "verified" : false,
//     "statuses_count" : 1681,
//     "lang" : en,
//     "status" : +{ ... },
//     "contributors_enabled" : false,
//     "is_translator" : false,
//     "is_translation_enabled" : false,
//     "profile_background_color" : 455A64,
//     "profile_background_image_url" : http://abs.twimg.com/images/themes/theme5/bg.gif,
//     "profile_background_image_url_https" : https://abs.twimg.com/images/themes/theme5/bg.gif,
//     "profile_background_tile" : false,
//     "profile_image_url" : http://pbs.twimg.com/profile_images/841892295972646912/_ePP0dKB_normal.jpg,
//     "profile_image_url_https" : https://pbs.twimg.com/profile_images/841892295972646912/_ePP0dKB_normal.jpg,
//     "profile_banner_url" : https://pbs.twimg.com/profile_banners/2785041523/1488964544,
//     "profile_link_color" : 1B95E0,
//     "profile_sidebar_border_color" : 000000,
//     "profile_sidebar_fill_color" : 000000,
//     "profile_text_color" : 000000,
//     "profile_use_background_image" : true,
//     "has_extended_profile" : true,
//     "default_profile" : false,
//     "default_profile_image" : false,
//     "following" : false,
//     "follow_request_sent" : false,
//     "notifications" : false,
//     "translator_type" : none
// }


