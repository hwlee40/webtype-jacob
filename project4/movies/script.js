$(document).ready(function(){
// Document Load

    let movieTitle = "tt0470752"

    $.getJSON("http://www.omdbapi.com/?apikey=140382f9&i=" + movieTitle)
        .done(function(data) {
            console.log(data);

            $('.year0').append('<div>' + data['Released'] + '</div>')
            $('.genre0').append('<div>' + data['Genre'] + '</div>')
            $('.plot0').append('<div>' + data['Plot'] + '</div>')
            $('.runtime0').append('<div>' + data['Runtime'] + '</div>')
            $('.director0').append('<div>' + data['Director'] + '</div>')
            

        });

    $.getJSON("../movielist.json")
    .done(function(data) {
        for (let i = 0; i<data.length; i++) {
            $('.list0').append(
                '<a href="movie' + i + '.html" class="movie-button">' + data[i].Title +'</a>')
        }

        $('.title0').append('<div>' + data[0].Title + '</div>')

        $('.comments0').append('<div>' + data[0].Comments + '</div>')
            $('.watched0').append('<div>' + data[0].Watched + '</div>')
        


    });


// Document Load    
});