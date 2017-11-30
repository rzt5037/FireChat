(function() {
  function BlocChatCookies($cookies,$uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
        animation: false,
        backdrop: 'static',
        templateUrl: '/templates/namemodal.html',
        controller: 'ModalInstance',
        controllerAs: 'modalinstance'
      });
      modalInstance.result.then(function(username){
        $cookies.put('blocChatCurrentUser',username);
      },function(){});
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies','$uibModal', BlocChatCookies]);
})();
