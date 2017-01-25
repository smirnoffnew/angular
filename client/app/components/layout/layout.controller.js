class LayoutController {
  constructor($mdBottomSheet, $mdDialog) {
    'ngInject';

    this.date = new Date();
    this.name = 'layout';
    this.openBottomSheet = function() {
      console.log('openBottomSheet');
      $mdBottomSheet.show({
        template: '<md-bottom-sheet>Pizdec!</md-bottom-sheet>'
      });
    };

    this.status = '  ';
    this.customFullscreen = false;
    this.showAlert = function(ev) {
      $mdDialog.show(
          $mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title('This is an alert title')
              .textContent('You can specify some description text in here.')
              .ariaLabel('Alert Dialog Demo')
              .ok('Got it!')
              .targetEvent(ev)
      );
    };

    this.isOpen = false;

    this.demo = {
      isOpen: false,
      count: 0,
      selectedDirection: 'left'
    };



  }
}

export default LayoutController;
