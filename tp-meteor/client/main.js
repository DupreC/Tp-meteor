// Helpers
Template.animal.helpers({
      all_animals : function () {
        return animal.find();
      }
    }
);

// Events
Template.animal.events({
      'click #submit_animal' : function ( event, template ) {
          event.preventDefault();
          var $name = template.find( "#name" );
          animal.insert({name : $name.value});
      },
      'click .delete' : function ( event) {
          event.preventDefault();
          animal.remove(this._id);
      },
      'click .appendInput' : function ( event) {
          event.preventDefault();
          $('.modifAni').animate({
              opacity: 1
          }, 500, function() {});
      },
      'click #testBtn' : function ( event, template) {
          event.preventDefault();
          var $this = $(event.target);
          var idTest = $($this).prev().attr('id');
          var $nameModif = template.find("#"+idTest);
          animal.update(this._id, {name :  $nameModif.value});
          $('.modifAni').animate({
              opacity: 0
          }, 500, function() {});
      }
});