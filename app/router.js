import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});
Router.map(function() {
  this.route('blogs', function() {
    this.route('blog', {path: '/:blog_id'});
    this.route('new');
  });
  this.route('comments', function() {
    this.route('comment', {path: '/:comment_id'});
    this.route('new');
  });

});
export default Router;
