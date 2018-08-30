import {ACTIVE, OPEN, DISABLED, BODY} from '../_constants';

export default (() => {

  class Tabs {

    constructor(options) {
      this.cache = {};
      this.options = options || {};
      this.init();
    }

    init() {
      this.initializeCache();
      this.initializeEvents();
      this.mobDrop();
    }

    initializeCache() {
      const {main} = this.options;
      this.cache.main = main;
      this.cache.controls = main.find('[data-tabs-control]');
      this.cache.containers = main.find('[data-tabs-container]');
      this.cache.current = main.find('[data-tabs-current]');
    }

    initializeEvents() {
      this.setActiveOnLoad();
      this.setActiveOnClick();
    }

    setActiveOnLoad() {
      const {controls, containers} = this.cache;
      for (let i = 0; i < controls.length; i++) {
        const control = $(controls[i]);
        const container = this.getTabContainer(control, containers);

        if (this.checkTabState(control, container)) {
          control.addClass(DISABLED);
          continue;
        }
        this.setActiveTab(control, container);
        break;
      }
    }

    setActiveOnClick() {
      const {controls, containers} = this.cache;
      controls.each((i, control) => {
        control = $(control);
        const container = this.getTabContainer(control, containers);

        control.on('click', e => {
          e.preventDefault();
          if (this.checkTabState(control, container)|| control.hasClass(ACTIVE)) return;
          controls.removeClass(ACTIVE);
          containers.removeClass(OPEN);
          this.setActiveTab(control, container);
        });
      });
    }

    //utils
    checkTabState(control, container) {
      return control.hasClass(DISABLED) || control.attr('disabled') || !container.length;
    }

    getTabContainer(control, containers) {
      return containers.filter(`[data-tabs-container="${control.data('tabs-control')}"]`);
    }

    setActiveTab(control, container) {
      const text = control.text();
      this.cache.main.attr('data-tabs', control.data('tabs-control'));
      this.cache.current.text(text);
      control.addClass(ACTIVE);
      container.addClass(OPEN);
    }

    mobDrop() {
      this.cache.current.on('click', () => {
        (!this.cache.main.hasClass(OPEN))
          ? this.cache.main.addClass(OPEN)
          : this.cache.main.removeClass(OPEN);
      });
      BODY.on('click touchend', e => {
        if ($(e.target).closest(this.cache.main).length || !this.cache.main.hasClass(OPEN)) return;
        this.cache.main.removeClass(OPEN);
      });
    }

  };
  const container = $('[data-tabs]');
  container.each((i, main) => new Tabs({ main: $(main) }) );

})();

//  ---------------- HTML FOR EXEMPLE ---------------

// <div data-tabs>
//   <ul>
//     <li class="is-active" data-tabs-control="tab-1">
//       TEXT
//     </li>
//     <li data-tabs-control="tab-2">
//       TEXT
//     </li>
//   </ul>
//   <div data-tabs-wrapper>
//     <div class="is-open" data-tabs-container="tab-1">
//       CONTENT
//     </div>
//     <div data-tabs-container="tab-2">
//       CONTENT
//     </div>
//   </div>
// </div>
