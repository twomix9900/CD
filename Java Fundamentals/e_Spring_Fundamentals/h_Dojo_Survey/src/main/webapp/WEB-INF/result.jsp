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
	<h1>Submitted Info</h1>
	<p>Name: <c:out value="${ name }" /></p>
	<p>Location: <c:out value="${ location }" /></p>
	<p>Language: <c:out value="${ language }" /></p>
	<p>Comment: <c:out value="${ comment }" /></p>
	<a href="/">Go back</a>
	
</body>
</html>