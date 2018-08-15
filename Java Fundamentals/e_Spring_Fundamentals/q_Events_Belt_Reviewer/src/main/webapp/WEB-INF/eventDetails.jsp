<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<%@ page isErrorPage="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h3><c:out value="${event.name}"/></h3>
	<p><c:out value="Host: ${event.eventHost.firstName} ${event.eventHost.lastName}"/></p>
	<p><c:out value="Date: ${event.date}"/></p>
	<p><c:out value="Location: ${event.city}, ${event.state}"/></p>
	<p><c:out value="People who are attending this event: ${event.attendeeUsers.size()}"/></p>
	<br>
	<br>
	<br>
   	<table>
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th>Location</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${event.attendeeUsers}" var="attendee">
		        <tr>
		            <td><c:out value="${attendee.firstName} ${attendee.lastName}"/></td>
	   	            <td><c:out value="${attendee.city}"/></td>
		        </tr>
	        </c:forEach>
	    </tbody>
	</table>
	<br>
	<br>
	<br>
	<h3>Message Wall</h3>
	<div style="overflow: scroll">
        <c:forEach items="${event.eventMessages}" var="message">
            <p><c:out value="${message.messagePoster.firstName} ${message.messagePoster.lastName} says: ${message.message}"/></p>
        </c:forEach>
	</div>
	<form:form action="/events/addNewMessage" method="post" modelAttribute="messageObj">
		<p>
	        <form:label path="message">Message:</form:label>
	        <form:input path="message"/>
	    </p>
	    <input type="hidden" value="${event.id}" name="eventId">
	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    	Submit
  		</button>
	</form:form>
 <%--    <p>
    	<c:forEach items="${question.tags}" var="tag">
    		<c:out value="${tag.subject}"/>
    	</c:forEach>
    </p>
   	<table>
	    <thead>
	        <tr>
	            <th>Answers</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${question.answers}" var="answer">
	        <tr>
	            <td><c:out value="${answer.answer}"/></td>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table>
	<br>
	<br>
	<br>
	<br>
	<br>
	<h5>Add your answer:</h5>
	<form:form action="/answers/new" method="post" modelAttribute="answerObj">
	<form:errors path = "*" cssClass = "errorblock" element = "div" />
		<p>
	        <form:label path="answer">Answer</form:label>
	        <form:errors path="answer"/>
	        <form:input path="answer"/>
	    </p>
	    <input type="hidden" value="${question.id}" name="questionId">
	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    	Submit
  		</button>
	</form:form>     --%>

</div>