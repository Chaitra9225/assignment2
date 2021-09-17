
function validate(){
	var firstname= document.getElementById("firstname").value;
	var lastname= document.getElementById("lastname").value;
    var email= document.getElementById("email").value;
	var phone= document.getElementById("phone").value;
	var office= document.getElementById("office").value;
	var password= document.getElementById("password").value;
	var conpsw= document.getElementById("conpsw").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var psw=  /^[A-Za-z]\w{7,14}$/;

	if(firstname.length==0 ||firstname.length<3){
		window.alert("Please Enter valid first name");
		firstname=document.getElementById("firstname").focus();
		return false;
	}
	
	if(lastname.length==0){
		window.alert("Please Enter valid last name");
		document.getElementById("lastname").focus.focus;
		return false;
	}
  if(!email.match(mailformat))
	  {
	  window.alert(" please enter Valid email address!");
	  document.getElementById("email").focus;
	  return false;
	  }
	
	if(isNaN(phone) || phone.length != 10){
	window.alert("Please Enter valid Phone Number");
		document.getElementById("phone").focus;
		return false;
	  }

	  if (isNaN(office)){ 
    	window.alert("please enter only numbers");
		document.getElementById("office").focus;
		return false;
	  }
	  if(!password.match(psw))
	  {
window.alert(" please enter Valid Password!");
	  document.getElementById("password").focus;
	  return false;
	  }
	  if(conpsw.length==0){
		  window.alert("please Re-enter your password");
		  document.getElementById("conpsw").focus;
		return false;
	  }
	  if(conpsw!=password){
		window.alert(" password is not matching!.. Please try again");
		document.getElementById("conpsw").focus;
		return false;
	  }
	  
	   var checkboxs=document.getElementsByName("interest");
        var okay=false;
        for(var i=0,l=checkboxs.length;i<l;i++)
        {
        if(checkboxs[i].checked)
        {
            okay=true;
            break;
        }
    }
   if(!okay){alert("Please check atleast one  checkbox");}
}
       






function val(){
	var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput); 
	if(userinput==null || userinput==''){  
		window.alert("Choose a date please!");   
		return false;   
	  } 
	  //execute if user entered a date   
	  else {  
		//extract and collect only date from date-time string  
		var mdate = userinput.toString();  
		var dobYear = parseInt(mdate.substring(0,4), 10);  
		var dobMonth = parseInt(mdate.substring(5,7), 10);  
		var dobDate = parseInt(mdate.substring(8,10), 10);  
		  
		//get the current date from system  
		var today = new Date();  
		//date string after broking  
		var birthday = new Date(dobYear, dobMonth-1, dobDate);  
		  
		//calculate the difference of dates  
		var diffInMillisecond = today.valueOf() - birthday.valueOf();  
	  
		//convert the difference in milliseconds and store in day and year variable          
		var year_age = Math.floor(diffInMillisecond / 31536000000);  
		var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
	  
			  
		 var month_age = Math.floor(day_age/30);          
		 day_age = day_age % 30;    
		   
		//DOB is greater than today's date, generate an error: Invalid date    
		 if (dob>today) {  
			window.alert("Invalid date input - Please try again!");
		  }  
		  else {  
			//window.alert(year_age + " years " + month_age + " months " + day_age + " days");
		    document.getElementById("age").value = (year_age+"."+month_age + " years ") ;
		  }  
	   } 

}