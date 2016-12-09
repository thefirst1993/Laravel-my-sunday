/*SHOW PHOTO BEFORE UPLOAD*/
$("#uploadphoto").on('change', function () {

    if (typeof (FileReader) != "undefined") {

        var image_holder = $("#showphoto");
        image_holder.empty();

        var reader = new FileReader();
        reader.onload = function (e) {
            $("<img />", {
                "src": e.target.result,
                "class": "thumb-image",
                "height":"100px"
            }).appendTo(image_holder);

        }
        image_holder.show();
        reader.readAsDataURL($(this)[0].files[0]);
    } else {
        alert("This browser does not support FileReader.");
    }
});

window.onload = function () {
    var fileUpload = document.getElementById("files");
    fileUpload.onchange = function () {
        if (typeof (FileReader) != "undefined") {
            var dvPreview = document.getElementById("preview-area");
            dvPreview.innerHTML = "";
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
            for (var i = 0; i < fileUpload.files.length; i++) {
                var file = fileUpload.files[i];
                if (regex.test(file.name.toLowerCase())) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var img = document.createElement("IMG");
                        img.height = "100";
                        img.width = "100";
                        img.src = e.target.result;
                        dvPreview.appendChild(img);
                    }
                    reader.readAsDataURL(file);
                } else {
                    alert(file.name + " is not a valid image file.");
                    dvPreview.innerHTML = "";
                    return false;
                }
            }
        } else {
            alert("This browser does not support HTML5 FileReader.");
        }
    }
};
/*only input nummber by class nummber*/
$('.number').keypress(function(event) {
  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
    event.preventDefault();
  }
});
/*add % to percen promotion*/
$('.percen').keypress(function(event) {
    if($(this)!=null || $(this)!=''){
        $(this).val().append('%');
    }
});

/*color picker*/
$(document).ready(function() {
    var colors=[];
    $('#colopicker').colorPalette()
        .on('selectColor', function(e) {
            colors.push(e.color);
            var str='';
            for (var i = 0; i < colors.length; i++) {
               str+='<p class="color-item" style="background: '+colors[i]+';" data-color="'+colors[i]+'"></p>';
            }
            $(".show-color").html(str);
            $("#color").val(colors.toString());

            $(".color-item").click(function(){
            var color=$(this).attr('data-color');        
            if(color!=''){
                for (var i = 0; i < colors.length; i++) {
                    if(colors[i]==color){
                        colors.splice(i,1);
                        $(this).hide();
                        $("#color").val(colors.toString());
                    }
                };
            }
        });
    });

    if($('#color').val()!='' && $('#color').val()!=null){
        colors=$("#color").val().toString().split(',');
    }
    $(".color-item").click(function(){        
        var color=$(this).attr('data-color');             
        if(color!=''){
            for (var i = 0; i < colors.length; i++) {
                if(colors[i]==color){
                    colors.splice(i,1);
                    $(this).hide();
                    $("#color").val(colors.toString());
                }
            };
        }
    });

});

/*Show giá khuyến mãi*/
$(document).ready(function() {

    $("#price").keyup(function(){
        var percen=$("#percen_promotion").val();
        if(percen!=null && percen!=''){
            result=$(this).val() - ($(this).val()*percen)/100;
            $("#sale_price").val(result);
        }
    });
   $("#percen_promotion").keyup(function(){
        var price=$("#price").val();
        if(price!=null && price!=''){
            result=price - (price*$(this).val()/100);
            $("#sale_price").val(result);
        }
    });

    var gia=$("#price").val();
    var phantram=$("#percen_promotion").val();
    if(gia!=null && phantram !=null){
        var ketqua=gia-(gia*phantram/100);
        $("#sale_price").val(ketqua);        
        return false;
    }
});