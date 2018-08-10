<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h1>New License</h1>
	<form:form action="/ninjas/addNinja" method="post" modelAttribute="ninja">
		<form:select name="dojos" path="dojo">
			<c:forEach items="${dojos}" var="dojo">
			    <option value="${dojo.id}"/><c:out value="${dojo.name}"/></option>
		    </c:forEach>
		</form:select>
		<p>
	        <form:label path="firstName">First Name</form:label>
	        <form:errors path="firstName"/>
	        <form:input path="firstName"/>
	    </p>
	    <p>
	        <form:label path="lastName">Last Name</form:label>
	        <form:errors path="lastName"/>
	        <form:input path="lastName"/>
	    </p>
	    <p>
	        <form:label path="age">Age</form:label>
	        <form:errors path="age"/>
	        <form:input path="age"/>
	    </p>
	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    	Submit
 		</button>
	</form:form>

</div>