(function(){
  function RoomModal(value,'$uibModal'){
    this.open = function(){
      $uibModal.open();
    }
  }

  angular
    .module('blocChat')
    .controller('RoomModal',['$uibModal',RoomModal]);
})();
