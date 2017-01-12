import StartContentModule from './startContent'
import StartContentController from './startContent.controller';
import StartContentComponent from './startContent.component';
import StartContentTemplate from './startContent.html';

describe('StartContent', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StartContentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StartContentController();
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
      expect(StartContentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StartContentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StartContentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StartContentController);
      });
  });
});
