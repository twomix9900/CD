<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Home Page</title>
</head>
<body>
	<form method="POST" action="">
		<p>Your name: <input type="text" name="name"></p>
		<p>Dojo location: <input type="text" name="location"></p>
		<p>Favorite language: <input type="text" name="language"></p>
		<p>Comment: <textarea name="comment"></textarea></p>
		<p><input type="submit" value="Add"></p>
	</form>
	
</body>
</html>