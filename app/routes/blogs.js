import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";
export default Ember.Route.extend(InfinityRoute,{
  perPageParam: "limit",              // instead of "per_page"
 pageParam: "start",                  // instead of "page"
 totalPagesParam: "meta.total",    // instead of "meta.total_pages"

  model(){
    return this.infinityModel("blog", {q:true, limit: 6, start: 1 });
    //  return this.store.findAll('blog');
    },
actions:{
  add(model){
  model.set('created_at',new Date(model.get('created_at')).toJSON().replace('T',' ').substring(0,19));
  model.save().then(() => this.transitionTo('blogs'));
},
  update(model){
  model.set('created_at',new Date(model.get('created_at')).toJSON().replace('T',' ').substring(0,19));
  model.save().then(() => this.transitionTo('blogs'));
},
delete(model){
model.destroyRecord().then(() => this.transitionTo('blogs'));
},
newcomment(id){
   var blog=this.store.peekRecord('blog',id);
   var mdate=new Date().toJSON().replace('T',' ').substring(0,19);
   if (blog){
    this.store.createRecord('comment',{blog:blog,created_at:mdate}).save().then(comment => this.transitionTo('comments.comment',comment.get('id')));
  } else {
    this.get('store').findRecord('blog',id).then(blog => this.store.createRecord('comment',{blog:blog,created_at:mdate}).save().then(comment => this.transitionTo('comments.comment',comment.get('id'))));
  }
  }
}
});
