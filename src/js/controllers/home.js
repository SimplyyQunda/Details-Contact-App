function HomeController($state, ContactService) {
	
	let vm = this;

	vm.cont = [];

	function init () {
    ContactService.allContacts().then((resp) => {
      vm.cont = resp.data;
      console.log(vm.cont)
    });
  };

  init();
};

HomeController.$inject = ['$state','ContactService'];
export { HomeController };