<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<%@ page isErrorPage="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h1><c:out value="${question.question}"/></h1>
    <p>
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
	</form:form>    

</div>
    	<%-- <input type="hidden" name="tags" value="${product.id}"> --%>
    	<%--    	    <p>
	        <form:label path="tags">Tags</form:label>
	        <form:errors path="tags"/>
	        <form:input path="tags"/>
	    </p>  --%>