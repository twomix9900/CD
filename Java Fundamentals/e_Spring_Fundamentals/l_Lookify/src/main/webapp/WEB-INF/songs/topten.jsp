<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<div class="row">
		<a href="/songs/new">Add New&nbsp;&nbsp;&nbsp;&nbsp;</a>
		<a href="">Search Artists</a>
	</div>
	<h3>Top ten songs</h3>
	<table>
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th>Rating</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach begin="0" end="9" items="${songs}" var="song">
	        <tr>
	            <td><a href="/songs/${song.id}"><c:out value="${song.title}"/></a></td>
	            <td><c:out value="${song.artist}"/></td>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table>
</div>



