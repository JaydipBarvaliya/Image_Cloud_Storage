import qs from 'qs';
import axios from 'axios';
const CLIENT_ID = '2b3a13c32f27df9';
const ROOT_URL = 'https://api.imgur.com';



export default {
    data: function() {
        return { imaging: []};
    },
     login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'

        };
        window.location=`${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },

    fetchimages(token){

     return axios
        .get(`${ROOT_URL}/3/account/me/images`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

    }

};