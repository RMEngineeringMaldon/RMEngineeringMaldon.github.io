document.contactform.onsubmit= function() {
	if(document.contactform.firstname.value =='')
	{
		alert("Please enter your  first name!");
		document.contactform.firstname.focus();
		return false;
    }

    else if(document.contactform.surname.value =='')
	{
		alert("Please enter your Surname!");
		document.contactform.surname.focus();
		return false;
	}
    
	else if(document.contactform.email.value =='')
	{
		alert("Please enter your Email address");
		document.contactform.email.focus();
		return false;
    }
    
    else if(document.contactform.message.value =='')
	{
		alert("Please enter your message!");
		document.contactform.message.focus();
		return false;
	}
	return true;
}