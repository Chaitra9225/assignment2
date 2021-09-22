// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
    var fnameErr= document.getElementById("fnameErr").value;
	var lnameErr= document.getElementById("lnameErr").value;
    var emailErr= document.getElementById("emailErr").value;
	var phoneErr= document.getElementById("phoneErr").value;
	var officeErr= document.getElementById("officeErr").value;
	var pswErr= document.getElementById("pswErr").value;
	var conpswErr= document.getElementById("conpswErr").value;  
	var genderErr= document.getElementById("genderErr").value;
	var interestErr= document.getElementById("interestErr").value;
	var dateErr= document.getElementById("dareErr").value;
	
	


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

	// Defining error variables with a default value
   officeErr= lnameErr = emailErr = phoneErr = fnameErr = genderErr = interestErr = pswErr = conpswErr = dateErr = true;
    
    // Validate firstname
    if(firstname == "") {
        printError("fnameErr", "Please enter first your name");
    } else if(firstname.length<3){
		printError("fnameErr", "Please enter a valid name");
		document.getElementById(firstname).focus();
	}
	else	{
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
			document.getElementById("firstname").focus();
            printError("fnameErr", "Please enter a valid name");
			
        } else {
            printError("fnameErr", "");
            fnameErr = false;
        }
    }

    // Validate lastname
    if(lastname == "") {
        printError("lnameErr", "Please enter your name");
    }  else {
            printError("lnameErr","");
            lnameErr = false;
        }
	
	 // Validate email address
	 if(email =="") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
      // Validate mobile number
	  if(phone == "") {
        printError("phoneErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(phone) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("phoneErr", "");
           phoneErr = false;
        }
    }
    //validate office number
	if(office==""){
		printError("officeErr","Please enter your office number")
	   }
	   else if (isNaN(office)){ 
		   printError("officeErr", "Please enter a valid office number");
	   } else{
		   printError("officeErr", "");
		  officeErr = false;
	   }

    //validate password
	  if(!password.match(psw)){ 
	  printError("pswErr", "Please enter a valid password");
	} else{
		printError("pswErr", "");
	   pswErr = false;
	}


    //validate confirm password

	  if(conpsw.length==0){
		printError("conpswErr", "please Re-enter your password");
	  }
	  else if(conpsw!=password){
		printError("conpswErr", "password is not matching!.. Please try again");
	  }
	  else{
		printError("conpswErr", "");
	   conpswErr = false;
	}

	//validate check box
	  
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
   if(!okay){
	   printError("interestErr", "Please check atleast one checkbox");
	} 
	else{
		printError("interestErr","")
		interestErr=false;
	}
}
       






function val(){
	var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput); 
	if(userinput==null || userinput==''){  
		printError("dateErr","choose a date please!..")     
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
			printError("dateErr","Invalid date input - Please try again!")
		  }  
		  else {  
			//window.alert(year_age + " years " + month_age + " months " + day_age + " days");
		    document.getElementById("age").value = (year_age+"."+month_age + " years ") ;
			printError("dateErr","");
			dateErr=false;
		  }  
	   } 

}