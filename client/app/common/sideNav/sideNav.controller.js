'use strict';
class SideNavController {
  constructor(SideNavFactory, PagesFactory) {
    'ngInject';
    this.toggleSideNav = SideNavFactory.sideNavToggler();
    this.pages = PagesFactory.pages();
    this.toggleSelectPage = (page) => {

    }
  }
}

export default SideNavController;
