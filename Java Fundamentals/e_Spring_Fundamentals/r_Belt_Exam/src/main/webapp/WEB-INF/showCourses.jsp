<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
<%@ page isErrorPage="true" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<div class="container">
	<p><a href="logout">Log out</a></p>
	<h3>Welcome</h3>
	<table>
		<thead>
			<tr>
				<th>Course</th>
				<th>Instructor</th>
				<th>Signups</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${allCourses}" var="c">
				<tr>
					<td><a href="/courses/${c.id}"><c:out value="${c.name}"/></a></td>
					<td><c:out value="${c.instructor}"/></td>
					<td><c:out value="${c.courseStudents.size()}/${c.capacity}"/></td>
					<td>
						<c:choose>
							<c:when test="${fn:contains(c.courseStudents, user)}">
								<p>Already Added</p>
							</c:when>
							<c:when test="${fn:length(c.courseStudents) == c.capacity}">
								<p>FULL</p>
							</c:when>
							<c:otherwise>
								<form:form method="POST" action="/courses/enroll/${c.id}">
							   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
							    		Add
									</button>	
				    			</form:form>
							</c:otherwise>
						</c:choose>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<p><a href="/courses/new">Add a course</a></p>
</div>



