<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h1>New License</h1>
	<form:form action="/license/new" method="post" modelAttribute="license">
		<form:select name="persons" path="person">
			<c:forEach items="${persons}" var="person">
			    <option value="${person.id}"/><c:out value="${person.firstName} ${person.lastName}"/></option>
		    </c:forEach>
		</form:select>
		<p>
	        <form:label path="state">State</form:label>
	        <form:errors path="state"/>
	        <form:input path="state"/>
	    </p>
	    <p>
	        <form:label path="expiration_date">Expiration Date</form:label>
	        <form:errors path="expiration_date"/>
	        <form:input path="expiration_date"/>
	    </p>
	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    	Submit
 		</button>
	</form:form>

</div>