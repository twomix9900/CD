<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>New Player</title>
</head>
<body>
	<h1>Add a player</h1>
	<form action="/TeamRoster/Home" method="POST">
		First Name: <input type="text" name="firstName">
		Last Name: <input type="text" name="lastName">
		Age: <input type="text" name="age">
		<input type="submit" value="Add">
	</form>
</body>
</html>