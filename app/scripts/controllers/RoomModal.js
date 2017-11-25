(function(){
  function RoomModal(){
    Room.add();
  }

  angular
    .module('blocChat')
    .controller('RoomModal',[RoomModal]);
})();
