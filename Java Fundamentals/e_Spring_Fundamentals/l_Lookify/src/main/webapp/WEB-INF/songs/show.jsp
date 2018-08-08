<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
<div class="container">
	<h4>Song details</h4>
	<p>Title: <c:out value="${song.title}"/></p>
	<p>Artist: <c:out value="${song.artist}"/></p>
	<p>Rating (1-10): <c:out value="${song.rating}"/></p>
	<form action="/songs/${song.id}" method="post">
		<input type="hidden" name="_method" value="delete">
		<input type="submit" value="Delete" class="btn waves-effect waves-light purple blue lighten-2" style="padding-top: 9px;">
	</form>
</div>
