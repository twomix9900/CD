<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Pets</title>
</head>
<body>
	<h1>Create a Dog</h1>
	<form method="get" action="Dogs">
		Name: <input type="text" name="name">
		Breed: <input type="text" name="breed">
		Weight: <input type="text" name="weight">
		<input type="submit" value="Create Dog">
	</form>
	<h1>Create a Cat</h1>
	<form method="get" action="Cats">
		Name: <input type="text" name="name">
		Breed: <input type="text" name="breed">
		Weight: <input type="text" name="weight">
		<input type="submit" value="Create Cat">
	</form>
	<%-- <h1><c:out value="${person.greeting()}"/></h1> --%>
<%-- 	<c:forEach var="person" items="${people}">
    	<c:out value="${person.name}"/>
	</c:forEach> --%>
	
</body>
</html>