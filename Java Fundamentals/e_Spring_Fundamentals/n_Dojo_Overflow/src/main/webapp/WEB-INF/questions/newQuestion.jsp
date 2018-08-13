<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<%@ page isErrorPage="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h1>New Question</h1>
	<form:form action="/questions/new" method="post">
	<form:errors path = "*" cssClass = "errorblock" element = "div" />
		<p><c:out value="${stringError}"/></p>
	    <label for="tags">Question</label>
		<input type="text" name="question">
	    <p><c:out value="${tagError}"/></p>
	    <label for="tags">Tags</label>
		<input type="text" name="tags">
	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    	Submit
  		</button>
	</form:form>    
</div>
    	<%-- <input type="hidden" name="tags" value="${product.id}"> --%>
    	<%--    	    <p>
	        <form:label path="tags">Tags</form:label>
	        <form:errors path="tags"/>
	        <form:input path="tags"/>
	    </p>  --%>