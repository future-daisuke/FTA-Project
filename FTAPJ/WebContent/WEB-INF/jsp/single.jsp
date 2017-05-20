<!-- で囲まれた領域がJSPのコードです -->
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ page import="app.Employee"%>
<jsp:useBean id="emp" scope="request" class="app.Employee" />
<!DOCTYPE html5>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
	<div id="header">
		<h1>
			<a href="./">human resource system</a>
		</h1>
	</div>
	<div id="main">
		<div id="content">
			<div id="menu">
				<form action="list" method="GET">
					<input type="text" name="q" value="" />
					<input type="submit" value="検索" />
				</form>
			</div>
			<div id="profile">
				<h2>${emp.name}さん</h2>
				<div id="image">
					<img src="${emp.image}" />
				</div>
				<div id="table">
					<table>
						<tr>
							<th>社員番号</th>
							<td>${emp.id}</td>
						</tr>
						<tr>
							<th>生年月日</th>
							<td>${emp.birthYmd}</td>
						</tr>
						<tr>
							<th>出身地</th>
							<td>${emp.address}</td>
						</tr>
						<tr>
							<th>出身大学</th>
							<td>${emp.college}</td>
						</tr>
						<tr>
							<th>専攻</th>
							<td>${emp.major}</td>
						</tr>
						<tr>
							<th>取得資格</th>
							<td>${emp.license}</td>
						</tr>
					</table>
				</div>
				<div id="free_comment">
					<span>${emp.comment}</span>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
