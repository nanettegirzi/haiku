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

    if (newHaiku.syllableCounter(lineOne) == 5){
      console.log("line one success");
    }
    if (newHaiku.syllableCounter(lineTwo) == 7){
      console.log("line two success");
    }
    if (newHaiku.syllableCounter(lineThree) == 5){
      console.log("line three success");
    }

    if((newHaiku.syllableCounter(lineOne) == 5) && (newHaiku.syllableCounter(lineTwo) == 7) && (newHaiku.syllableCounter(lineThree) == 5)){
      $('#results').text("Congrats, you wrote a haiku!");
    }
    else {
      $('#results').text("Whoops! A haiku is a poem with three lines, where the first line is 5 syllables, the second line is 7 syllables, and the third line is 5 syllables. Try again.");
    }

  });
});
