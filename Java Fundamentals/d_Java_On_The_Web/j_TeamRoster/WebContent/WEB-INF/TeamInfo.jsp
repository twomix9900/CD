<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Team Info</title>
</head>
<body>
	<h1><c:out value="${teamName}" /></h1>
	<form method="POST" action="">
		<input type="submit" value="New Player">
	</form>
	
	<table>
		<tr style="width: 100px;">
		  <th>First Name</th>
		  <th>Last Name</th>
		  <th>Age</th>
		  <th>Actions</th>
		</tr>
		<c:forEach items="${team.getPlayers()}" var="player">
		<tr>
			<td><c:out value="${player.getFirstName()}" /></td>
			<td><c:out value="${player.getLastName()}" /></td>
			<td><c:out value="${player.getAge()}" /></td>
			<td><a href="/TeamRoster/Players?teamName=${team.name}">Details</a> <a href="">Delete</a></td>
		</tr>
		</c:forEach>
	</table> 
</body>
</html>