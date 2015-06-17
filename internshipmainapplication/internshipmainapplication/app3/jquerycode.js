;(function ($, window, document, undefined) {
    var pluginName = 'bootstrapDualListbox',
    defaults = {
      bootstrap2Compatible: false,
      moveSelectedLabel: 'Move selected',
      moveAllLabel: 'Move all',
      removeSelectedLabel: 'Remove selected',
      removeAllLabel: 'Remove all',
      moveOnSelect: true,                                                               
      preserveSelectionOnMove: false,                                                   
      selectedListLabel: false,                                                          
      nonSelectedListLabel: false,                                                       
      helperSelectNamePostfix: '_helper',                                                 
      selectorMinimalHeight: 100,
     },
    
    isBuggyAndroid = /android/i.test(navigator.userAgent.toLowerCase());

  // The actual plugin constructor
  function BootstrapDualListbox(element, options) {
    this.element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  function triggerChangeEvent(dualListbox) {
    dualListbox.element.trigger('change');
  }

  function updateSelectionStates(dualListbox) {
    dualListbox.element.find('option').each(function(index, item) {
      var $item = $(item);
      if (typeof($item.data('original-index')) === 'undefined') {
        $item.data('original-index', dualListbox.elementCount++);
      }
      if (typeof($item.data('_selected')) === 'undefined') {
        $item.data('_selected', false);
      }
    });
  }

  function changeSelectionState(dualListbox, original_index, selected) {
    dualListbox.element.find('option').each(function(index, item) {
      var $item = $(item);
      if ($item.data('original-index') === original_index) {
        $item.prop('selected', selected);
      }
    });
  }

  function formatString(s, args) {
    return s.replace(/\{(\d+)\}/g, function(match, number) {
      return typeof args[number] !== 'undefined' ? args[number] : match;
    });
  }

 function refreshInfo(dualListbox) {
    if (!dualListbox.settings.infoText) {
      return;
    }

    var visible1 = dualListbox.elements.select1.find('option').length,
      visible2 = dualListbox.elements.select2.find('option').length,
      all1 = dualListbox.element.find('option').length - dualListbox.selectedElements,
      all2 = dualListbox.selectedElements,
      content = '';

    if (all1 === 0) {
      content = dualListbox.settings.infoTextEmpty;
    } else if (visible1 === all1) {
      content = formatString(dualListbox.settings.infoText, [visible1, all1]);
    } else {
      content = formatString(dualListbox.settings.infoTextFiltered, [visible1, all1]);
    }

    dualListbox.elements.info1.html(content);
    dualListbox.elements.box1.toggleClass('filtered', !(visible1 === all1 || all1 === 0));

    if (all2 === 0) {
      content = dualListbox.settings.infoTextEmpty;
    } else if (visible2 === all2) {
      content = formatString(dualListbox.settings.infoText, [visible2, all2]);
    } else {
      content = formatString(dualListbox.settings.infoTextFiltered, [visible2, all2]);
    }

    dualListbox.elements.info2.html(content);
    dualListbox.elements.box2.toggleClass('filtered', !(visible2 === all2 || all2 === 0));
  }

   $.fn[ pluginName ] = function (options) {
    var args = arguments;

     if (options === undefined || typeof options === 'object') {
      return this.each(function () {
         if (!$(this).is('select')) {
          $(this).find('select').each(function(index, item) {
            $(item).bootstrapDualListbox(options);
          });
        } else if (!$.data(this, 'plugin_' + pluginName)) {
          
          $.data(this, 'plugin_' + pluginName, new BootstrapDualListbox(this, options));
        }
      });
     } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

     var returns;

      this.each(function () {
        var instance = $.data(this, 'plugin_' + pluginName);        
        if (instance instanceof BootstrapDualListbox && typeof instance[options] === 'function') {         
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
      });
      return returns !== undefined ? returns : this;
    }

  };

})(jQuery, window, document);
