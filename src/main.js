import { User } from './user.js';
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
    let ageMercury = newUser.getAge().getMurcury();
    let ageVenus = newUser.getAge().getVenus();
    let ageMars = newUser.getAge().getMars();
    let ageJupiter = newUser.getAge().getJupiter();

    $("#age-mercury").append(ageMercury);
    $("#age-venus").append(ageVenus);
    $("#age-mars").append(ageMars);
    $("#age-jupiter").append(ageJupiter);

    $("#initially-hidde").show();
  });
});
