<!-- で囲まれた領域がJSPのコードです -->
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ page import="app.Employee"%>
<%@ page import="java.util.List"%>
<!DOCTYPE html5>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
	<div id="wrap">
		<div id="header">
			<h1>
				<a href="./">human resource system</a>
			</h1>
		</div>
		<div id="main">
			<div id="content">
				<p>検索ワードを入力して下さい</p>
				<div id="menu">
					<form action="list" method="GET">
						<input type="text" name="q" value="" />
						<input type="submit" value="検索" />
					</form>
				</div>
				<div id="list">
					<%
						@SuppressWarnings("unchecked")
						List<Employee> list = (List<Employee>) request.getAttribute("list");

						// ログイン後の遷移ではlistがnullなので条件追加
						for (int i = 0; list != null && i < list.size(); i++) {
							Employee emp = list.get(i);

							request.setAttribute("emp", emp);
					%>
					<div id="image">
						<p>${emp.name}さん</p>
						<a href="single?q=${emp.id}">
							<img src="${emp.image}" alt="${emp.name}" />
						</a>
					</div>
					<%
						}
					%>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
