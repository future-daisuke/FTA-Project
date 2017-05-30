/**
 *
 */

// 編集前の情報を取得・表示
function executeAjax() {
	'use strict';

	// クエリパラメータからタスクIDを取得
	//クエリ送信してないのでコメントアウトしている
	var arg = new Object;
	var pair = location.search.substring(1).split('&');
	var kv = pair[0].split('=');
	arg[kv[0]] = kv[1];
	// key「id」：value「1」等
	console.dir(arg);

	$.ajax({

		type : 'GET',
		url : '/FTAPJ/api/UpdateServlet',
		dataType : 'json',
		data : arg,
		success : function(json) {
			// 取得した値を表示
			console.dir(json);

			$('#updateTable').append(
					'<div><label for="title">ToDoタイトル：</label><input id="title" class="form-control"  type="text" name="title" value="'+json.title+'" required></div>'+
					'<div><label for="title">概要：</label><input id="description" class="form-control" type="text" name="description" value="'+json.description+'" ></div>'+
					'<div><label for="title">提出先：</label><input id="submit" class="form-control" type="text" name="submit" value="'+json.submit+'" ></div>'+
					'<div><label for="title">期限：</label><input id="limit"class="form-control"  type="date" name="limit" value="'+json.limitYMD+'" required></div>'
			);
		}

	});

}

// 編集内容を登録
function updateAjax() {
	'use strict';
	console.log('Ajax!!');
	// フォームの値を取得
	var title = document.getElementById('title').value;
	var des = document.getElementById('description').value;
	var submit = document.getElementById('submit').value;
	var limit = document.getElementById('limit').value;
	//クエリ送信してないのでコメントアウトしている
	var arg = new Object;
	var pair = location.search.substring(1).split('&');
	var kv = pair[0].split('=');
	// 取得したか確認
	console.log(title);
	console.log(des);
	console.log(submit);
	console.log(limit);
	// データを指定
	var requestQuery = {
		title : title,
		description : des,
		submit : submit,
		limit : limit,
		id : kv[1]
	};
	console.dir(requestQuery);
	$.ajax({

		type : 'POST',
		url : '/FTAPJ/api/UpdateServlet',
		dataType : 'json',
		data : requestQuery,
		success : function(json) {
			console.dir(json);
			// 取得した値を表示
			console.log('post is success');
			// 成功したらリストページに遷移する
			document.location.href = "/FTAPJ/index.jsp";
		}

	});
}

$(document).ready(function() {
	'use strict';

	// 初期表示用
	executeAjax();

	$("#submit_btn").bind('click', updateAjax);
});