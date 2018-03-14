import $ from 'jquery';
import {haikuChecker} from './haiku-checker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $('#checker-form').submit(function(event){
    event.preventDefault();
    let lineOne = $("#lineOne").val();
    let lineTwo = $("#lineTwo").val();
    let lineThree = $("#lineThree").val();
    let newHaiku = new haikuChecker(lineOne, lineTwo, lineThree);

    if((newHaiku.syllableCounter(lineOne) == 5) && (newHaiku.syllableCounter(lineTwo) == 7) && (newHaiku.syllableCounter(lineThree) == 5)){
      console.log("we did it");
    }
    else {
      console.log("whoops");
    }

  });
});
