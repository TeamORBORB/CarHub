<?php

$email = $_POST['email'];
$uname = $_POST['uname'];
$psw = filter_input(INPUT_POST, 'psw', FILTER_VALIDATE_INT);

$host = "localhost";
$dbname= "users_db";
$username= "root";
$password= "";

$conn=mysqli_connect(hostname:$host, username:$username, password:$password, database:$dbname); 


if (mysqli_connect_errno()) {
    die("Failed to connect to MySQL: " . mysqli_connect_error());
}

echo "Connected to MySQL";

