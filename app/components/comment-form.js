import Ember from 'ember';
import DS from 'ember-data';
import ENV from "../config/environment";
export default Ember.Component.extend({
store: Ember.inject.service('store'),
errors: DS.Errors.create(),
model:null,
actions:{
  chooseBlog(mblog) {
  var blog=this.get('store').peekRecord('blog',mblog.id);
  if (blog) {
    this.set('model.blog', blog)
  } else {this.get('store').findRecord('blog',mblog.id).then( blog => this.set('model.blog', blog))}

  },
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
  },
  searchBlog(term) {
          if (Ember.isBlank(term)) { return []; }
          const url = `${ENV.host}/blogs?q=true&fields=id,title&norel=true&title.startswith=${term}`;
          return Ember.$.getJSON(url).then(json => json.blog);
   }
  },
validate(){
this.set('errors',DS.Errors.create());
if (this.get('model.blog.id')===null || this.get('model.blog.id') === undefined){
      this.get('errors').add("blog","can't be empty");
  } else if (this.get('model.created_at')==='' || this.get('model.created_at') === undefined){
      this.get('errors').add("created_at","can't be empty");
  } else if (this.get('model.body')==='' || this.get('model.body') === undefined) {
    this.get('errors').add("body","can't be empty");
  }
  return this.get('errors.isEmpty');
}
});
