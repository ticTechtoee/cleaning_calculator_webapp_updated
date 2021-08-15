b3Value = function()
{
var b1 = document.getElementById('b1').value;
var rate1 = document.getElementById('rate1').value;
document.getElementById('b3').value = parseInt(b1) * parseInt(rate1);
}

c3Value = function()
{
var c1 = document.getElementById('c1').value;
var rate2 = document.getElementById('rate2').value;
document.getElementById('c3').value = parseInt(c1) * parseInt(rate2);
}

d3Value = function()
{
var d1 = document.getElementById('d1').value;
var rate3 = document.getElementById('rate3').value;
document.getElementById('d3').value = parseInt(d1) * parseInt(rate3);
}

e3Value = function()
{
var e1 = document.getElementById('e1').value;
var rate4 = document.getElementById('rate4').value;
document.getElementById('e3').value = parseInt(e1) * parseInt(rate4);
}

f3Value = function()
{
var f1 = document.getElementById('f1').value;
var rate5 = document.getElementById('rate5').value;
document.getElementById('f3').value = parseInt(f1) * parseInt(rate5);
}

g3Value = function()
{
var g1 = document.getElementById('g1').value;
var rate6 = document.getElementById('rate6').value;
document.getElementById('g3').value = parseInt(g1) * parseInt(rate6);
}

h3Value = function()
{
var h1 = document.getElementById('h1').value;
var rate7 = document.getElementById('rate7').value;
document.getElementById('h3').value = parseInt(h1) * parseInt(rate7);
}

i3Value = function()
{
var i1 = document.getElementById('i1').value;
var rate8 = document.getElementById('rate8').value;
document.getElementById('i3').value = parseInt(i1) * parseInt(rate8);
}

j3Value = function()
{
var j1 = document.getElementById('j1').value;
var rate9 = document.getElementById('rate9').value;
document.getElementById('j3').value = parseInt(j1) * parseInt(rate9);
}

k3Value = function()
{
var k1 = document.getElementById('k1').value;
var rate10 = document.getElementById('rate10').value;
document.getElementById('k3').value = parseInt(k1) * parseInt(rate10);
}

l3Value = function()
{
var l1 = document.getElementById('l1').value;
var rate11 = document.getElementById('rate11').value;
document.getElementById('l3').value = parseInt(l1) * parseInt(rate11);
}

m3Value = function()
{
var m1 = document.getElementById('m1').value;
var rate12 = document.getElementById('rate12').value;
document.getElementById('m3').value = parseInt(m1) * parseInt(rate12);
}

n3Value = function()
{
var n1 = document.getElementById('n1').value;
var rate13 = document.getElementById('rate13').value;
document.getElementById('n3').value = parseInt(n1) * parseInt(rate13);
}

o3Value = function()
{
var o1 = document.getElementById('o1').value;
var rate14 = document.getElementById('rate14').value;
document.getElementById('o3').value = parseInt(o1) * parseInt(rate14);
}
var result;

sumOfValues = function()
{
var a1 = document.getElementById('a1').value;
var b3 = document.getElementById('b3').value;
var c3 = document.getElementById('c3').value;
var d3 = document.getElementById('d3').value;
var e3 = document.getElementById('e3').value;
var f3 = document.getElementById('f3').value;
var g3 = document.getElementById('g3').value;
var h3 = document.getElementById('h3').value;
var i3 = document.getElementById('i3').value;
var j3 = document.getElementById('j3').value;
var k3 = document.getElementById('k3').value;
var l3 = document.getElementById('l3').value;
var m3 = document.getElementById('m3').value;
var n3 = document.getElementById('n3').value;
var o3 = document.getElementById('o3').value;

var value1 = 15;
var value2 = 30;

result = parseInt(a1) + parseInt(b3) + parseInt(c3) + parseInt(d3) + parseInt(e3) + parseInt(f3) + parseInt(g3) + parseInt(h3) + parseInt(i3) + parseInt(j3) + parseInt(k3) + parseInt(l3) + parseInt(m3) + parseInt(n3) + parseInt(o3);
document.getElementById('p1').value = result;
document.getElementById('q1').value = result + parseInt(value1);
document.getElementById('r1').value = result + parseInt(value2);

}
//It's the value of p2
p4Value = function()
{
var p4 = document.getElementById('p4').value;
document.getElementById('p2').value = (parseFloat(result) * (parseFloat(p4)/100)).toFixed(2);
}

p3Value = function()
{
var p1 = document.getElementById('p1').value;
var p2 = document.getElementById('p2').value;
document.getElementById('p3').value = Math.round(parseFloat(p1) + parseFloat(p2));
}

q2Value = function()
{
var p4 = document.getElementById('p4').value;
var q1 = document.getElementById('q1').value;
document.getElementById('q2').value = (parseFloat(q1) * (parseFloat(p4)/100)).toFixed(2);
}

q3Value = function()
{
var q1 = document.getElementById('q1').value;
var q2 = document.getElementById('q2').value;
document.getElementById('q3').value = Math.round(parseFloat(q1) + parseFloat(q2));
}

r2Value = function()
{
var p4 = document.getElementById('p4').value;
var r1 = document.getElementById('r1').value;
document.getElementById('r2').value = (parseFloat(r1) * (parseFloat(p4)/100)).toFixed(2);
}

r3Value = function()
{
var r1 = document.getElementById('r1').value;
var r2 = document.getElementById('r2').value;
document.getElementById('r3').value = Math.round(parseFloat(r1) + parseFloat(r2));
}

//Estimate for One-Time And Initial Clean

s1Value = function()
{
var p3 = document.getElementById('p3').value;
var multiple = parseFloat(1.2);
document.getElementById('s1').innerHTML = Math.round(parseFloat(p3) * parseFloat(multiple));
}

s2Value = function()
{
var p3 = document.getElementById('p3').value;
var multiple = parseFloat(1.5);
document.getElementById('s2').innerHTML = Math.round(parseFloat(p3) * parseFloat(multiple));
}

t1Value = function()
{
var q3 = document.getElementById('q3').value;
var multiple = parseFloat(1.2);
document.getElementById('t1').innerHTML = Math.round(parseFloat(q3) * parseFloat(multiple));
}

t2Value = function()
{
var q3 = document.getElementById('q3').value;
var multiple = parseFloat(1.5);
document.getElementById('t2').innerHTML = Math.round(parseFloat(q3) * parseFloat(multiple));
}

u1Value = function()
{
var r3 = document.getElementById('r3').value;
var multiple = parseFloat(1.2);
document.getElementById('u1').innerHTML = Math.round(parseFloat(r3) * parseFloat(multiple));
}

u2Value = function()
{
var r3 = document.getElementById('r3').value;
var multiple = parseFloat(1.5);
document.getElementById('u2').innerHTML = Math.round(parseFloat(r3) * parseFloat(multiple));
}