var folder = "videos/";
screen_width = screen.width;
num=0
if(screen_width>=1000){
    num=25;
} else if(screen_width>=800){
    num=45;
} else if(screen_width>=600){
    num=50;
} else{
    num=100;
}
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(MP4|MPEG|TS|mp4|mpeg|ts)$/) ) {
                $("body").append( "<a href='"+val+"' target_='blank'><video id='" + i + "'" + " style='"+"width: "+num+"%;height: "+num+"%;padding:5px;' controls autoplay muted loop> " + "<source src='"+ val +"'></video></a>");
                console.log(val);
            } 
        });
    }
});
