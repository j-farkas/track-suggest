$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var arr=[0,0,0,0];
    //6 questions, 6 loop iterations
    for (i = 1; i <= 6; i++) {
      arr[parseInt($("#ans" + (i)).val()-1)] +=1;
    }
    $("#formOne").toggle();
    $("button.hidden").show();
    $(".result").show();
    console.log(arr);

    if(arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3]){
      //C# is highest
      $(".result").text("you should study C#");
      $(".c").toggle();
      $("body").addClass("purple");
    }else if(arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3]){
      //Java is highest
      $(".result").text("you should study Java");
      $(".java").toggle();
      $("body").addClass("white");
    }else if(arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3]){
      //PHP is highest
      $(".result").text("you should study PHP");
      $(".php").toggle();
      $("body").addClass("blue");
    }else if(arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2]){
      //Ruby is highest
      $(".result").text("you should study Ruby");
      $(".ruby").toggle();
      $("body").addClass("red");
    }else{
      //Tie
      //check which values are highest
      $(".tie").toggle();
      var high = 0;
      for(var j=0;j<arr.length;j++)
      {
        if (parseInt(arr[j]) >= high){
          high = arr[j];
        }
      }
      $(".result").text("you're too indecisive, take the quiz again!");
      //add all ties to result string.
      for(j=0;j<arr.length;j++)
      {
        if (parseInt(arr[j]) === high){
          switch(j){
          case 0:
          $(".tie p").append("CSS<br>");
            break;
          case 1:
          $(".tie p").append("Java<br>");
            break;
          case 2:
          $(".tie p").append("PHP<br>");
            break;
          default:
          $(".tie p").append("Ruby<br>");
            break;
          }
        }
      }
    }
    console.log($("#name").val());
    $(".result").prepend($("#name").val() + ", ");
    event.preventDefault();
  });
  $("button.hidden").click(function(){
    $("#formOne").toggle();
    $(".hidden").hide();
    $(".result").hide();
    $("body").removeClass();
  });
});
