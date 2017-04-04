const homeTimelineUrl = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
import _generateTwitterOauthHeader from './Auth'
export default function _getHomeTimeLine(token, tokenSecret){
        return new Promise((resolve, reject) => {

        let oauthHeader = _generateTwitterOauthHeader('GET', homeTimelineUrl, {count: 100}, token, tokenSecret);

        fetch(`${homeTimelineUrl}?count=100`, 
        {
            method: 'GET',
            headers: {
            'Authorization':  'OAuth '+oauthHeader,
            }
        }
        )
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("\n=====DATA=====")
            console.log(responseJson);
            console.log("\n=====END DATA=====")
            resolve(responseJson);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        });
    });
}