// template, editor
var tmpl = $.summernote.renderer.getTemplate();
var editor = $.summernote.eventHandler.getEditor();

// add hello plugin 
$.summernote.addPlugin({
  // plugin's name
  name: 'hello',

  init : function(layoutInfo) { // run init method when summernote was initialized
    // layoutInfo.holder() is current summernote's jquery instance.
    var $note = layoutInfo.holder();

    // you can use jquery custom event.
    $note.on('summernote.update', function(customEvent, nativeEvent) {
       var $boldButton = $(this).summernote('toolbar.get', 'bold');
       $boldButton.toggleClass('active').css({
         color : 'red'
       });
    });

    $note.on('summernote.blur', function(customEvent, nativeEvent) {
      var $boldButton = $(this).summernote('toolbar.get', 'bold');
      $boldButton.removeClass('active').css({
        color : 'inherit'
      });
    });          
    $note.summernote('insertText', 'plugin start.');
  },
          
  buttons: { // define button that be added in the toolbar
    // "hello" button (key is a button's name)
    hello: function () {
          
      // create button template 
      return tmpl.iconButton('fa fa-header', {
        // set event's name to used as callback when this button is clicked
        // add data-event='hello' in button element
        event : 'hello',
        title: 'hello',
        hide: true
      });
    }
  },

  events: { // events
    // run callback when hello button is clicked
    hello: function (event, editor, layoutInfo, value) {
      // Get current editable node
      var $editable = layoutInfo.editable();

      // Call insertText with 'hello'
      editor.insertText($editable, 'hello ');
          
      // or 
      layoutInfo.holder().summernote("insertText", "Hello");
    }
  }
});