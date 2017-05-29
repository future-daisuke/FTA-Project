<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ page import="model.Task" %>
 <%@ page import="java.util.ArrayList" %>
 <%@ page import="java.util.List" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="masonry.pkgd.min.js"></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<script  type="text/javascript" src="card.js"></script>
<title>Insert title here</title>
</head>
<body>

<div id="list_area">
<%
	List<Task> taskContents = (List<Task>)session.getAttribute("taskList");
	for (int i = 0; taskContents != null && i < taskContents.size(); i++) {
			Task task = taskContents.get(i);
			request.setAttribute("task",task);


%>
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
		<p>提出先：<%= task.getSubmit()%></p>
	</div>

	<div class="work_time">
		<p>作業時間： 10分</p>
	</div>

	<div class="estimate_time">
		<p>見積時間 60分</p>
	</div>

	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal_${task.getId()}" data-whatever="${task.getId()}">
     タスク詳細
     </button>
     </div>

     <!-- モーダル部分 -->
     <div class="modal fade" id="exampleModal_${task.getId()}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">New message</h4>
      </div>
      <div class="modal-body">
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
			<p>提出先：<%= task.getSubmit()%></p>
		</div>

		<div class="work_time">
			<p>作業時間： 10分</p>
		</div>

		<div class="estimate_time">
			<p>見積時間 60分</p>
		</div>
      </div>
      <div class="modal-footer" id="footer">
      <div id="task_id_${task.getId()}" class="${task.getStatus()}" >
      </div>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
     <!-- モーダル部分終了  -->
<% } %>
</div>
</body>
</html>