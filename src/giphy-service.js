export default class GiphyService {  
  static getGiphy(word) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url =  `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${process.env.API_KEY}&limit=5`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}