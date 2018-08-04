<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Cats</title>
</head>
<body>
	<p>Your <c:out value="${cat.getBreed()}"/> cat, <c:out value="${cat.getName()}"/>, <c:out value="${cat.showAffection()}"/></p>
</body>
</html>