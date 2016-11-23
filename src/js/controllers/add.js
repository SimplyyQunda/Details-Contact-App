function AddController ($state, ContactService) {

	let vm = this;

  	this.addContact = addContact;

  	function addContact (cont) {
    	ContactService.addContact(cont).then((resp) => {
      		$state.go('home');
    	});
  	};

};

AddController.$inject = ['$state', 'ContactService'];
export { AddController };