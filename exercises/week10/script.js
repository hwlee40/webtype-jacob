$(document).ready(function(){
    $.getJSON("https://randomfox.ca/floof/?ref=apilist.fun")
        .done(function(data) {
            console.log(data);
            let imageurl = data.image;
            console.log(imageurl);

            document.getElementById("foximage").src=imageurl;
        });
});