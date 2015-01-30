Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});


Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js guides',
   isCompleted: true
 },
 {
   id: 2,
   title: 'Take it into RoR project',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Build your best app',
   isCompleted: false
 }
];