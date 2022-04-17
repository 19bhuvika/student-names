var nosarray=[];

function submit()
{
var name1 = document.getElementById("sn1").value;
var name2 = document.getElementById("sn2").value;
var name3 = document.getElementById("sn3").value;
var name4 = document.getElementById("sn4").value;
nosarray.push(name1);
nosarray.push(name2);
nosarray.push(name3);
nosarray.push(name4);
console.log(nosarray);
document.getElementById("names").innerHTML = nosarray;
document.getElementById("su").style.display="none";
document.getElementById("so").style.display="inline-block";
}
function sort()
{
nosarray.sort();
document.getElementById("names").innerHTML = nosarray;
}
