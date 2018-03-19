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
    let userGender = $("#input-gender").val();
    let userRace = $("#input-race").val();
    let userSmoke = $("#input-smoke").val();

    let newUser = new User(userName, userBirthday, userGender, userRace, userSmoke);

    let ageMercury = newUser.getMercury();
    let ageVenus = newUser.getVenus();
    let ageMars = newUser.getMars();
    let ageJupiter = newUser.getJupiter();

    let yrsLeftMercury = (newUser.getYearsLeft()/.24).toFixed(1);
    let yrsLeftVenus = (newUser.getYearsLeft()/.62).toFixed(1);
    let yrsLeftMars = (newUser.getYearsLeft()/1.88).toFixed(1);
    let yrsLeftJupiter = (newUser.getYearsLeft()/11.86).toFixed(1);

    let agePlanets = [ageMercury, ageVenus, ageMars, ageJupiter];
    let yrsLeftPlanets = [yrsLeftMercury, yrsLeftVenus, yrsLeftMars, yrsLeftJupiter];
    let ageSpans = ["age-mercury", "age-venus", "age-mars", "age-jupiter"];
    let yrsLeftSpans = ["yrsleft-mercury", "yrsleft-venus", "yrsleft-mars", "yrsleft-jupiter"];

    $("#user-name").text(userName);

    for(let i=0; i<4; i++)
    {
      $("#" + ageSpans[i]).text(agePlanets[i]);
      $("#" + yrsLeftSpans[i]).text(yrsLeftPlanets[i]);
    }

    $("#initially-hidden").toggle();
  });
});
