
var app=newfunction(){​​​​​​​​

this.create = function(){​​​​​​​​
var myObj={​​​​​​​​"name":document.getElementById("name").value}​​​​​​​​;
alert("Created called " + JSON.stringify(myObj));
$.ajax({​​​​​​​​
type:"POST",
url:"http://localhost:9090/customer",
data:JSON.stringify(myObj), 
success:function(result) {​​​​​​​​
alert('msg');
            }​​​​​​​​,
error:function(result) {​​​​​​​​
alert('msg');
            }​​​​​​​​
        }​​​​​​​​);
//form.reset();
    }​​​​​​​​
this.delete = function(){​​​​​​​​
var myObj1={​​​​​​​​"name":document.getElementById("customername").value}​​​​​​​​;
alert("Delete called " + JSON.stringify(myObj1));
$.ajax({​​​​​​​​
type:"DELETE",
url:"http://localhost:9090/customer",
data:JSON.stringify(myObj1), 
error:function(result) {​​​​​​​​
alert('msg');
                }​​​​​​​​,
error:function(result) {​​​​​​​​
alert('msg');
                }​​​​​​​​
            }​​​​​​​​);
 }​​​​​​​​

}​​​​​​​​

