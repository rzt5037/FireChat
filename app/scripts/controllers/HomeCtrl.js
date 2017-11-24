(function(){
  function HomeCtrl(Room){
    this.roomList = Room.all;
    console.log(typeof this.roomList);
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl',['Room',HomeCtrl]);
})();
