import $ from 'jquery';
import {haikuChecker} from './haiku-checker';
import {syllableCounter} from './syllableCounter';
import {generateLine} from './generateLine';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $('#checker-form').submit(function(event){
    event.preventDefault();
    let lineOne = $("#lineOne").val();
    let lineTwo = $("#lineTwo").val();
    let lineThree = $("#lineThree").val();
    let checkHaiku = new haikuChecker(lineOne, lineTwo, lineThree);


    if((syllableCounter(checkHaiku.lineOne) == 5) && (syllableCounter(checkHaiku.lineTwo) == 7) && (syllableCounter(checkHaiku.lineThree) == 5)){
      $('#check-haiku').text("Congrats, you wrote a haiku!");
    }

    else {
      $('#check-haiku').html(`<p>Whoops! A haiku is a poem with three lines, where the first line is 5 syllables, the second line is 7 syllables, and the third line is 5 syllables.</p><p>Your haiku had ${syllableCounter(checkHaiku.lineOne)} syllables in the first line, ${syllableCounter(checkHaiku.lineTwo)} syllables in the second line, and ${syllableCounter(checkHaiku.lineThree)} syllables in the third line.</p><p>Try again.</p>`);
    }
  });
    $("#resetButton").click(function(){
      $("#check-haiku").text("");
    });

    $("#make-haiku").click(function(){
      let lineOne = generateLine(5);
      let lineTwo = generateLine(7);
      let lineThree = generateLine(5);
      $('#display-haiku').show();
      $('#display-haiku').html(`<p>${lineOne}</p><p>${lineTwo}</p><p>${lineThree}</p>`);
    });

});
