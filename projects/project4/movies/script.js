$(document).ready(function(){
// Document Load


    let key = $('body').attr('key');
    let number = $('body').attr('number');

    $.getJSON("https://www.omdbapi.com/?apikey=140382f9&i=" + key)
        .done(function(data) {
            // console.log(data);

            $('.year').append('<div>' + data['Released'] + '</div>')
            $('.genre').append('<div>' + data['Genre'] + '</div>')
            $('.plot').append('<div>' + data['Plot'] + '</div>')
            $('.runtime').append('<div>' + data['Runtime'] + '</div>')
            $('.director').append('<div>' + data['Director'] + '</div>')
            

        });
    
    let info;

    $.getJSON("../movielist.json")
    .done(function(data) {

        
        // List
        for (let i = 0; i<data.length; i++) {
            $('.list0').append(
                '<a href="movie' + i + '.html" class="movie-button opacity' + i + '">' + data[i].Title +'</a>');

                let opacity = (data[i].Watched - 2012) / 10;

                $('.opacity' + i).css('opacity', opacity)
        };

        for(let i = 0; i < data.length; i++){
            
            let item = data[i];
            // console.log (item['Number']);
            // console.log(number);
            if (item['Number'] == number){
                info = item;
            };
        };

        // console.log(info);

        //Page Title
        $('.title0').append('<div>' + info['Title'] + '</div>')

        $('head title').text(info['Title']);

        // Comments and Watched
        $('.comments').append('<div>' + info['Comments'] + '</div>')
        $('.watched').append('<div>' + info['Watched'] + '</div>')
        

    });
    

    //CHANGE DATE HERE TO UPDATE ON ALL PAGES
    $('.replace-date').append('<span>May 6, 2022</span>')

// Document Load    
});