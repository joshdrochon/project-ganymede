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

    let newUser = new User(userName, userBirthday);
    let ageMercury = newUser.getMercury();
    let ageVenus = newUser.getVenus();
    let ageMars = newUser.getMars();
    let ageJupiter = newUser.getJupiter();

    $("#user-name").text(userName);
    $("#age-mercury").text(ageMercury);
    $("#age-venus").text(ageVenus);
    $("#age-mars").text(ageMars);
    $("#age-jupiter").text(ageJupiter);

    $("#initially-hidden").show();
  });
});
