var itemstuff = '';
(function () {

let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';
var templateString = $('#itemTemplate').text();
var templateFunction = _.template(templateString);

  $.ajax({
      url: etsyURL,
      dataType: 'jsonp',
      method: 'get'
    }).then (function (response) {
    _.each(response.results, function (item) {
      var itemHTML = templateFunction(item);
      $('.container').append(itemHTML);
    });
  });


  })();
