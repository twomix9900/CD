<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h3>Ninjas</h3>
	<table>
	    <thead>
	        <tr>
	            <th>First Name</th>
	            <th>Last Name</th>
	            <th>Age</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${ninjas}" var="ninja">
	        <tr>
	            <td><c:out value="${ninja.firstName}"/></td>
	            <td><c:out value="${ninja.lastName}"/></td>
	            <td><c:out value="${ninja.age}"/></td>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table>
</div>



