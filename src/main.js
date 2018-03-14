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
      $('#results').text("Congrats, you wrote a haiku!");
    }
    else {
      $('#results').html(`<p>Whoops! A haiku is a poem with three lines, where the first line is 5 syllables, the second line is 7 syllables, and the third line is 5 syllables.</p><p>Your haiku had ${newHaiku.syllableCounter(lineOne)} syllables in the first line, ${newHaiku.syllableCounter(lineTwo)} syllables in the second line, and ${newHaiku.syllableCounter(lineThree)} syllables in the third line.</p><p>Try again.</p>`);
    }
  });
    $("#resetButton").click(function(){
      $("#results").text("");
    });
});
