<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<h1><c:out value="${language.name}"/></h1>
<p>Name: <c:out value="${language.name}"/></p>
<p>Creator: <c:out value="${language.creator}"/></p>
<p>Version: <c:out value="${language.currentVersion}"/></p>
<form action="/languages/${language.id}" method="post">
	<input type="hidden" name="_method" value="delete">
	<input type="submit" value="Delete">
</form>
<form action="/languages/${language.id}/edit" method="get">
	<input type="submit" value="Edit">
</form>