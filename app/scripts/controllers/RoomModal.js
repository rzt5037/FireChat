(function(){
  function RoomModal(Room,value,$uibModal){
    this.open = function(){
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/templates/RoomModal.html',
        controller: 'RoomModal.js',
        controllerAs: 'roommodal',
        size: 'lg',
        appendTo: body
      });
    }
  }

  angular
    .module('blocChat')
    .controller('RoomModal',['Room','$uibModal',RoomModal]);
})();
