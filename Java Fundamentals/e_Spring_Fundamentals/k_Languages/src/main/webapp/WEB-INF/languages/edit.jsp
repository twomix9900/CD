<%@ page isErrorPage="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<form:form action="/languages/${language.id}" method="post" modelAttribute="language">
	<input type="hidden" name="_method" value="put">
	<h1><c:out value="${language.name}"/></h1>
    <p>
        <form:label path="name">Name</form:label>
        <form:errors path="name"/>
        <form:input path="name"/>
    </p>
    <p>
        <form:label path="creator">Creator</form:label>
        <form:errors path="creator"/>
        <form:input path="creator"/>
    </p>
    <p>
        <form:label path="currentVersion">Version</form:label>
        <form:errors path="currentVersion"/>
        <form:input path="currentVersion"/>
    </p> 
	<input type="submit" value="Submit"/>
</form:form>    

<form action="/languages/${language.id}" method="post">
	<input type="hidden" name="_method" value="delete">
	<input type="submit" value="Delete">
</form>