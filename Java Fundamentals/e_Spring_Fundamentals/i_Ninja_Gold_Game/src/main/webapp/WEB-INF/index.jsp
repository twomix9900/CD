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
	<p>Your gold: <c:out value="${ gold }"/></p>
	<form method="POST" action="">
		<div style="display: block">
			<div style="display: inline-block">
				<p>Farm</p>
				<p>(earn 10-20 gold)</p>
				<p><input type="submit" name="farm" value="Find Gold!"></p>
			</div>
			<div style="display: inline-block">
				<p>Cave</p>
				<p>(earn 5-10 gold)</p>
				<p><input type="submit" name="cave" value="Find Gold!"></p>
			</div>
			<div style="display: inline-block">
				<p>House</p>
				<p>(earn 2-5 gold)</p>
				<p><input type="submit" name="house" value="Find Gold!"></p>
			</div>
			<div style="display: inline-block">
				<p>Casino</p>
				<p>(earn 0-50 gold)</p>
				<p><input type="submit" name="casino" value="Find Gold?"></p>
			</div>
		</div>
	</form>
	<p>Activities:</p>
	<c:forEach items="${ activity }" var="activity">
		<p><c:out value="${ activity }"/></p>
	</c:forEach>
<%--     <c:forEach items="${foods}" var="food">
        <option value="${food.key}">
            ${food.value}
        </option>
    </c:forEach> --%>
</body>
</html>