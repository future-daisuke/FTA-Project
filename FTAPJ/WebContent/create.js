/**
 *
 */
//期限フォームに今の日付を表示
var dt = new Date();
var y = dt.getFullYear();
var m  = dt.getMonth() + 1;
var d  = dt.getDate();
//document.limit.dt.value = y+'年'+m+"月"+d+"日";




	function executeAjax() {
		'use strict';
		console.log('Ajax!!');
		//フォームの値を取得
		var title = document.getElementById('title').value;
		var des = document.getElementById('description').value;
		var submit = document.getElementById('submit').value;
		var limit = document.getElementById('limit').value;
		//取得したか確認
		console.log(title);
		console.log(des);
		console.log(submit);
		console.log(limit);
		//データを指定
		var requestQuery = {
				title  : title,
				description : des,
				submit : submit,
				limit : limit
				};
		console.dir(requestQuery);
		$.ajax({


			type : 'POST',
			url : '/FTAPJ/api/CreateServlet',
			dataType : 'json',
			data : requestQuery,
			success : function(json) {
				console.dir(json);
				//取得した値を表示
				console.log('post is success');
				//成功したらリストページに遷移する
				document.location.href = "/FTAPJ/index.jsp";
			 }

		});
	}


$(document).ready(function() {
	'use strict';

$("#submit_btn").bind('click',executeAjax);
});