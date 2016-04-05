import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks';
import moment from 'moment';
// import 'moment/locale/cs'; // workaround for bug that prevents moment.locale from being loaded

import './body.html';
import './task.html';

Template.body.helpers({
  tasks () {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  }
});

Template.body.events({
  'submit #new-task' (event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
      text,
      createdAt: new Date()
    });

    target.text.value = '';
  }
});

Template.task.helpers({
  createdAtFormatted () {
    return moment(this.createdAt).fromNow();
  }
});

Template.task.events({
  'click .toggle-checked' () {
    Tasks.update(this._id, {
      $set: {
        checked: ! this.checked
      }
    });
  },

  'click button.delete' () {
    Tasks.remove(this._id);
  }
});
