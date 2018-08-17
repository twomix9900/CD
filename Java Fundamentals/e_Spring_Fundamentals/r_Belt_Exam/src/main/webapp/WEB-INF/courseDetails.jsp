<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<%@ page isErrorPage="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<div class="container">
	<h2><c:out value="${course.name}"/></h2>
	<p><c:out value="Instructor: ${course.instructor}"/></p>
	<p><c:out value="Sign ups: ${course.courseStudents.size()}"/></p>
   	<table>
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th>Sign up date</th>
	            <th>ACTION</th>
	        </tr>
	    </thead>
	    <tbody>
	    	<c:forEach items="${students}" var="student">
			    <tr>
			    	<td><c:out value="${student.user.name}"/></td>
			    	<td><c:out value="${student.createdAt}"/></td>
			    	<td>
						<c:choose>
							<c:when test="${student.user == user}">
								<form:form method="POST" action="/courses/leave/${course.id}">
							   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
							    		Leave
									</button>	
					    		</form:form>
							</c:when>
							<c:otherwise>
								<p></p>
							</c:otherwise>
						</c:choose>
					</td>
			    </tr>
	    	</c:forEach>
	    </tbody>
	</table>
	<p><a href="edit/${course.id}">Edit</a></p>
	<p><a href="delete/${course.id}">Delete</a></p>
</div>