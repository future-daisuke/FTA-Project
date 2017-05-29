<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ page import="model.Task" %>
 <%@ page import="java.util.ArrayList" %>
 <%@ page import="java.util.List" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="masonry.pkgd.min.js"></script>
<script>
$(function(){
	$('#list_area').masonry({	//ここには敷き詰めたい要素を囲うidなど指定します。
		itemSelector : '.list_card'	//ここに敷き詰めたい要素のclassを指定します。
	});
});
</script>
<title>Insert title here</title>
</head>
<body>
<%
		List<Task> taskContents = (List<Task>)session.getAttribute("taskList");
		System.out.println("card.jspが呼ばれました");
		System.out.println(taskContents);
		for (int i = 0; taskContents != null && i < taskContents.size(); i++) {
			Task task = taskContents.get(i);

%>
<div id="list_area">
<div class="list_card">
	<div class="list_title">
		<p><%= task.getTitle() %></p>
	</div>

	<div class="list_limit">
		<p>期限: <%= task.getLimitYMD() %></p>
	</div>

	<div class="list_description">
		<p><%= task.getDescription() %></p>
	</div>

	<div class="list_submission">
		<p>提出先：<%= task.getSubmit() %></p>
	</div>

	<div class="work_time">
		<p>作業時間： 10分</p>
	</div>

	<div class="estimate_time">
		<p>見積時間 60分</p>
	</div>

	<div class="to_detail_link">
	<p>>>詳細>></p>
	</div>
	<% } %>

</div>

</div>
</div>
</body>
</html>