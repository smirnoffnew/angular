class SigninController {
  constructor(AuthenticationService, $mdDialog) {
    'ngInject';
    this.submitLoginForm = () => {
      AuthenticationService.login(this.login, this.password, function(response) {
        console.log(response.success);
        if(!response.success) {
          $mdDialog.show({
            template:
              '<md-dialog aria-label="List dialog" >' +
              '  <md-dialog-content layout="row" layout-align="center center" style="padding-left: 8px; padding-right: 8px;">'+
              '    <h2>' + response.message + '</h2>' +
              '  </md-dialog-content>' +
              '  <md-dialog-actions layout="column" style="padding-left: 8px;">' +
              '    <md-button ng-click="closeDialog()" class="md-primary" style="margin-right: 8px;">' +
              '      OK' +
              '    </md-button>' +
              '  </md-dialog-actions>' +
              '</md-dialog>',
              controller: function DialogController($scope, $mdDialog) {
                $scope.closeDialog = function() {
                  $mdDialog.hide();
                }
              }
          });
        };
      });
    }
  }
}

export default SigninController;
