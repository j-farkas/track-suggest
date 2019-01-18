$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var arr=[0,0,0,0];
    for (i = 0; i < 6; i++) {
      arr[parseInt($("#ans" + (i+1)).val()-1)] +=1;
    }
    $("#formOne").toggle();
    $("button.hidden").show();
    $(".result").show();
    console.log(arr);

    if(arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3]){
      //C# is highest
      $(".result").text("You should study C#");
      $(".c").toggle();
    }else if(arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3]){
      //Java is highest
      $(".result").text("You should study Java");
      $(".java").toggle();
    }else if(arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3]){
      //PHP is highest
      $(".result").text("You should study PHP");
      $(".php").toggle();
    } else if(arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2]){
      //Ruby is highest
      $(".result").text("You should study Ruby");
      $(".ruby").toggle();
    } else{
      //Tie
      $(".result").text("You're too indecisive, take the quiz again!");
    }
    console.log($("#name").val());
$(".result").prepend($("#name").val() + ", ");


    event.preventDefault();
  });
  $("button.hidden").click(function(){
    $("#formOne").toggle();
    $(".hidden").hide();
    $(".result").hide();
  });
});
