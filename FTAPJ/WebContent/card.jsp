<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
<div id="list_area">
<div class="list_card">
	<div class="list_title">
		<p>hogehoge</p>
	</div>

	<div class="list_limit">
		<p>期限:4/1  残り〇日</p>
	</div>

	<div class="list_description">
		<p>内容が入ります</p>
	</div>

	<div class="list_submission">
		<p>提出先：file pass</p>
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


</div>

// ----------------------------- test -----------------------------------


<div class="list_card">
	<div class="list_title">
		<p>hogehoge</p>
	</div>

	<div class="list_limit">
		<p>期限:4/1  残り〇日</p>
	</div>

	<div class="list_description">
		<p>内容が入ります</p>
	</div>

	<div class="list_submission">
		<p>提出先：file pass</p>
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


</div>

<div class="list_card">
	<div class="list_title">
		<p>hogehoge</p>
	</div>

	<div class="list_limit">
		<p>期限:4/1  残り〇日</p>
	</div>

	<div class="list_description">
		<p>内容が入ります</p>
	</div>

	<div class="list_submission">
		<p>提出先：file pass</p>
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


</div>

<div class="list_card">
	<div class="list_title">
		<p>hogehoge</p>
	</div>

	<div class="list_limit">
		<p>期限:4/1  残り〇日</p>
	</div>

	<div class="list_description">
		<p>内容が入ります</p>
	</div>

	<div class="list_submission">
		<p>提出先：file pass</p>
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


</div>

<div class="list_card">
	<div class="list_title">
		<p>hogehoge</p>
	</div>

	<div class="list_limit">
		<p>期限:4/1  残り〇日</p>
	</div>

	<div class="list_description">
		<p>内容が入ります</p>
	</div>

	<div class="list_submission">
		<p>提出先：file pass</p>
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


</div>



// ----------------------------- test --------------------------------------
</div>
</body>
</html>