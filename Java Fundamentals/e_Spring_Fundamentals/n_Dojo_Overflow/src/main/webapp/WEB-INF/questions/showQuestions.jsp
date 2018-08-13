<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h3>Questions Dashboard</h3>
	<table>
	    <thead>
	        <tr>
	            <th>Question</th>
	            <th>Tags</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${allQuestions}" var="question">
	        <tr>
	            <td><a href="/questions/${question.id}"><c:out value="${question.question}"/></a></td>
	            <td>
		            <c:forEach items="${question.tags}" var="tag">
		            	<c:out value="${tag.subject}"/>
		            </c:forEach>
	            </td>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table>
	<a href="/questions/new">New Question</a>
</div>



