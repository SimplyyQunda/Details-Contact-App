import { SERVER } from "../server";

function ContactService ($http){

	this.allContacts = function () {
	    return $http.get(SERVER);
	  };

	  this.addContact = function (cont) {
	    return $http.post(SERVER, cont);
	  };

	  this.getCont = function (id) {
	    let url = SERVER + id;
	    return $http.get(url);
	  };

	};

ContactService.$inject = ['$http'];
export { ContactService };