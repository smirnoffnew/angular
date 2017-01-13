'use strict';
class SideNavController {
  constructor(SideNavFactory, PagesFactory, $state) {
    'ngInject';
    this.toggleSideNav = SideNavFactory.sideNavToggler();
    this.pages = PagesFactory.pages();
  }
}

export default SideNavController;
