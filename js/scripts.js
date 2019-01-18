$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var arr=[0,0,0,0];
    for (i = 0; i < 6; i++) {
      arr[parseInt($("#ans" + (i+1)).val()-1)] +=1;
    }

    console.log(arr);

    if(arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3]){
      //C# is highest
      $("p").text("You should study C#");
    }else if(arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3]){
      //Java is highest
      $("p").text("You should study Java");
    }else if(arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3]){
      //PHP is highest
      $("p").text("You should study PHP");
    } else if(arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2]){
      //Ruby is highest
      $("p").text("You should study Ruby");
    } else{
      //Tie
      $("p").text("You're too indecisive, take the quiz again!");
    }



    event.preventDefault();
  });
});
