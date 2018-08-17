<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<%@ page isErrorPage="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h1>New Course</h1>
	<form:form action="/courses/new" method="post" modelAttribute="course">
	    <p>
	        <form:label path="name">Name</form:label>
	        <form:errors path="name"/>
	        <form:input path="name"/>
	    </p>
	    <p>
	        <form:label path="instructor">Instructor</form:label>
	        <form:errors path="instructor"/>
	        <form:input path="instructor"/>
	    </p>
	    <p>
	        <form:label path="capacity">Capacity</form:label>
	        <form:errors path="capacity"/>     
	        <form:input type="number" path="capacity"/>
	    </p>  
	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    	Submit
  		</button>
	</form:form>    
</div>