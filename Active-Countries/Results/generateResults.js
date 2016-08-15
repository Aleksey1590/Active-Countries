
module.exports = Stats;
var _ = require('underscore');
//var sortFile = require('./sort.js');
var fs = require('fs');

var updateCounter = 1; 


function Stats(){
	//JSON object
	
	//Each object contains a country and necessary attributes that will contain values

	//Used as a central storage for all data that we are operating with in online mode
	
	//All counters are set to 0
	
	//When script is started - counters will be modified
	this.countryList = 
		[
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Afghanistan",
		    "code": "AF"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Åland Islands",
		    "code": "AX"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Albania",
		    "code": "AL"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Algeria",
		    "code": "DZ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "American Samoa",
		    "code": "AS"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "AndorrA",
		    "code": "AD"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Angola",
		    "code": "AO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Anguilla",
		    "code": "AI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Antarctica",
		    "code": "AQ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Antigua and Barbuda",
		    "code": "AG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Argentina",
		    "code": "AR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Armenia",
		    "code": "AM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Aruba",
		    "code": "AW"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Australia",
		    "code": "AU"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Austria",
		    "code": "AT"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Azerbaijan",
		    "code": "AZ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Bahamas",
		    "code": "BS"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Bahrain",
		    "code": "BH"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Bangladesh",
		    "code": "BD"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Barbados",
		    "code": "BB"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Belarus",
		    "code": "BY"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Belgium",
		    "code": "BE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Belize",
		    "code": "BZ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Benin",
		    "code": "BJ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Bermuda",
		    "code": "BM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Bhutan",
		    "code": "BT"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Bolivia",
		    "code": "BO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Bosnia and Herzegovina",
		    "code": "BA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Botswana",
		    "code": "BW"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Bouvet Island",
		    "code": "BV"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Brazil",
		    "code": "BR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "British Indian Ocean Territory",
		    "code": "IO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Brunei Darussalam",
		    "code": "BN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Bulgaria",
		    "code": "BG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Burkina Faso",
		    "code": "BF"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Burundi",
		    "code": "BI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Cambodia",
		    "code": "KH"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Cameroon",
		    "code": "CM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Canada",
		    "code": "CA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Cape Verde",
		    "code": "CV"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Cayman Islands",
		    "code": "KY"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Central African Republic",
		    "code": "CF"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Chad",
		    "code": "TD"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Chile",
		    "code": "CL"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "China",
		    "code": "CN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Christmas Island",
		    "code": "CX"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Cocos (Keeling) Islands",
		    "code": "CC"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Colombia",
		    "code": "CO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Comoros",
		    "code": "KM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Congo",
		    "code": "CG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Congo, The Democratic Republic of the",
		    "code": "CD"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Cook Islands",
		    "code": "CK"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Costa Rica",
		    "code": "CR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Cote D'Ivoire",
		    "code": "CI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Croatia",
		    "code": "HR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Cuba",
		    "code": "CU"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Cyprus",
		    "code": "CY"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Czech Republic",
		    "code": "CZ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Denmark",
		    "code": "DK"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Djibouti",
		    "code": "DJ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Dominica",
		    "code": "DM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Dominican Republic",
		    "code": "DO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Ecuador",
		    "code": "EC"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Egypt",
		    "code": "EG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "El Salvador",
		    "code": "SV"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Equatorial Guinea",
		    "code": "GQ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Eritrea",
		    "code": "ER"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Estonia",
		    "code": "EE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Ethiopia",
		    "code": "ET"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Falkland Islands (Malvinas)",
		    "code": "FK"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Faroe Islands",
		    "code": "FO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Fiji",
		    "code": "FJ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Finland",
		    "code": "FI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "France",
		    "code": "FR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "French Guiana",
		    "code": "GF"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "French Polynesia",
		    "code": "PF"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "French Southern Territories",
		    "code": "TF"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Gabon",
		    "code": "GA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Gambia",
		    "code": "GM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Georgia",
		    "code": "GE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Germany",
		    "code": "DE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Ghana",
		    "code": "GH"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Gibraltar",
		    "code": "GI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Greece",
		    "code": "GR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Greenland",
		    "code": "GL"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Grenada",
		    "code": "GD"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Guadeloupe",
		    "code": "GP"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Guam",
		    "code": "GU"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Guatemala",
		    "code": "GT"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Guernsey",
		    "code": "GG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Guinea",
		    "code": "GN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Guinea-Bissau",
		    "code": "GW"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Guyana",
		    "code": "GY"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Haiti",
		    "code": "HT"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Heard Island and Mcdonald Islands",
		    "code": "HM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Holy See (Vatican City State)",
		    "code": "VA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Honduras",
		    "code": "HN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Hong Kong",
		    "code": "HK"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Hungary",
		    "code": "HU"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Iceland",
		    "code": "IS"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "India",
		    "code": "IN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Indonesia",
		    "code": "ID"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Iran, Islamic Republic Of",
		    "code": "IR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Iraq",
		    "code": "IQ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Ireland",
		    "code": "IE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Isle of Man",
		    "code": "IM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Israel",
		    "code": "IL"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Italy",
		    "code": "IT"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Jamaica",
		    "code": "JM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Japan",
		    "code": "JP"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Jersey",
		    "code": "JE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Jordan",
		    "code": "JO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Kazakhstan",
		    "code": "KZ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Kenya",
		    "code": "KE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Kiribati",
		    "code": "KI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Korea, Democratic People'S Republic of",
		    "code": "KP"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "South Korea",
		    "code": "KR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Kuwait",
		    "code": "KW"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Kyrgyzstan",
		    "code": "KG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Lao People'S Democratic Republic",
		    "code": "LA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Latvia",
		    "code": "LV"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Lebanon",
		    "code": "LB"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Lesotho",
		    "code": "LS"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Liberia",
		    "code": "LR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Libyan Arab Jamahiriya",
		    "code": "LY"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Liechtenstein",
		    "code": "LI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Lithuania",
		    "code": "LT"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Luxembourg",
		    "code": "LU"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Macao",
		    "code": "MO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Macedonia, The Former Yugoslav Republic of",
		    "code": "MK"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Madagascar",
		    "code": "MG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Malawi",
		    "code": "MW"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Malaysia",
		    "code": "MY"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Maldives",
		    "code": "MV"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Mali",
		    "code": "ML"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Malta",
		    "code": "MT"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Marshall Islands",
		    "code": "MH"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Martinique",
		    "code": "MQ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Mauritania",
		    "code": "MR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Mauritius",
		    "code": "MU"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Mayotte",
		    "code": "YT"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Mexico",
		    "code": "MX"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Micronesia, Federated States of",
		    "code": "FM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Moldova, Republic of",
		    "code": "MD"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Monaco",
		    "code": "MC"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Mongolia",
		    "code": "MN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Montserrat",
		    "code": "MS"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Morocco",
		    "code": "MA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Mozambique",
		    "code": "MZ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Myanmar",
		    "code": "MM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Namibia",
		    "code": "NA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Nauru",
		    "code": "NR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Nepal",
		    "code": "NP"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Netherlands",
		    "code": "NL"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Netherlands Antilles",
		    "code": "AN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "New Caledonia",
		    "code": "NC"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "New Zealand",
		    "code": "NZ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Nicaragua",
		    "code": "NI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Niger",
		    "code": "NE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Nigeria",
		    "code": "NG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Niue",
		    "code": "NU"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Norfolk Island",
		    "code": "NF"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Northern Mariana Islands",
		    "code": "MP"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Norway",
		    "code": "NO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Oman",
		    "code": "OM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Pakistan",
		    "code": "PK"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Palau",
		    "code": "PW"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Palestinian Territory, Occupied",
		    "code": "PS"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Panama",
		    "code": "PA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Papua New Guinea",
		    "code": "PG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Paraguay",
		    "code": "PY"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Peru",
		    "code": "PE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Philippines",
		    "code": "PH"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Pitcairn",
		    "code": "PN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Poland",
		    "code": "PL"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Portugal",
		    "code": "PT"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Puerto Rico",
		    "code": "PR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Qatar",
		    "code": "QA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Reunion",
		    "code": "RE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Romania",
		    "code": "RO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Russian Federation",
		    "code": "RU"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "RWANDA",
		    "code": "RW"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Saint Helena",
		    "code": "SH"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Saint Kitts and Nevis",
		    "code": "KN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Saint Lucia",
		    "code": "LC"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Saint Pierre and Miquelon",
		    "code": "PM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Saint Vincent and the Grenadines",
		    "code": "VC"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Samoa",
		    "code": "WS"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "San Marino",
		    "code": "SM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Sao Tome and Principe",
		    "code": "ST"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Saudi Arabia",
		    "code": "SA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Senegal",
		    "code": "SN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Serbia and Montenegro",
		    "code": "CS"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Seychelles",
		    "code": "SC"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Sierra Leone",
		    "code": "SL"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Singapore",
		    "code": "SG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Slovakia",
		    "code": "SK"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Slovenia",
		    "code": "SI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Solomon Islands",
		    "code": "SB"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Somalia",
		    "code": "SO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "South Africa",
		    "code": "ZA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "South Georgia and the South Sandwich Islands",
		    "code": "GS"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Spain",
		    "code": "ES"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Sri Lanka",
		    "code": "LK"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Sudan",
		    "code": "SD"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Suriname",
		    "code": "SR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Svalbard and Jan Mayen",
		    "code": "SJ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Swaziland",
		    "code": "SZ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Sweden",
		    "code": "SE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Switzerland",
		    "code": "CH"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Syrian Arab Republic",
		    "code": "SY"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Taiwan, Province of China",
		    "code": "TW"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Tajikistan",
		    "code": "TJ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Tanzania, United Republic of",
		    "code": "TZ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Thailand",
		    "code": "TH"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Timor-Leste",
		    "code": "TL"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Togo",
		    "code": "TG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Tokelau",
		    "code": "TK"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Tonga",
		    "code": "TO"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Trinidad and Tobago",
		    "code": "TT"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Tunisia",
		    "code": "TN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Turkey",
		    "code": "TR"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Turkmenistan",
		    "code": "TM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Turks and Caicos Islands",
		    "code": "TC"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Tuvalu",
		    "code": "TV"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Uganda",
		    "code": "UG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Ukraine",
		    "code": "UA"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "United Arab Emirates",
		    "code": "AE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "United Kingdom",
		    "code": "GB"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "United States",
		    "code": "US"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "United States Minor Outlying Islands",
		    "code": "UM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Uruguay",
		    "code": "UY"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Uzbekistan",
		    "code": "UZ"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Vanuatu",
		    "code": "VU"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Venezuela",
		    "code": "VE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Viet Nam",
		    "code": "VN"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Virgin Islands, British",
		    "code": "VG"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Virgin Islands, U.S.",
		    "code": "VI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Wallis and Futuna",
		    "code": "WF"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Western Sahara",
		    "code": "EH"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Yemen",
		    "code": "YE"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Zambia",
		    "code": "ZM"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": "Zimbabwe",
		    "code": "ZW"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 1,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 1,
		    "name": "BlockChain.info",
		    "code": "BCI"
		  },
		  {
		    "counter": 0,
		    "share": 0,
		    "populationSize": 1,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 2,
		    "name": "Country Unknown or broken TX",
		    "code": "Unknown"
		  }
		];
}



