<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>タスクリスト</title>
</head>
<body>
<div class="main_contents">
	<div class="container">
		<div class="row">
			<div class="new_create_btn">
				<button type="button" class="create_task_btn mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick="location.href='/FTAPJ/create.html'">
					<i class="material-icons">add</i>
				</button>
			</div>
			<div class="clear"></div>
			<div class="contents_area">
				<jsp:include page="card.jsp" />
			</div>
		</div>
	</div>
</div>
</body>
</html>