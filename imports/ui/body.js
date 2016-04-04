import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  tasks: [
    { text: 'Todo task 1' },
    { text: 'Todo task 2' },
    { text: 'Todo task 3' },
    { text: 'Todo task 4' },
    { text: 'Todo task 4' }
  ]
});
