import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './giphy-service.js';
import GiphyService from './giphy-service.js';

$(document).ready(function() {
  $("input").on("keyup", function() {
    if ($(this).val() === 13) {
      $("button").on("click");
    }
  });

  $('button').on('click',function() {
    const word = $('#inputWord').val();
    let promise = GiphyService.getGiphy(word);

    $('#inputWord').on('click', function (){
      $('#showGif').hide();
    })

    promise.then(function(response) {
      const body = JSON.parse(response);
      let image = body.data[0].images.downsized.url;
      $('#showGif').html(`<img src=${image}>`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });

  });
  
});

