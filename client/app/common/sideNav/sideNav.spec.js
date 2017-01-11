import SideNavModule from './sideNav'
import SideNavController from './sideNav.controller';
import SideNavComponent from './sideNav.component';
import SideNavTemplate from './sideNav.html';

describe('SideNav', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SideNavModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SideNavController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SideNavTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SideNavComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SideNavTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SideNavController);
      });
  });
});
