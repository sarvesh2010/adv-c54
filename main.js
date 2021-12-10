var num_1=Number(document.getElementById("first-no").value);

function calculate() {
    num_1=Number(document.getElementById("first-no").value);
    var area=num_1*num_1;
    var perimeter=4*num_1;
    document.getElementById("lblarea").innerHTML=area;
    document.getElementById("lblperimeter").innerHTML=perimeter;
}