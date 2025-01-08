import $ from 'jquery';
import _ from 'lodash';
import './body.css';

console.log('Init body');
$(document).ready(function() {
  $('body').html('<button id="counter">Click me</button><p>Click count: 0</p>');

  let count = 0;
  $('#counter').click(() => {
    count++;
    $('p').text(`Click count: ${count}`);
  });
});
