(function ($) {
  Drupal.behaviors.editable_ui = {
    attach: function(context, settings) {
      Drupal.editableFields.eventListener();
    },
    detach: function(context, settings) {

    }
  };

  Drupal.editableFields = new Object;

  /**
   * Detect user changes inside editable field.
   */
  Drupal.editableFields.eventListener = function() {
    $('body').bind('focus', '[contenteditable]', function() {
      var $this = $(this);
       var initial = $this.data('before', $this.html());
    }).bind('blur input keyup', '[contenteditable]', function() {
      var $this = $(this);
      if ($this.data('before') !== $this.html()) {
        $('.editable-save-button').removeAttr('disabled');
        $('.inline-edit-form-wrapper').show();
      }
    });
  };
})(jQuery);
