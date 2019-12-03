function multiplyBy()
{
        user = document.getElementById("firstNumber").value;
        rate =.91;
        document.getElementById("result").innerHTML = user * rate;


}

function multiplyBy2()
{
        user = document.getElementById("secondNumber").value;
        rate =1.10;
        document.getElementById("result2").innerHTML = user * rate;

}

function changeColor(){
  document.getElementById('btn1').style.backgroundColor="lightblue";
  alert("They have 0 Superbowl wins!");
}
