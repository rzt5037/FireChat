(function(){
  function ModalInstance($uibModalInstance){
    this.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    }
    this.ok = function(){
      if(this.name){
        $uibModalInstance.close(this.name);
      }
    }
  }

  angular
    .module('blocChat')
    .controller('ModalInstance',['$uibModalInstance',ModalInstance]);
})();
