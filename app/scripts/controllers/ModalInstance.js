(function(){
  function ModalInstance($uibModalInstance){
    this.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    }
    this.ok = function(){
      $uibModalInstance.close(this.roomname);
    }
  }

  angular
    .module('blocChat')
    .controller('ModalInstance',['$uibModalInstance',ModalInstance]);
})();
