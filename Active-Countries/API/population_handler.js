var request = require('request');

module.exports = {fetchPopSize: fetchPopSize}; 


//Send a request to "api.population.io" API to retrieve Population size of a given country
// 
//And get a callback
function fetchPopSize(country, callback){
		var sendReq ="http://api.population.io:80/1.0/population/".concat(country).concat("/today-and-tomorrow/")
		request(sendReq, handlePopReply.bind(null, callback));	
	}

//Handle the reply we get from the API
function handlePopReply(callback, error, response, body){
		//Catching errors or bad replies from API
		if (error) {
			callback(null, error)
		} 

		// If reply is not faulty
		else if (response.statusCode == 200) {
			var popReply = JSON.parse(body);
			//Send population size as a callback
			callback(popReply['total_population'][1]['population'], null);
	  	} 
	  	
	  	//You shouldnt be able to get here
	  	else {
	  		callback(null, "Something weird happened");
	  	}
}