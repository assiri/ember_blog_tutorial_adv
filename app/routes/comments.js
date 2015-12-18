import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";
export default Ember.Route.extend(InfinityRoute,{
  perPageParam: "limit",              // instead of "per_page"
 pageParam: "start",                  // instead of "page"
 totalPagesParam: "meta.total",    // instead of "meta.total_pages"

  model(){
    return this.infinityModel("comment", {q:true, limit: 6, start: 1 });
    //return this.store.findAll('comment');//.then(comments => comments.sortBy('created_at').reverse());
    },
    actions:{
      add(model){
      model.set('created_at',new Date(model.get('created_at')).toJSON().replace('T',' ').substring(0,19));
      model.save().then(() => this.transitionTo('comments'));
      },
      update(model){
      model.set('created_at',new Date(model.get('created_at')).toJSON().replace('T',' ').substring(0,19));
      model.save().then(() => this.transitionTo('comments'));
      },
      delete(model){
      model.destroyRecord().then(() => this.transitionTo('comments'));
      },
    }
    });
