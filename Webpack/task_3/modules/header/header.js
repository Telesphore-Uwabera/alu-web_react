import $ from 'jquery';
import './header.css';

console.log('Init header');
$(document).ready(function() {
  $('header').html('<img src="assets/holberton-logo.jpg" alt="Holberton logo"><h1>Holberton Dashboard</h1>');
});
