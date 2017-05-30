$(document).ready(function() {


	$(function(){
		$('#list_area').masonry({	//ここには敷き詰めたい要素を囲うidなど指定します。
			itemSelector : '.list_card'	//ここに敷き詰めたい要素のclassを指定します。
		});
	});
	console.log('modal')
	$(function() {
	    'use strict';
	    // JavaScript で表示
	    $('#staticModalButton').on('click', function() {
	      $('#staticModal').modal();
	    });
	    console.log('modal start');
	    $('#exampleModal').on('show.bs.modal', function (event) {
	    	console.log('exampleModal');
	    	  var button = $(event.relatedTarget) ;//モーダルを呼び出すときに使われたボタンを取得
	    	  var recipient = button.data('whatever'); //data-whatever の値を取得
	    	  console.log(recipient);
	    	  var statusValue = 'task_status_'+recipient;
	    	  console.log(statusValue);
	    	  var status = document.getElementById(statusValue).value;//指定したidの要素を取得
	    	  console.log(status);

	    	  var modal = $(this)  //モーダルを取得
	    	  modal.find('.modal-title').text('New message to ' + recipient) //モーダルのタイトルに値を表示
	    	  modal.find('.modal-body input#recipient-name').val(recipient) //inputタグにも表示

	    	  //Ajaxの処理はここから
	    	  //モーダル呼び出すと同時に完了ボタンと削除ボタンをステータスに合わせて設置
	    	  if(status == '未完了'){
	    		  $('#footBtn').empty();
	    		  $('#footBtn').append(
	    				  '<button type="button" id="com" data-dismiss="modal" value="'+ recipient +'" onClick="comChange();">完了</button>'+
	    				  '<button type="button" id="del" data-dismiss="modal" value="'+  recipient +'" onClick="delChange();">削除</button>'
	    		  );
	    		  console.log('未完了の人はこっち！');
	    	  }else if(status == '完了'){
	    		  $('#footBtn').empty();
	    		  $('#footBtn').append(
	    				  '<button type="button" id="com" data-dismiss="modal" value="'+  recipient +'" onClick="comChange();">完了解除</button>'+
	    				  '<button type="button" id="del" data-dismiss="modal" value="'+ recipient +'" onClick="delChange();">削除</button>'
	    		  );
	    		  console.log('完了の人はこっち！');
	    	  }else if(status == '削除'){
	    		  $('#footBtn').empty();
	    		  $('#footBtn').append(
	    				  '<button type="button" id="com" data-dismiss="modal" value="'+  recipient +'" onClick="comChange();">完了</button>'+
	    				  '<button type="button" id="del" data-dismiss="modal" value="'+ recipient +'" onClick="delChange();">削除解除</button>'
	    		  );
	    		  console.log('未完了の人はこっち！');
	    	  }
	    	})
	  });

});


//完了または完了解除ボタンを押すと実行
function comChange() {
	console.log('完了しようとしています');
	var id = document.getElementById('com').value;
	console.log(id);
	var requestQuery={
			ID  : id
	};
	console.log('完了はじめます');
	//ステータスが完了であれば完了解除処理にする設定
	var st = 1;
	var statusValue = 'task_status_'+id;
	var status = document.getElementById(statusValue).value;//指定したidの要素を取得
	console.log(status);
	if(status == '完了'){
		st = 2;
		console.log(st);
		requestQuery['status'] = st;
		alert('このタスクを未完了ステータスにしました。');
	}else{
		console.log(st);
		requestQuery['status'] = st;
		alert('このタスクを完了ステータスにしました。');
	}
	console.log(requestQuery);
	$.ajax({
		type : 'POST',
		url : '/FTAPJ/api/CompleteServlet',
		dataType : 'json',
		data : requestQuery,
		success : function(json) {
			//取得した値をサーブレットに渡す
			console.log('post is success');
			$('#staticModal').modal('hide');
			document.location.href="/FTAPJ/index.html";
		},  error: function(XMLHttpRequest, textStatus, errorThrown) {
			//レスポンスがなければこちら

		}
	});
}
//完了または完了解除ボタンを押すと実行
function comC(id) {
	console.log('完了しようとしています');
	//var btnId = $(t)
	//var id = document.getElementById('btn_com_id').value;
	console.log(id);
	var requestQuery={
			ID  : id
	};
	console.log('完了はじめます');
	//ステータスが完了であれば完了解除処理にする設定
	var st = 1;
	var btn = 'btn_'+ id;
	var status = document.getElementById(btn).value;//指定したidの要素を取得
	console.log(status);
	if(status == '完了'){
		st = 2;
		console.log(st);
		requestQuery['status'] = st;
		alert('このタスクを未完了ステータスにしました。');
	}else{
		console.log(st);
		requestQuery['status'] = st;
		alert('このタスクを完了ステータスにしました。');
	}
	console.log(requestQuery);
	$.ajax({
		type : 'POST',
		url : '/FTAPJ/api/CompleteServlet',
		dataType : 'json',
		data : requestQuery,
		success : function(json) {
			//取得した値をサーブレットに渡す
			console.log('post is success');
			$('#staticModal').modal('hide');
			document.location.href="/FTAPJ/index.html";
		},  error: function(XMLHttpRequest, textStatus, errorThrown) {
			//レスポンスがなければこちら

		}
	});
}
//削除または削除解除ボタンを押すと実行
function delChange() {
	console.log('削除しようとしています');
	var id = document.getElementById('del').value;
	console.log(id);
	var requestQuery={
			ID  : id
	};
	//ステータスが削除であれば削除解除処理にする設定
	var st = 1;
	var statusValue = 'task_status_'+id;
	var status = document.getElementById(statusValue).value;//指定したidの要素を取得
	console.log(status);
	if(status == '削除'){
		st = 3;
		console.log(st);
		requestQuery['status'] = st;
		alert('このタスクを未完了ステータスにしました。');
		$('#staticModal').modal('hide');
	}else{
		requestQuery['status'] = st;
		console.log(st);
		alert('このタスクを削除ステータスにしました。');
	}
	console.log(requestQuery);
	$.ajax({
		type : 'POST',
		url : '/FTAPJ/api/DeleteServlet',
		dataType : 'json',
		data : requestQuery,
		success : function(json) {
			//取得した値をサーブレットに渡す
			console.log('post is success');
			$('#staticModal').modal('hide');
			document.location.href="/FTAPJ/index.html";
		},  error: function(XMLHttpRequest, textStatus, errorThrown) {
			//レスポンスがなければこちら

		}
	});
}


//$(document).ready(function() {
//	console.log('comボタン');
//	var id = document.getElementById('btn_com_id').value;
//	var status = document.getElementById('btn_com_status').value;
//	console.log(id+'のステータスは'+status);
//	if(status == '完了'){
//		$('#comBtn').append(
//				'<button type="button" id="com" class="btn btn-primary" data-dismiss="modal" value="'+ id +'" onClick="comChange();" data-toggle="modal" data-target="#exampleModal" data-whatever="${task.getId()}">完了解除</button>'
//		);
//	}else{
//		$('#comBtn').append(
//				'<button type="button" id="com" class="btn btn-primary" data-dismiss="modal" value="'+ id +'" onClick="comChange();" data-toggle="modal" data-target="#exampleModal" data-whatever="${task.getId()}">完了</button>'
//		);
//	}
//})
//