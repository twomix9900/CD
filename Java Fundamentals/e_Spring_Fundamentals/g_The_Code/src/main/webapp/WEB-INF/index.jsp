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
	<p><c:out value="${ error }"/></p>
	<h1>What is the code?</h1>
	<form method="POST" action="">
		What is the code?
		<input type="text" name="code">
		<input type="submit" value="Try Code">
	</form>
</body>
</html>