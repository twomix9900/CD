<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Prototype Roster</title>
</head>
<body>
	<h1>Prototype Roster</h1>
	<p><a href="/TeamRoster/Teams">New Team</a></p>
	<table>
		<tr style="width: 100px;">
		  <th>Team</th>
		  <th>Players</th>
		  <th>Action</th>
		</tr>
		<c:forEach items="${roster.getRoster()}" var="team">
		<tr>
			<td><c:out value="${team.name}" /></td>
			<td><c:out value="${team.getPlayers().size()}" /></td>
			<td><a href="/TeamRoster/Players?teamName=${team.name}">Details</a> <a href="">Delete</a></td>
		</tr>
		</c:forEach>
	</table> 
	
	
	
	<%-- 	<c:choose>
		<c:when test="${show}">
			<p>test is true</p>
		</c:when>
	</c:choose> --%>
	<%-- <c:if test="${show}">
		<p>Show is true</p>
	</c:if> --%>
<%-- 	<h3>Button clicked: <c:out value="${count}"/></h3>
	<form method="get" action="">
		<input type="submit" value="click me">
	</form> --%>
	
<!-- 	<form method="get" action="Dogs">
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
	</form> -->
	<%-- <h1><c:out value="${person.greeting()}"/></h1> --%>
<%-- 	<c:forEach var="person" items="${people}">
    	<c:out value="${person.name}"/>
	</c:forEach> --%>
	
</body>
</html>