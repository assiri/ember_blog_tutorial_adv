import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  created_at:DS.attr('string',{defaultValue: new Date()}),
  comments: DS.hasMany('comment',{ async: true })
});
