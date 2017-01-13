import template from './startContent.html';
import controller from './startContent.controller';
import './startContent.scss';

let startContentComponent = {
  restrict: 'E',
  bindings: {},
  controllerAs: 'vm',
  template,
  controller
};

export default startContentComponent;
