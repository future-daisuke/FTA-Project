/**
 *
 */

// 編集前の情報を取得・表示
function executeAjax() {
	'use strict';

	// クエリパラメータからタスクIDを取得
	/*  //クエリ送信してないのでコメントアウトしている
	var arg = new Object;
	var pair = location.search.substring(1).split('&');
	var kv = pair[i].split('=');
	arg[kv[0]] = kv[1];
	*/
	// key「id」：value「1」等
	console.dir(arg);

	$.ajax({

		type : 'GET',
		url : '/FTAPJ/api/UpadateServlet',
		dataType : 'json',
		data : arg,
		success : function(json) {
			// 取得した値を表示
			console.dir(json);

			$('#updateTable').append(+
					'<tr><th>ToDoタイトル</th><td><input id="title" type="text" name="title" value="'+json.title+'" required></td>>/tr>'+
					'<tr><th>詳細</td><td><input id="description" type="text" name="description" value="'+json.description+'"></td></tr>'+
					'<tr><th>提出先</td><td><input id="submit" type="text" name="submit" value="'+json.submit+'"></td></tr>'+
					'<tr><th>期限</td><td><input id="limit" type="date" name="limit" value="'+json.limitYMD+'" required></td></tr>'
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
	/*  //クエリ送信してないのでコメントアウトしている
	var arg = new Object;
	var pair = location.search.substring(1).split('&');
	var kv = pair[i].split('=');
	*/
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
		limit : limit
		// id : kv[1]
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