<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>タスクリスト</title>
</head>
<body>
<div class="container">
	<div class="row">
		<div class="new_create_btn">
			<input type="button" class="mdl-button mdl-js-button mdl-button--primary" value="新規作成" onClick="location.href='/FTAPJ/create.html'">
		</div>
		<div class="contents_area">
			<jsp:include page="card.jsp" />
		</div>
	</div>
</div>
</body>
</html>