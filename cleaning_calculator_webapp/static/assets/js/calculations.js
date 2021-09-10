
// Range function will set the price according to the input in square feet field
range=function()
 {
 var hour_rate = document.getElementById('u1').value;

            if(document.getElementById('a01').value >= 0 && document.getElementById('a01').value <= 1500)
               {
               var val = parseFloat(hour_rate) * 0.50;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 1501 && document.getElementById('a01').value <= 1750)
               {
               var val = parseFloat(hour_rate) * 0.55;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 1751 && document.getElementById('a01').value <= 2000)
               {
               var val = parseFloat(hour_rate) * 0.60;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 2001 && document.getElementById('a01').value <= 2250)
               {
               var val = parseFloat(hour_rate) * 0.65;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 2251 && document.getElementById('a01').value <= 2500)
               {
               var val = parseFloat(hour_rate) * 0.70;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 2501 && document.getElementById('a01').value <= 2750)
               {
               var val = parseFloat(hour_rate) * 0.75;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 2751 && document.getElementById('a01').value <= 3000)
               {
               var val = parseFloat(hour_rate) * 0.80;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 3001 && document.getElementById('a01').value <= 3250)
               {
               var val = parseFloat(hour_rate) * 0.85;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 3251 && document.getElementById('a01').value <= 3500)
               {
               var val = parseFloat(hour_rate) * 0.90;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 3501 && document.getElementById('a01').value <= 4000)
               {
               var val = parseFloat(hour_rate) * 1;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 4001 && document.getElementById('a01').value <= 4500)
               {
               var val = parseFloat(hour_rate) * 1.5;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 4501 && document.getElementById('a01').value <= 5000)
               {
               var val = parseFloat(hour_rate) * 2;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 5001 && document.getElementById('a01').value <= 5500)
               {
               var val = parseFloat(hour_rate) * 2.5;
               document.getElementById('a1').value = val.toFixed(2);
               }

               if(document.getElementById('a01').value >= 5501 && document.getElementById('a01').value <= 6000)
               {
               var val = parseFloat(hour_rate) * 3;
               document.getElementById('a1').value = val.toFixed(2);
               }
               if(document.getElementById('a01').value >= 6001 )
               {
                              document.getElementById('a1').value = 'Please Contact Us';
               }
        }

