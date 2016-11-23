function DetailsController (ContactService, $stateParams) {

  let vm = this;

  vm.cont = {};

  function init () {
    ContactService.getCont($stateParams.id).then((resp) => {
      vm.cont = resp.data;
    });
  };

  init();
}

DetailsController.$inject = ['ContactService', '$stateParams'];
export { DetailsController };