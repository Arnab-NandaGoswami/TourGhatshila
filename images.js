var folder = "Images/";
screen_width = screen.width;
num=0
if(screen_width>=1000){
    num=10;
} else if(screen_width>=800){
    num=15;
} else if(screen_width>=600){
    num=20;
} else if(screen_width>=400){
    num=25;
} else{
    num=30;
}
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(JPG?G|PNG)$/) ) {
                $("body").append( "<img id='" + i + "'" + " style='"+"width: "+num+"%;height: "+num+"%;padding:5px;' " + "src='"+ val +"' onclick='myFunction(this)'>" );
            } 
        });
    }
});

function myFunction(imgs) {
    window.open(imgs.src, '_blank');
}
