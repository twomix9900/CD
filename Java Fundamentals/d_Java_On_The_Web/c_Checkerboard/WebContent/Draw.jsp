<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

	<link href="/Checkerboard/resources/css/Draw.css" rel="stylesheet">
	<meta charset="UTF-8">
	<title>Insert title here</title>
</head>
<body>
	<% int width = Integer.parseInt(request.getParameter("width")); %>
    <% int height = Integer.parseInt(request.getParameter("height")); %>

    <h1>Checkerboard: <%=width %>w x <%=height %>h</h1>
    
    <%--
    --%> 
   	<% for (int j = 0; j < height; j++) { %>
	    <% for (int i = 0; i < width; i++) { %>
    		<% if (i % 2 != 0 && j % 2 != 0) { %>
    			<div class="blue"></div>
    		<% } else if (i % 2 != 0 && j % 2 == 0){ %>
    			<div class="red"></div>
    		<% } else if (i % 2 == 0 && j % 2 == 0) { %>
    			<div class="blue"></div>
    		<% } else if (i % 2 == 0 && j % 2 != 0){ %>
    			<div class="red"></div>
    		<% } %>
    	<% } %>
    	<div class="row"></div>
     <% } %>
     <%--
    --%>
</body>
</html>