var app = new function(){
 
    this.create = function(){
        var myObj={"name":document.getElementById("name").value};
        alert("Create called " + JSON.stringify(myObj));
        $.ajax({
            type: "POST",
            url: "http://localhost:9090/customer",
            data:JSON.stringify(myObj), 
            success: function(result) {
                alert('msg');
            },
            error: function(result) {
                alert('msg');
            }
        });
    }
        
        this.Delete= function(){
            var myObj1={"name":document.getElementById("customername").value};
            alert("Delete called " + JSON.stringify(myObj1));
    $.ajax({​​​
        type: "DELETE",
        url:  "http://localhost:9090/customer",
        data:JSON.stringify(myObj1),
        success: function () {​​​
            alert('record has been deleted');
            
        }​​​,
        error: function (error) {​​​
            alert(error);
        }​​​
    }​​​)
}​​​

}


