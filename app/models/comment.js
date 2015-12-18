import DS from 'ember-data';

export default DS.Model.extend({
  blog: DS.belongsTo('blog',{ async: true }),
  body: DS.attr('string'),
  created_at:DS.attr('string',{defaultValue: new Date()})
});
