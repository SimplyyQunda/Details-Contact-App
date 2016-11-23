function HomeController($state, ContactService) {
	
	let vm = this;

	vm.cont = [];

	function init () {
    ContactService.allContacts().then((resp) => {
      vm.cont = resp.data;
    });
  };

  init();
};

HomeController.$inject = ['ContactService'];
export { HomeController };