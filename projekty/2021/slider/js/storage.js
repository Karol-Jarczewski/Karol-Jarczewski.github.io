(function (Comp) {
  Comp.fn.storage = function(options) {

    if (this.length === 0) {
      return this;
    }

    var Options = function() {
      if (options) {
        for (var properties in options) {
          this[properties] = options[properties];
        }
      }
    };

    Options.prototype = {
      name : "compsoul",
      value : "active",
      element : false,
      event : false,
      change : "hidden"
    };

    var self = new Comp(this),
    settings = new Options();

    if(!localStorage.getItem(settings.name)) {
      localStorage.setItem(settings.name, settings.value);
    }

    if(localStorage.getItem(settings.name)) {
      self.addClass(localStorage.getItem(settings.name));
    }

    if(settings.name && settings.event) {
      Comp(settings.element).on(settings.event, function() {
        self.removeClass(settings.value).addClass(settings.change + "-" + settings.event);
        localStorage.setItem(settings.name, settings.change);
      });
    }

  };
})(Comp);
