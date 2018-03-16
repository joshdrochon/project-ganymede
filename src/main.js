import { User } from './ganymede.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $("#user-form").submit(function(event){
    event.preventDefault();
    let userName = $("#input-name").val();
    let userBirthday = $("#input-birthday").val();

    let newDate = new Date().getTime()/1000;

    let newUser = new User(userName, userBirthday);
    let userAgeSeconds = newDate - newUser.age;
    let userAgeYears = userAgeSeconds / 31536000;
    // userAgeSeconds/60/60/24/365

  });
});
