import Ember from 'ember';
import DS from 'ember-data';
export default Ember.Component.extend({
model:null,
actions:{
  add (model){
    if (this.validate()){
    this.sendAction('add',model);
  }
  },
  delete (model){
    this.sendAction('delete',model);
  },
  update (model){
    if (this.validate()){
    this.sendAction('update',model);
  }
  }
  },
validate(){
  this.set('errors',DS.Errors.create());
  if (this.get('model.title')==='' || this.get('model.title') === undefined) {
    this.get('errors').add("title","can't be empty");
  }else if (this.get('model.created_at')==='' || this.get('model.created_at') === undefined){
      this.get('errors').add("created_at","can't be empty");
  } else if (this.get('model.body')==='' || this.get('model.body') === undefined){
      this.get('errors').add("body","can't be empty");
  }
  return this.get('errors.isEmpty');
}
});
