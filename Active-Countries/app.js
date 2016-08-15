console.log('Listening to 3000');
console.log('_____');

var http = require('http');
var express = require('express');
var app = express();

var BciWebSocket = require('./webSocket.js'); //import webSocket code

var geoIP = require('./API/geoIP_handler.js');	//Import geoIP handlers 
var popAPI = require('./API/population_handler.js');	//Import Population size API handlers 

var updateStats = require('./Results/generateResults.js');	//Import analysis and generation code 

app.use('/', express.static('./public'));


//Create new objects for imported classes
var update = new updateStats();
var counter = 0;


//Start program
//This function will invoke and activate all necessary functions for script to operate
function start() {
	var ws = new BciWebSocket();

	//Connect to web socket and start receiving real-time data
	ws.registerCallback(function (ipAddress) {
		//Catch TXs relayed by BlockChain
		if (ipAddress == "127.0.0.1") {
			//Decide if you want to include TXs relayed by Blockchain in your results
			//Uncomment following line of code

			//update.updateResults("BlockChain", 1);

		}
		//All other relays
		else {
			//geoIP API 
			geoIP.fetchGeoIP(ipAddress, function (countryInfo, error) {

				//Catch errors from geoIP reply
				if (error != null) {
					console.log(error);
				}

				//Response successful
				else {
				
					var country = countryInfo["country_name"];
				
					//Get country's Population Size
					//popSize API
					popAPI.fetchPopSize(country, function (popSize) {
						if (popSize == null || popSize == undefined || popSize == "") {
							// Decide if you want to include "failed" or unidentified TXs in your results
							//Uncomment next line of code

							//update.updateResults("Unknown", 1);
						}
						else {

							update.updateResults(country, popSize);

							counter++;
							console.log(counter);

							//Debugging tools
							//Output to a console current state of counters
							//Every 10 requests

							//if (counter%10==0) {
								// update.getShare(counter);
								// console.log(update.getShare(counter));
								//update.getTopShare(counter);
								//console.log(update.getTopShare(counter));
								//console.log(update.showBCI());
							//}
							
						}
					})
				}
			})
		}
	});
}


//Start a program
start();


//Send all data to index.html
app.get('/calcShare', function (req, res) {
	res.send(JSON.stringify(update.getTopShare(counter)));
});

app.listen(3000);