AAValue = function()
{
var b1Value = document.getElementById('b1').value;
var rate1Value = 6;
//Test
document.getElementById('AA').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

ABValue = function()
{
var b1Value = document.getElementById('c1').value;
var rate1Value = 14;
document.getElementById('AB').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

ACValue = function()
{
var b1Value = document.getElementById('d1').value;
var rate1Value = 6;
document.getElementById('AC').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

ADValue = function()
{
var b1Value = document.getElementById('e1').value;
var rate1Value = 4;
document.getElementById('AD').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

AEValue = function()
{
var b1Value = document.getElementById('f1').value;
var rate1Value = 5;
document.getElementById('AE').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

AFValue = function()
{
var b1Value = document.getElementById('h1').value;
var rate1Value = 5;
document.getElementById('AF').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

AGValue = function()
{
var b1Value = document.getElementById('i1').value;
var rate1Value = 5;
document.getElementById('AG').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

AHValue = function()
{
var b1Value = document.getElementById('j1').value;
var rate1Value = 4;
document.getElementById('AH').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

AIValue = function()
{
var b1Value = document.getElementById('k1').value;
var rate1Value = 3;
document.getElementById('AI').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

AJValue = function()
{
var b1Value = document.getElementById('l1').value;
var rate1Value = 3;
document.getElementById('AJ').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

AKValue = function()
{
var b1Value = document.getElementById('m1').value;
var rate1Value = 3;
document.getElementById('AK').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

ALValue = function()
{
var b1Value = document.getElementById('n1').value;
var rate1Value = 3;
document.getElementById('AL').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

AMValue = function()
{
var b1Value = document.getElementById('o1').value;
var rate1Value = 2;
document.getElementById('AM').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

ANValue = function()
{
var b1Value = document.getElementById('p1').value;
var rate1Value = 3;
document.getElementById('AN').value = parseFloat(b1Value).toFixed(2) * parseFloat(rate1Value).toFixed(2);
}

sumOfValues = function()
{

var a1 = document.getElementById('AA').value;
var b3 = document.getElementById('AB').value;
var c3 = document.getElementById('AC').value;
var d3 = document.getElementById('AD').value;
var e3 = document.getElementById('AE').value;
var f3 = document.getElementById('AF').value;
var g3 = document.getElementById('AG').value;
var h3 = document.getElementById('AH').value;
var i3 = document.getElementById('AI').value;
var j3 = document.getElementById('AJ').value;
var k3 = document.getElementById('AK').value;
var l3 = document.getElementById('AL').value;
var m3 = document.getElementById('AM').value;
var n3 = document.getElementById('AN').value;
var o3 = document.getElementById('a1').value;

var result = parseFloat(a1) + parseFloat(b3) + parseFloat(c3) + parseFloat(d3) + parseFloat(e3) + parseFloat(f3) + parseFloat(g3) + parseFloat(h3) + parseFloat(i3) + parseFloat(j3) + parseFloat(k3) + parseFloat(l3) + parseFloat(m3) + parseFloat(n3) + parseFloat(o3);

document.getElementById('q1').value = result;
document.getElementById('r1').value = result + 15;
document.getElementById('s1').value = result + 30;


}

tax = function()
{
var tax_ratio = document.getElementById('tax_ratio').value;

var q1Value = document.getElementById('q1').value;

var r1Value = document.getElementById('r1').value;
var s1Value = document.getElementById('s1').value;


var result1 = q1Value * parseFloat(tax_ratio/100);
var result2 = r1Value * parseFloat(tax_ratio/100);
var result3 = s1Value * parseFloat(tax_ratio/100);

document.getElementById('tax1').value = result1.toFixed(2);
document.getElementById('tax2').value = result2.toFixed(2);
document.getElementById('tax3').value = result3.toFixed(2);
}

total = function()
{
var q1 = document.getElementById('q1').value;
var r1 = document.getElementById('r1').value;
var s1 = document.getElementById('s1').value;

var tax1 =document.getElementById('tax1').value;
var tax2 = document.getElementById('tax2').value;
var tax3 = document.getElementById('tax3').value;

var total1 = parseFloat(q1) + parseFloat(tax1);
var total2 = parseFloat(r1) + parseFloat(tax2);
var total3 = parseFloat(s1) + parseFloat(tax3);

document.getElementById('t1').value = total1.toFixed(2);
document.getElementById('t2').value = total2.toFixed(2);
document.getElementById('t3').value = total3.toFixed(2);

}

clear_function = function()
{
  document.getElementById('a01').value = '0';
  document.getElementById('b1').value = '0';
  document.getElementById('c1').value = '0';
  document.getElementById('d1').value = '0';
  document.getElementById('e1').value = '0';
  document.getElementById('f1').value = '0';
  document.getElementById('h1').value = '0';
  document.getElementById('i1').value = '0';
  document.getElementById('j1').value = '0';
  document.getElementById('k1').value = '0';
  document.getElementById('l1').value = '0';
  document.getElementById('m1').value = '0';
  document.getElementById('n1').value = '0';
  document.getElementById('o1').value = '0';
  document.getElementById('p1').value = '0';
  document.getElementById('t1').value = '0';
  document.getElementById('t2').value = '0';
  document.getElementById('t3').value = '0';

}

var idarray = ["tax_ratio","u1", "a01", "b1" , "c1", "d1", "e1", "f1" , "h1", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1", "tax_ratio"];
    function focusNext(e)
        {
        try{
            for(var i=0; i < idarray.length; i++)
            {
            if(e.keyCode === 13 && e.target.id === idarray[i])
                    {
                        document.querySelector(`#${idarray[i+1]}`).focus();
                        document.querySelector(`#${idarray[i+1]}`).select();
                    }
                }
                }
            catch(error)
    {

    }
}