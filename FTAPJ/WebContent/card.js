$(document).ready(function() {


	$(function(){
		$('#list_area').masonry({	//ここには敷き詰めたい要素を囲うidなど指定します。
			itemSelector : '.list_card'	//ここに敷き詰めたい要素のclassを指定します。
		});
	});

	$(function() {
	    'use strict';
	    // JavaScript で表示
	    $('#staticModalButton').on('click', function() {
	      $('#staticModal').modal();
	    });

	    $('#exampleModal').on('show.bs.modal', function (event) {
	    	  var button = $(event.relatedTarget) //モーダルを呼び出すときに使われたボタンを取得
	    	  var recipient = button.data('whatever') //data-whatever の値を取得
	    	  var sep = document.getElementById('#task_id_${task.getId()}');//指定したidの要素を取得
	    	  var status = sep.split('"')[3];//ステータスを表示する部分だけを取得

	    	  //Ajaxの処理はここから
	    	  //モーダル呼び出すと同時に完了ボタンと削除ボタンをステータスに合わせて設置
	    	  if(status == '未完了'){
	    		  $('#footer').append(
	    				  '<button type="button" class="com" value="com" onClick="comChange();">完了</button>'+
	    				  '<button type="button" class="del" value="del" onClick="delChange();">削除</button>'
	    		  );
	    	  }else if(status == '完了'){
	    		  $('#footer').append(
	    				  '<button type="button" class="com" value="com" onClick="comChange();">完了解除</button>'+
	    				  '<button type="button" class="del" value="del" onClick="delChange();">削除</button>'
	    		  );
	    	  }else if(status == '削除'){
	    		  $('#footer').append(
	    				  '<button type="button" class="com" value="com" onClick="comChange();">完了解除</button>'+
	    				  '<button type="button" class="del" value="del" onClick="delChange();">削除解除</button>'
	    		  );
	    	  }
	    	  //完了または完了解除ボタンを押すと実行
	    	  function comChange() {
	    			var id = recipient;
	    			var requestQuery={
	    		    		ID  : id
	    		    };
	    			//ステータスが完了であれば完了解除処理にする設定
	    			var st = 1;
	    			if(status == '完了'){
	    				st = 2;
	    				console.log(st);
	    				requestQuery['status'] = st;
	    			}else{
	    				requestQuery['status'] = st;
	    			}
	    			$.ajax({
	    				type : 'POST',
	    				url : '/FTAPJ/api/CompleteServlet',
	    				dataType : 'json',
	    				data : requestQuery,
	    				success : function(json) {
	    					//取得した値をサーブレットに渡す
	    				console.log('post is success');
	    				},  error: function(XMLHttpRequest, textStatus, errorThrown) {
	    			 		//レスポンスがなければこちら

	    		         }
	    			});
	    		}
	    	  //削除または削除解除ボタンを押すと実行
	    		function delChange() {
	    			var id = recipient;
	    			var requestQuery={
	    		    		ID  : id
	    		    };
	    			//ステータスが削除であれば削除解除処理にする設定
	    			var st = 1;
	    			if(status == '削除'){
	    				st = 3;
	    				console.log(st);
	    				requestQuery['status'] = st;
	    			}else{
	    				requestQuery['status'] = st;
	    			}
	    			$.ajax({
	    				type : 'POST',
	    				url : '/FTAPJ/api/DeleteServlet',
	    				dataType : 'json',
	    				data : requestQuery,
	    				success : function(json) {
	    					//取得した値をサーブレットに渡す
	    				console.log('post is success');
	    				},  error: function(XMLHttpRequest, textStatus, errorThrown) {
	    			 		//レスポンスがなければこちら

	    		         }
	    			});
	    		}
	    	  var modal = $(this)  //モーダルを取得
	    	  modal.find('.modal-title').text('New message to ' + recipient) //モーダルのタイトルに値を表示
	    	  modal.find('.modal-body input#recipient-name').val(recipient) //inputタグにも表示
	    	})
	  });

});

