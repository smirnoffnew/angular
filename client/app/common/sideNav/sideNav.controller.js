'use strict';
class SideNavController {
  constructor(SideNavFactory) {
    'ngInject';
    this.toggleSideNav = SideNavFactory.sideNavToggler();
  }
}

export default SideNavController;
