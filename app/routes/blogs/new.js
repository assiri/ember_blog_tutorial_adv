import Ember from 'ember';
export default Ember.Route.extend({
model: function() {
  return this.store.createRecord('blog');
} /*, 
setupController: function(controller,model){
   controller.set('model',model);
    controller.set('names', ['Stefan', 'Miguel', 'Tomster', 'Pluto']);
 },*/
});
