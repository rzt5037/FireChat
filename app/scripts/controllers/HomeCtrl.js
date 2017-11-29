(function(){
  function HomeCtrl(Room, Message){
    this.roomList = Room.all;
    this.roomClick = function(selection){
      this.activeRoom = selection;
    }
    this.messageGet = function(selection){
      Message.getByRoomId(selection);
      this.messageList = Message.msgList;
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl',['Room','Message',HomeCtrl]);
})();
