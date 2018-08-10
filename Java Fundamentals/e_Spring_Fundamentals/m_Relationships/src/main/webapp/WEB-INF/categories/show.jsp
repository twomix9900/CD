<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

<div class="container">
	<h3><c:out value="${category.name}"/></h3>
	<h3>Products</h3>

    <c:forEach items="${categoryProducts}" var="product">
        <p><c:out value="${product.name}"/></p>
    </c:forEach>
    <form:form action="/categories/addProductToCategory" method="post" modelAttribute="category">
		<form:select name="product" path="products">
			<c:forEach items="${allProducts}" var="product">
			    <option value="${product.id}" name="productId"/><c:out value="${product.name}"/></option>
		    </c:forEach>
		    <div style="display: block;">
		    	<input type="hidden" name="categoryId" value="${category.id}">
		    	<p><input type="submit" value="Submit"/></p>
		    </div>
		</form:select>
	</form:form>
</div>



