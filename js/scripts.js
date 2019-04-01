$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
 var sentence = $("input#sentence").val();
 var sentenceArrays = sentence.split(" ");
 var newAr =[];
 sentenceArrays.forEach(function(sentenceArray){
   if(sentenceArray.length>=3){
     newAr.push(sentenceArray);
   };


 });
    var reversedArray = newAr.reverse();
    var newString = reversedArray.join(" ");
    $("#result").text(newString);
    $("#result").show();

  });


});
