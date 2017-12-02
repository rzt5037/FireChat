(function() {
  function Message($firebaseArray,$cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot){
        Message.msgList = snapshot.val();
      });
    };

    Message.send = function(newMessage,currentRoom){
      if(newMessage && currentRoom){
        var nameCookie = $cookies.get('blocChatCurrentUser');
        messages.$add({'content': newMessage,'roomId':currentRoom,'user':nameCookie});
      }
    };

    return Message;
    }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies', Message]);
})();
