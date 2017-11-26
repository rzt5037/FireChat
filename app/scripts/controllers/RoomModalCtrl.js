(function(){
  function RoomModalCtrl(Room,$uibModal){
    this.open = function(){
      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: '/templates/roommodal.html'
      });
    }
    this.cancel = function(){
      $modalInstance.dismiss('cancel');
    }
    this.ok = function(){
      modalInstance.close();
    }
  }

  angular
    .module('blocChat')
    .controller('RoomModalCtrl',['Room','$uibModal',RoomModalCtrl]);
})();
