function myfunc(){
	var myObj = JSON.parse(data);
	var x = document.forms["myform"]["uname"].value;
	var y = document.forms["myform"]["psw"].value;


    
    if( x == myObj[0].Username && y == myObj[0].Password){
    	alert(" Login Successful");
    	window.open("products.html");
    }
    
    else{
    	alert("Login Failed! Please try again.");

    }
    	

}