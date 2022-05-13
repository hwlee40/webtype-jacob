$(document).ready(function(){
// Document Load

    // let movieTitle = "akira"

    // $.getJSON("http://www.omdbapi.com/?i=tt3896198&apikey=140382f9&s=" + movieTitle)
    //     .done(function(data) {
    //         console.log(data);
    //     });
    let opacity;

    $.getJSON("movielist.json")
    .done(function(data) {
        for (let i = 0; i<data.length; i++) {
            $('.flex-container').append(
                '<a href="movies/movie' + i + '.html" class="movie-button opacity' + i + '">' + data[i].Title +'</a>');
            
            opacity = (data[i].Watched - 2012) / 10;

            $('.opacity' + i).css('opacity', opacity)

            
        }
        
    });


// Document Load    
});