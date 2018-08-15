<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
    
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
</head>
<body>
<div class="container">
	<div>
		<h4>Register</h4>
	    <p style="color: red;"><form:errors path="user.*"/></p>
	    <form:form method="POST" action="/registration" modelAttribute="user">
	    	<p>
	            <form:label path="firstName">First Name:</form:label>
	            <form:input path="firstName"/>
	        </p>
    	    <p>
	            <form:label path="lastName">Last Name:</form:label>
	            <form:input path="lastName"/>
	        </p>
	        <p>
	            <form:label path="email">Email:</form:label>
	            <form:input path="email"/>
	        </p>
	        <p>
	            <form:label path="city">City:</form:label>
	            <form:input path="city"/>
	        </p>
	        <p>
	            <form:label path="state">State:</form:label>
	            <form:input path="state"/>
	        </p>
	        <p>
	            <form:label path="password">Password:</form:label>
	            <form:password path="password"/>
	        </p>
	        <p>
	            <form:label path="passwordConfirmation">Password Confirmation:</form:label>
	            <form:password path="passwordConfirmation"/>
	        </p>
       	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    		Register
  			</button>	
	    </form:form>
  		</div>
  		<div>
		<h4>Login</h4>
	    <p style="color: red;"><c:out value="${error}" /></p>
	    <form method="post" action="/login">
	        <p>
	            <label for="email">Email</label>
	            <input type="text" id="email" name="email"/>
	        </p>
	        <p>
	            <label for="password">Password</label>
	            <input type="password" id="password" name="password"/>
	        </p>
       	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    		Login
  			</button>
	    </form>
  		</div>
</div>  
</body>
</html>