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

	    	  //Ajaxの処理はここに

	    	  var modal = $(this)  //モーダルを取得
	    	  modal.find('.modal-title').text('New message to ' + recipient) //モーダルのタイトルに値を表示
	    	  modal.find('.modal-body input#recipient-name').val(recipient) //inputタグにも表示
	    	})
	  });

});