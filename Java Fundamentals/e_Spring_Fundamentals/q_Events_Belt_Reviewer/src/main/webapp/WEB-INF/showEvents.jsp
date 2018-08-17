<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
<%@ page isErrorPage="true" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<div class="container">
	<a href="logout">Log out</a>
	<h3>Welcome</h3>
	<h5>Here are some of the events in your state</h5>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Date</th>
				<th>Location</th>
				<th>Host</th>
				<th>Action / Status</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${events1}" var="e">
				<tr>
					<td><a href="/events/${e.id}"><c:out value="${e.name}"/></a></td>
					<td><c:out value="${e.date}"/></td>
					<td><c:out value="${e.city}"/></td>
					<td><c:out value="${e.eventHost.firstName}"/></td>
					<td>
						<c:choose>
							<c:when test="${e.eventHost == user}">
								<form:form method="GET" action="/events/edit/${e.id}">
							   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
							    		Edit
									</button>	
					    		</form:form>
								<form:form method="POST" action="/events/delete/${e.id}">
							   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
							    		Delete
									</button>	
					    		</form:form>
							</c:when>
								<c:when test="${fn:contains(e.attendeeUsers, user)}">
								<form:form method="POST" action="/events/leaveEvent/${e.id}">
							   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
							    		Leave
									</button>	
					    		</form:form>
							</c:when>
							<c:otherwise>
								<form:form method="POST" action="/events/joinEvent/${e.id}">
							   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
							    		Join
									</button>	
					    		</form:form>
							</c:otherwise>
						</c:choose>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<br>
	<br>
	<br>
	<br>
	<br>
	<h5>Here are some of the events in other states</h5>
		<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Date</th>
				<th>City</th>
				<th>State</th>
				<th>Host</th>
				<th>Action / Status</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${events2}" var="e">
				<tr>
					<td><a href="/events/${e.id}"><c:out value="${e.name}"/></a></td>
					<td><c:out value="${e.date}"/></td>
					<td><c:out value="${e.city}"/></td>
					<td><c:out value="${e.state}"/></td>
					<td><c:out value="${e.eventHost.firstName}"/></td>
					<td>
						<c:choose>
							<c:when test="${e.eventHost == user}">
								<form:form method="GET" action="/events/edit/${e.id}">
							   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
							    		Edit
									</button>	
					    		</form:form>
								<form:form method="POST" action="/events/delete/${e.id}">
							   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
							    		Delete
									</button>	
					    		</form:form>
							</c:when>
								<c:when test="${fn:contains(e.attendeeUsers, user)}">
								<form:form method="POST" action="/events/leaveEvent/${e.id}">
							   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
							    		Leave
									</button>	
					    		</form:form>
							</c:when>
							<c:otherwise>
								<form:form method="POST" action="/events/joinEvent/${e.id}">
							   	    <button class="btn waves-effect waves-light deep-purple" type="submit">
							    		Join
									</button>	
					    		</form:form>
							</c:otherwise>
						</c:choose>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<br>
	<br>
	<br>
	<br>
	<br>
	<h5>Create an event</h5>
	<p style="color: red;"><form:errors path="event.*"/></p>
	<form:form method="POST" action="/events/createNewEvent" modelAttribute="event">
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
    		Create Event
		</button>	
    </form:form>
</div>



