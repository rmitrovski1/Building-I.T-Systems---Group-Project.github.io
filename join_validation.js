//this is the main function 

    window.onload = () => { //prevents user from copy and pasting
        const email_confirm = document.getElementById('email_confirm');
        email_confirm.onpaste = e => e.preventDefault();
    
    }


function checkForm() 
{
  //collecting user inputs 
  
  fname = document.getElementById("fname").value;
  lname = document.getElementById("lname").value;
  address = document.getElementById("address").value;
  phone = document.getElementById("phone").value;
  phoneResult = checkPhone(phone);
  //calls another function IsNumeric 
//  ageNumeric = IsNumeric(age);
  address = document.getElementById("address").value;
 
   //calls another function IsNumeric 
 // phoneNumeric = IsNumeric(phone);
  email = document.getElementById("email").value;
  email_confirm = document.getElementById("email_confirm").value;
   //calls another function checkEmail
  emailResult = checkEmail(email);
  //customer = document.getElementById("customer").value; */

	//checking for empty inputs and displaying error 
    if (fname == "") 
    { 
	hideAllErrors();
	document.getElementById("fnameError"). style.display = "inline";
	document.getElementById("fname").select();
	document.getElementById("fname").focus();
	return false;
    }

    else if (lname == "") 
    {   
	hideAllErrors();
	document.getElementById("lnameError"). style.display = "inline";
	document.getElementById("lname").select();
	document.getElementById("lname").focus();
      return false;
    }
 
	else if (address == "") 
    {   
	hideAllErrors();
	document.getElementById("addressError"). style.display = "inline";
	document.getElementById("address").select();
	document.getElementById("address").focus();
      return false;
    }
	
	else if (phone == "") 
    {   
	hideAllErrors();
	document.getElementById("phoneError"). style.display = "inline";
	document.getElementById("phone").select();
	document.getElementById("phone").focus();
	return false;
    }
	
	else if (phoneResult == false)
    {
        document.getElementById("phoneError"). style.display = "inline";
        document.getElementById("phone").select();
        document.getElementById("phone").focus();
        return false;
    }
  /*  else if (age == "") 
    {   
	hideAllErrors();
	document.getElementById("ageError"). style.display = "inline";
	document.getElementById("age").select();
	document.getElementById("age").focus();
	return false;
    }
    
    else if (ageNumeric == false) 
    {   
	hideAllErrors();
	document.getElementById("ageError"). style.display = "inline";
	document.getElementById("age").select();
	document.getElementById("age").focus();
	return false;
    }
    
	// checks if age is between 16 and 90
    else if (age<16||age>90)
    {
	hideAllErrors();
	document.getElementById("ageError"). style.display = "inline";
	document.getElementById("age").select();
	document.getElementById("age").focus();
	return false;
    }
   

    else if (address == "") 
    {   
	hideAllErrors();
	document.getElementById("addressError"). style.display = "inline";
	document.getElementById("address").select();
	document.getElementById("address").focus();
	return false;
    }
 
 */
    else if (email == "") 
   {
	hideAllErrors();
	document.getElementById("emailError"). style.display = "inline";
	document.getElementById("email").select();
	document.getElementById("email").focus();
	return false;
    }
	
	
 
  else if (emailResult == false)
    {
        hideAllErrors();
        document.getElementById("emailError"). style.display = "inline";
        document.getElementById("email").select();
        document.getElementById("email").focus();
        return false;
    }
	   else if (email_confirm == "") 
    {
     document.getElementById("emailError"). style.display = "inline";
     document.getElementById("email_confirm").select();
     document.getElementById("email_confirm").focus();
     return false;
     }

	 
	     else if (email != email_confirm)
     {
        document.getElementById("error_not_same"). style.display = "inline";
         return false;
     }
 
  /*  else if (password == "") 
    {		
	hideAllErrors();
	document.getElementById("passwordError"). style.display = "inline";
	document.getElementById("password").select();
	document.getElementById("password").focus();
	return false;
    }
 
	//checks password length
    else if ((password.length <8) || (password.length >20))
    {
	hideAllErrors();
	document.getElementById("passwordError"). style.display = "inline";
	document.getElementById("password").select();
	document.getElementById("password").focus();
	return false;
    }
 
    else if (customer == "choose yours") 
    {
	hideAllErrors();
	document.getElementById("customerError"). style.display = "inline";
	document.getElementById("customer").focus();
	return false;
    }
    
 
// this is to tell user all validation is now complete
alert("First Name:" + firstname + "\n Surname:" + surname + "\n Age:" + age + "\n Address:" + address + "\n Phone Number:" + phone + "\n Email:" + email + "\n Password:" + password + "\n Customer Type:" + customer);
 
  return true;

}
*/
//checks if phone is in proper phone format
function checkPhone(inputvalue1){	
    var pattern=/^\+61 4\d{2} \d{3} \d{3}$/;
    if(pattern.test(inputvalue1)) {         
		return true;
    }else{   
		return false;
    }
    
}

/*
//checks via reg ex if age and phone numbers are numbers
function IsNumeric(numstr)
{
    mystring = numstr;
    if (mystring.match(/^\d+$/ ) ) {
    
	    return true;
    }else{
	    return false;
    }
}
*/   

//checks if email is in proper email format
function checkEmail(inputvalue){	
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(pattern.test(inputvalue)) {         
		return true;
    }else{   
		return false;
    }
 
}

// hide error upon successful validation
function hideAllErrors()
{  
  	document.getElementById("fnameError").style.display = "none";
  	document.getElementById("lnameError").style.display = "none";
  	document.getElementById("addressError").style.display = "none";
    	document.getElementById("phoneError").style.display = "none";
 	document.getElementById("emailError").style.display = "none";   
	  document.getElementById("error_not_same").style.display = "none"

 }
 
}

