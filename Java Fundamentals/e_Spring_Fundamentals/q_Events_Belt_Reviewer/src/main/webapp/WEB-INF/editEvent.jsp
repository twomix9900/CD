<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
<%@ page isErrorPage="true" %>

<div class="container">	
	<h5><c:out value="Edit event: ${event.name}"/></h5>
	<p style="color: red;"><form:errors path="event.*"/></p>
	<form:form method="POST" action="/events/edit/${event.id}" modelAttribute="event">
		<input type="hidden" name="_method" value="put">
    	<p>
            <form:label path="name">Name:</form:label>
            <form:input path="name"/>
        </p>
   	    <p>
            <form:label path="date">Date:</form:label>
            <form:input path="date"/>
        </p>
        <p>
            <form:label path="city">City:</form:label>
            <form:input path="city"/>
        </p>
        <p>
            <form:label path="state">State:</form:label>
            <form:input path="state"/>
        </p>
   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
    		Edit Event
		</button>	
    </form:form>
</div>