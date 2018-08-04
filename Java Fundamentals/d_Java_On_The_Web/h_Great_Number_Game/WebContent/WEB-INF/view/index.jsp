<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Great Number Game</title>
	<link href="resources/css/index.css" rel="stylesheet">
</head>
<body>
	<h1>Welcome to the Great Number Game!</h1>
	<p>I am thinking of a number between 1 and 100. Guess!</p>
	<form method="POST" action="">
		<input type="text" name="guessNumber">
		<input type="submit" value="submit">
	</form>
	<c:if test="${high}">
		<div class="high">
			Too high!
		</div>
	</c:if>
	<c:if test="${low}">
		<div class="high">
			Too low!
		</div>
	</c:if>
	<c:if test="${correct}">
		<div class="correct">
			Correct! play again?
		</div>
		<form method="GET" action="">
			<input type="submit" value="Play again">
		</form>
	</c:if>
	
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
