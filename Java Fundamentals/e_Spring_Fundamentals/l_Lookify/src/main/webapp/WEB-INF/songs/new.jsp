<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<%@ page isErrorPage="true" %>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h1>New Song</h1>
	<form:form action="/songs/new" method="post" modelAttribute="song">
	    <p>
	        <form:label path="title">Title</form:label>
	        <form:errors path="title"/>
	        <form:input path="title"/>
	    </p>
	    <p>
	        <form:label path="artist">Artist</form:label>
	        <form:errors path="artist"/>
	        <form:input path="artist"/>
	    </p>
	    <p>
	        <form:label path="rating">Rating</form:label>
	        <form:errors path="rating"/>     
	        <form:input type="number" path="rating"/>
	    </p>    
	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    	Submit
  		</button>
	</form:form>    
</div>
