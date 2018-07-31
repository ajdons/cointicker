var request = require('request');
var cheerio = require('cheerio');
var input = process.argv;

var ALL_COINS_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=0';
request(ALL_COINS_URL, function(err, resp, html) {
        if (!err){
          var myObj = JSON.parse(resp.body);
          for (x in myObj) {
            var coin = myObj[x];
            if(input[2] == coin.symbol){
              console.log('Getting data for ' + coin.id);
              getCoinData(coin.id);
            }
          }
        }
});

function getCoinData(id) {
  request('https://coinmarketcap.com/currencies/'+id, function(err, resp, html) {
          if (!err){
            const $ = cheerio.load(html);
            var marketTable = $('#markets-table').find('tr');
            var linksList = $('ul[class="list-unstyled"]').find('li');
            var explorerLink = $(linksList).find('a:contains("Explorer")').attr('href');
            if(input[3] == "-e") {
              var preferredExchange = input[4];
            }

            $(marketTable).each(function(index, element){
            	var exchange = $(element).find('a').first().text();
              if (!preferredExchange || exchange.toLowerCase().includes(preferredExchange.toLowerCase())){
                var pairing = $(element).find('[target="_blank"]').text();
                var price = $(element).find('.price').text().replace(/\s\s+/g, ' ');
                console.log(exchange + " " + pairing + " " + price);
              }
            });
        } else {
          console.log("you've got an error m8");
        }
  });
}
