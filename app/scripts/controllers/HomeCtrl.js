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
    this.sendMessage = function(currentRoom){
      Message.send(this.messageTxt,currentRoom);
      this.messageTxt = "";
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl',['Room','Message',HomeCtrl]);
})();
