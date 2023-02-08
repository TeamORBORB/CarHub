<?php

$email = $_POST['email'];
$uname = $_POST['uname'];
$psw = filter_input(INPUT_POST, 'psw', FILTER_VALIDATE_INT);

var_dump($email, $uname , $psw);