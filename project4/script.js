$(document).ready(function(){
// Document Load

    // let movieTitle = "akira"

    // $.getJSON("http://www.omdbapi.com/?i=tt3896198&apikey=140382f9&s=" + movieTitle)
    //     .done(function(data) {
    //         console.log(data);
    //     });

    $.getJSON("movielist.json")
    .done(function(data) {
        for (let i = 0; i<data.length; i++) {
            $('.flex-container').append(
                '<a href="movies/movie' + i + '.html" class="movie-button">' + data[i].Title +'</a>')
        }

    });


// Document Load    
});