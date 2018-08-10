<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h1>Songs by artist: <c:out value="${song.artist}"/></h1>
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
	</table>
</div>
