<?php

if(empty($_POST['submit']))
{
	echo "Form is not submitted!";
	exit;
}

if(empty($_POST["firstname"]) ||
	empty($_POST["surname"]) ||
	empty($_POST["email"])||
	empty($_POST["message"]))

	{
		echo "Please fill the form";
		exit;
	}
	
$name = $_POST["fullname"];
$surname = $_POST["surname"];
$email = $_POST["email"];
$message = $_POST["message"];

mail( 'george.jbeckwith@googlemail.com', 'New form submission',
"New form submission: Name: $name, Surname:$surname, Email:$email, 
Message:$message");

header('Location: contact.html');
?>