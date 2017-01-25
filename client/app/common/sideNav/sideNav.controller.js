class SideNavController {
  constructor(SideNavFactory, PagesFactory) {
    'ngInject';
    this.toggleSideNav = SideNavFactory.sideNavToggler();
    this.pages = PagesFactory.pages();
  }
}

export default SideNavController;
