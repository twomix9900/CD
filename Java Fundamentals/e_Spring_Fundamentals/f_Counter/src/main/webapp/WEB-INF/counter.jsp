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
	<h3>You have visited localhost:8080 <c:out value="${ counter }" /> times.</h3>
	<a href="/">Test another visit?</a>

</body>
</html>