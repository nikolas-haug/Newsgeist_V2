import axios from 'axios';

export default {

    // NEWS API request
    getNews: function(searchTerm) {
        return axios.get(`/api/news/${searchTerm}`);
    }

}