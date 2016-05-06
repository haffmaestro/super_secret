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

  trelloData.attachEventListener(function({event, payload}) {
    if (event !== 'INITIALIZE') return;

    vm.data.checklists = _.map( payload, function(card) {
      return {
        name: card.name,
        items: getChecklistItems(card),
      };
    });

    console.log(vm.data.checklists);
  });

  function getChecklistItems(card) {
    var items = _.first(card.checklists).checkItems;

    return _.map(items, function(item) {
      return _.extend(item, { done: item.state === 'complete' });
    });
  }
}