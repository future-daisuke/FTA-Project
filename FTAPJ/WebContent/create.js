/**
 *
 */
//期限フォームに今の日付を表示
 var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var toTargetDigits = function (num, digits) {
    num += ''
    while (num.length < digits) {
      num = '0' + num
    }
    return num
  }

  var yyyy = toTargetDigits(year, 4)
  var mm = toTargetDigits(month, 2)
  var dd = toTargetDigits(day, 2)
  console.log(yyyy+'-'+mm+'-'+dd)



//ログイン認証
function loginCheckAjax() {
	'use strict';

	$.ajax({
		type : 'POST',
		url : '/FTAPJ/api/LoginCheckServlet',
		dataType : 'json',
		success : function(json) {
			if (json.syainId == null || json.syainId =="") {
				// ログイン画面へ遷移
				location.replace('/FTAPJ/indexLug.html');
			}
		}
	});
}



	function executeAjax() {
		'use strict';
		console.log('Ajax!!');
		//フォームの値を取得
		var title = document.getElementById('title').value;
		var des = document.getElementById('description').value;
		var submit = document.getElementById('submit').value;
		var limit = document.getElementById('display').value;
		//取得したか確認
		console.log(title);
		console.log(des);
		console.log(submit);
		console.log(limit);
		//データを指定
		var requestQuery = {
				title : escapeHTML(title),
				description : escapeHTML(des),
				submit : escapeHTML(submit),
				limit : escapeHTML(limit),
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
				document.location.href = "/FTAPJ/index.html";
			 },  error: function(XMLHttpRequest, textStatus, errorThrown) {
					//レスポンスがなければこちら
				 	alert('入力文字数が多いか必須項目の入れ忘れです');
				}

		});
	}


//escape処理
function escapeHTML(str) {
		 str = str.replace(/&/g, '&amp;');
		 str = str.replace(/</g, '&lt;');
		 str = str.replace(/>/g, '&gt;');
		 str = str.replace(/"/g, '&quot;');
		 str = str.replace(/'/g, '&#39;');
		 return str;
	}

$(document).ready(function() {
	'use strict';

	loginCheckAjax();

	$('#limitform').append('<textarea id="display" rows="1" disabled>'+yyyy+'/'+mm+'/'+dd+'</textarea>');
	$("#datepicker").datepicker("show");

$("#submit_btn").bind('click',executeAjax);
});