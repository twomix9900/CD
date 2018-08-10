<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h3><c:out value="${product.name}"/></h3>
	<h3>Categories</h3>

    <c:forEach items="${productCategories}" var="category">
        <p><c:out value="${category.name}"/></p>
    </c:forEach>
    <form:form action="/products/addCategoryToProduct" method="post" modelAttribute="product">
		<form:select name="category" path="categories">
			<c:forEach items="${allCategories}" var="category">
			    <option value="${category.id}" name="categoryId"/><c:out value="${category.name}"/></option>
		    </c:forEach>
		    <div style="display: block;">
		    	<input type="hidden" name="productId" value="${product.id}">
		    	<p><input type="submit" value="Submit"/></p>
		    </div>
		</form:select>
	</form:form>
</div>



