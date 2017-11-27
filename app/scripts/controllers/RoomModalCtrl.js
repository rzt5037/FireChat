(function(){
  function RoomModalCtrl(Room,$uibModal){
    this.open = function(){
      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: '/templates/roommodal.html',
        controller: 'ModalInstance',
        controllerAs: 'modalinstance'
      });
      modalInstance.result.then(function(roomname){Room.add(roomname)},function(){});
    }
  }

  angular
    .module('blocChat')
    .controller('RoomModalCtrl',['Room','$uibModal',RoomModalCtrl]);
})();
