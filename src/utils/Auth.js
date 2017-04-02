var ohauth = require('ohauth');
const config = {
  twitter: {
    consumer_key: 'Se9Zj1Jaeybn1R4VHk8ZXobOM',
    consumer_secret: '309PQFS093hTtf5RzfbO5pYmeBvSz3WjyT6kJUi8SMqSRwqRE7',
  }
}
export default function _generateTwitterOauthHeader(method, url, urlParams, token, tokenSecret){    
    var m_nonce;
    for (var o = ''; o.length < 32;) {
        o += '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'[Math.floor(Math.random() * 61)];
        m_nonce =o;        
    }
    let headerParams = {
      oauth_consumer_key: config.twitter.consumer_key,
      oauth_nonce: m_nonce,
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: ohauth.timestamp(),
      oauth_token: token,
      oauth_version: "1.0"
    };    

    headerParams = Object.assign(headerParams, urlParams);
    console.log(headerParams);

    let baseString = ohauth.baseString(method, url, headerParams)
    console.log(baseString);

    let sig = ohauth.signature(config.twitter.consumer_secret, tokenSecret, baseString) // function(oauth_secret, token_secret, baseString) {
    console.log(sig)

    headerParams["oauth_signature"] = sig;
    let header = ohauth.authHeader(headerParams);
    console.log(header);    

    return header
  }


  function getNonce(){
    for (var o = ''; o.length < 32;) {
      o += '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'[Math.floor(Math.random() * 61)];
    }
    return o;    
  }



// Create the manager
// const manager = new OAuthManager('Twitter React-native Demo')
// // configure the manager
// manager.configure(config);

// module.exports = {

//   authenticate(providerName) {
//     return new Promise((resolve, reject) => {
//       let promise; 
//       switch (providerName) {
//         case 'twitter':
//           promise = manager.authorize('twitter');
//           break;
//         case 'facebook':
//           promise = manager.authorize('facebook', {scopes: 'user_posts'});        
//           break;         
//         default:
//           console.log('Unknown provider');
//           break;
//       }
//       if(promise){
//         promise.then((res) => {
//           resolve({ credentials: res.response.credentials, uuid: res.response.uuid });
//         }).catch((error) =>{
//           reject(error);
//         });
//       }else{
//         reject('unknown provider');
//       }
//     });
//   }
// }