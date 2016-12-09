$(document).ready(function() {
	delete_photo();
	function delete_photo(){
		$(".item-img").click(function(){			
			var id=$(this).attr('data-id');	
			var token=$('form').find("input[name='_token']").val();
			var current=$(this);
			$.ajax({
				url: base_url+'/admin/photo/destroy/'+id,
				type: 'POST',
				dataType: 'json',
				data:{_token:token}
			})
			.done(function(data) {
				$(current).remove();
				console.log(data);
			})
			.fail(function() {
				console.log("error");
			})
		});
	}

	$("#morefiles").change(function(){
		var data=new FormData();
		var token=$('form').find('input[name="_token"]').val();		
		var id =$(this).attr('data-id');
		var type =$(this).attr('data-type');
		data.append("_token", token);
		data.append("id", id);
		data.append("type", type);
		$.each($(this)[0].files, function(i, file) {
			 data.append('file-'+i, file);
		});
		$.ajax({  
			url: base_url+'/admin/photo/store',  
			type: "POST",  
			data: data,  
			cache: false,
			processData: false,  
			contentType: false, 
			dataType: 'json',
			context: this,
		    success: function (respon) {
		     	if(respon){
		     		var str = '';
		     		for (var i = 0; i < respon.length; i++) {
		     			str+='<div class="item-img" data-id="'+respon[i]['id']+'"><img src="'+base_url+'/public/upload/hinhthem/'+respon[i]['photo']+'" height="100px"></div>';
		     		}
		     		$("#preview-area").append(str);
		     		delete_photo();
		          	console.log('success');
		     	}
		    }
		}); 
	});
});