angular.module('onboarding')
  .directive('robTimeline', robTimeline);

Controller.$inject = ['trelloData'];

function robTimeline() {
  return {
    templateUrl: 'views/main/timeline.template.html',
    scope: {},
    controllerAs: 'vm',
    controller: Controller,
    bindToController: true,
  };
}

function Controller(trelloData) {
  var vm = this;

  vm.data = {
    checklists: null,
  };

  vm.onItemChecked = _.debounce(_onItemChecked, 250);

  trelloData.attachEventListener(function({event, payload}) {
    if (event !== 'INITIALIZE') return;

    vm.data.checklists = _.map( payload, function(card) {
      var checklist = _.first(card.checklists);

      return {
        name: card.name,
        id: checklist.id,
        items: decorateChecklistItems(checklist.checkItems),
      };
    });
  });

  function decorateChecklistItems(items) {
    return _.map(items, function(item) {
      return _.extend(item, { done: item.state === 'complete' });
    });
  }

  function _onItemChecked(checklistId, item) {
    item.state = item.done ? 'complete' : 'incomplete';
    trelloData.updateChecklistItem(checklistId, item);
  }
}