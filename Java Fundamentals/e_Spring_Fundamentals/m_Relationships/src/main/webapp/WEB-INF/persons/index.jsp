<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h2>New Person</h2>
	<form:form action="" method="post" modelAttribute="person">
	    <p>
	        <form:label path="firstName">First name</form:label>
	        <form:errors path="firstName"/>
	        <form:input path="firstName"/>
	    </p>
	    <p>
	        <form:label path="lastName">Last Name</form:label>
	        <form:errors path="lastName"/>
	        <form:input path="lastName"/>
	    </p>
	    <button class="btn waves-effect waves-light deep-purple" type="submit">
	    	Submit
 		</button>
	</form:form>  
<%-- 	<div class="row col m12 s12">
		<a href="/songs/new">Add New&nbsp;&nbsp;&nbsp;&nbsp;</a>
		<a href="/songs/topten">Top Songs&nbsp;&nbsp;&nbsp;&nbsp;</a>
	</div>
    <form:form action="/songs/search" method="get" modelAttribute="song"> 
     	<input placeholder="Search Artist" type="text" class="validate" name="artist">
     	<button class="btn waves-effect waves-light deep-purple" type="submit">
	    	Submit
  		</button>
   	</form:form>  
	<table>
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th>Rating</th>
	            <th>Actions</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${songs}" var="song">
	        <tr>
	            <td><a href="/songs/${song.id}"><c:out value="${song.title}"/></a></td>
	            <td><c:out value="${song.rating}"/></td>
	            <td>
	            	<form action="/songs/${song.id}" method="post">
	            	    <input type="hidden" name="_method" value="delete">
	    				<input type="submit" value="Delete" class="btn waves-effect waves-light purple blue lighten-2" style="padding-top: 9px;">
					</form>
				</td>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table> --%>
</div>



