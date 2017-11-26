(function(){
  function RoomModal(value,$uibModal){
    this.open = function(){
      $uibModal.open({
        templateUrl: '/templates/roommodal.html',
        size: 'lg'
      });
    }
  }

  angular
    .module('blocChat')
    .controller('RoomModal',['$uibModal',RoomModal]);
})();
