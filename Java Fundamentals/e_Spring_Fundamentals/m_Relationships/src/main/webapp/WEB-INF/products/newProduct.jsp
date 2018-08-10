<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h1>New Product</h1>
	<form:form action="/products/addProduct" method="post" modelAttribute="product">
<%-- 		<form:select name="dojos" path="dojo">
			<c:forEach items="${dojos}" var="dojo">
			    <option value="${dojo.id}"/><c:out value="${dojo.name}"/></option>
		    </c:forEach>
		</form:select> --%>
		<p>
	        <form:label path="name">Name</form:label>
	        <form:errors path="name"/>
	        <form:input path="name"/>
	    </p>
	    <p>
	        <form:label path="description">Description</form:label>
	        <form:errors path="description"/>
	        <form:textarea path="description"/>
	    </p>
	    <p>
	        <form:label path="price">Price</form:label>
	        <form:errors path="price"/>
	        <form:input path="price"/>
	    </p>
	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    	Submit
 		</button>
	</form:form>

</div>