//Prototype functions that are applied to the countryList attributes
Stats.prototype= {
	constructor: Stats,
	
	//Create a new entity in countryList with set "country"
	//Mainly used for debugging 
	createItem: function (country) {
		return {
			"counter": 0,
		    "populationSize": 0,
		    "relativeRating": 0,
		    "absoluteRating": 0,
		    "id": 0,
		    "name": country
		};
	},
	//Increment counters for a given country
	//Update population for a given country
	updateResults: function (country, popSize){
		//Catch if a faulty country or popSize has been passed
		if (country==null || country==undefined ||popSize==null||popSize==undefined){}
		
		//Update BlockChain counters
		//Need to handle individually, without updating its popSize
		else if (country=="BlockChain" && popSize===1){
			var bci = this.countryList.find(function(item){
				return item.code === "BCI";
			})
			bci.counter++;
			bci.absoluteRating++;
			updateCounter++;
			bci.relativeRating = (bci.counter)/(updateCounter);
		}

		//Catch if non-identified country has been passed
		else if (country=="Unknown" && popSize===1){
			var xCountry = this.countryList.find(function(item){
				return item.code === "Unknown";
			})
			xCountry.counter++;
		}

		//All valid countries will invoke this section
		//All data has been correctly handled and passed - update its corresponding counters
		else{
			try {

				//Find and access a country
				var target = this.countryList.find(function(item){
					return item.name === country;
				})
				//Increment all counters
				target.counter++;
				target.absoluteRating++;
				updateCounter++;
				target.populationSize = popSize;
				target.relativeRating = (target.counter)/(target.populationSize/1000000);	
			} catch (e) {
				//Catch bugs when updating counters
				console.log("Couldn't update target country " + country);
				console.log(e);
			}
		}
	}, 

	//Show counters for USA
	showUS: function (){
		var USA = this.countryList.find(function(item){
			return item.name === "United States";
		})
		console.log(USA);

	},

	//Show counters for BlockChain.info
	showBCI: function(){
		var bci = this.countryList.find(function(item){
			return item.code === "BCI";
		})
		console.log(bci);
	},

	//Show top 5 countries with highest Absolute rating (absoluteRating)
	showTopAbsolute: function(){
		
		console.log(" ");
		console.log("Absolute results: ");

		var list = this.countryList;
		var ascList = _.sortBy(list, 'counter');
		var descList = ascList.reverse();
		
		for (let i =0; i<6; i++){
			console.log(descList[i]);
		}
	},

	//Show top 5 countries with highest Relative rating (relativeRating)
	showTopRelative: function(){
		console.log(" ");
		console.log("Relative results: ");

		var list = this.countryList;
		var ascList = _.sortBy(list, 'relativeRating');
		var descList = ascList.reverse();
		
		for (let i =0; i<6; i++){
			console.log(descList[i]);
		}

	},

	//Show entire countryList in ascending order by their absoluteRating attribute
	getAbsoluteData: function() {
		var list = this.countryList;
		var ascList = _.sortBy(list, 'absoluteRating');
		var descList = ascList.reverse();
		return descList;
	},

	//Show entire countryList in ascending order by their relativeRating attribute
	getRelativeData: function() {
		var list = this.countryList;
		var ascList = _.sortBy(list, 'relativeRating');
		var descList = ascList.reverse();
		return descList;
	},

	//Show entire countryList in ascending order by their share attribute
	getShare: function(total){
		var list = this.countryList;
		
		for (var k in list){
			list[k]['share'] = ((list[k]['counter'])/(total))*100;
		}

		var ascList = _.sortBy(list, 'share');
		var descList = ascList.reverse();

		return descList;
	},


	//Show TOP 5 countries in ascending order by their share attribute
	getTopShare: function(total){
		var list = this.countryList;
		
		for (var k in list){
			list[k]['share'] = ((list[k]['counter'])/(total))*100;
		}

		var ascList = _.sortBy(list, 'share');
		var descList = ascList.reverse();
		var topList = descList.slice(0,5);

		return topList;
	}
	
	
}