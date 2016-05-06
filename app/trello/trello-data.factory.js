(function() {
  'use strict';

  angular
  .module('onboarding.trello')
  .factory('trelloData', trelloData);

  trelloData.$inject = ['$q'];

  /* @ngInject */
  function trelloData($q) {

    var service = {
      attachEventListener: attachEventListener,
      updateChecklistItem: updateChecklistItem,
      getCards: () => _cards,
      getChecklists: getChecklists,
      getUser: getUser
    }

    window.trelloData = service;

    var memberId;
    var _member;
    var _onboardingTemplate;
    var _cards;
    var _eventListeners = [];

    var onboardingBoard = /Rise Onboarding Template/i;

    /**
     * Initializes this service with the correct data
     * @return {Promise} [description]
     */
    function initialize(){
      var initializePromise = $q.defer();

      authorize().then(()=>{

        issueEvent('AUTHORIZE',_member);

        findOnboardingBoard()
        .then((boardCandidate)=>{
          _onboardingTemplate = boardCandidate;

          getCards(boardCandidate.id)
          .then((cards)=>{
            $q.all(cards.map(attachChecklists))
            .then((cards)=>{
              issueEvent('INITIALIZE', cards);
              initializePromise.resolve(cards);
            })
          })

        })
      });

      return initializePromise.promise;
    }

    /**
     * How you listen to the providers events;
     * 
     * @param  {Function} func callback you want executed;
     */
    function attachEventListener(func){
      _eventListeners.push(func);
    }

    /**
     * Used by the provider to send events and data
     * to the listeners
     * 
     * @param  {String} event   
     * @param  {Object} payload 
     */
    function issueEvent(event, payload){
      _eventListeners.forEach((func)=>{
        func({event, payload});
      })
    }

    /**
     * Authorizes the user on the site with Trello
     * Gets their user from the API
     * 
     * @return {Promise} Promise resolves to the users id;
     */
    function authorize(){
      var authPromise = $q.defer()

      Trello.setKey("8e53f052069c7cce68c8bf87fb57491e");
      Trello.authorize({
        type: 'popup',
        name: 'Rise Onboarding',
        interactive: !hasTrelloToken(),
        scope: { read: true, write: true, account: true },
        success: function(response){
          getLoggedinUser().then(function(response){
            authPromise.resolve(response);
          })
        },
        error: function(error){
          authPromise.reject(error);
        }
      })

      function hasTrelloToken(){
        return !!localStorage.trello_token
      }

      return authPromise.promise;
    }

    /**
     * Gets the user object from Trello's servers
     * @return {Promise} resolves to the user
     */
    function getLoggedinUser(){
      return Trello.get('member/me').then((response) => {
        _member = response;
        return response;
      })
    }

    
    /**
     * Finds the onboarding board based on a regex
     * @return {Object} 
     */
    function findOnboardingBoard(){
      return getBoards(_member).then((arrayOfBoards)=>{
        return arrayOfBoards
        .filter(function(board){
          return onboardingBoard.test(board.name);
        })[0];
      })
    }
    
    /**
     * Gets all boards for the given member
     * @param  {Object} member 
     * @return {Promise}        
     */
    function getBoards(member){
      return $q.all(member.idBoards.map(getBoard));
    }

    function getBoard(boardId){
      return Trello.boards.get(boardId);
    }

    function getCards(boardId){
      return Trello.boards
      .get(boardId+"/cards")
      .then((cards)=>{
        _cards = cards;
        return cards;
      });
    }

    function attachChecklists(card){
      return $q.all(card.idChecklists
        .map(getChecklist))
        .then((arrayOfChecklists)=>{
          card.checklists = arrayOfChecklists;
          return card;
      })
    }

    function getChecklist(checklistId){
      return Trello.checklists.get(checklistId);
    }

    function getChecklists(){
      return _cards.reduce((memo, card)=>{
        return memo.concat(card.checklists);
      }, [])
    }

    function getUser(){
      return _member;
    }

    /**
     * This will delete the item on the trello API
     * corresponding to the checkitem.id
     * 
     * and recreate one with the checkitem.name
     * and the checked status will be the checkitem status
     * 
     * @param  {String} checklistId 
     * @param  {Object} checkitem   
     * @return {Promise}            Resolves to the new item
     */
    function updateChecklistItem(checklistId, checkitem){
      var updatePromise = $q.defer();

      var newCheckitem = {
        name: checkitem.name,
        checked: getStatusBoolean(checkitem.status)
      };

      Trello.del(`/checklists/${checklistId}/checkitems/${checkitem.id}`)
        .then((response)=>{

          Trello.post(`/checklists/${checklistId}/checkitems`, newCheckitem)
            .then((response)=>{
              updatePromise.resolve(response);
            })

        })
       
      return updatePromise;
    }

    function getStatusBoolean(status){
      return status === "complete" ? true : false;
    }

    initialize();

    return service;
  }
})();