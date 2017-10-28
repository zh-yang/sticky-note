var $ = require('jquery')
var Note = require('./note.js').Note;
var Toast = require('./toast.js').Toast;
var Event = require('mod/event.js');



var NoteManager = (function(){
  var uname = null
  function load() {
    $.get('/api/notes')
      .done(function(ret){
        if(ret.status == 0){
          uname = ret.data[0].uname
          $.each(ret.data, function(idx, article) {
              new Note({
                id: article.id,
                context: article.text,
                uname: article.uname
              });
          });

          Event.fire('waterfall');
        }else{
          Toast(ret.errorMsg);
        }
      })
      .fail(function(){
        Toast('网络异常');
      });


  }

  function add(){
    new Note({uname:uname});
  }

  return {
    load: load,
    add: add
  }

})();

module.exports.NoteManager = NoteManager