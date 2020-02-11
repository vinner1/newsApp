$(document).ready(function(){
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url, function(data){
        var getQuotes = data.hits;
        var currentQuotes = '';

        $('.read').on('click', function(){
            currentQuotes = getQuotes[Math.floor(Math.random() * getQuotes.length)];
            console.log(currentQuotes);
            $('.quoteBody').hide();
            $('.quoteBodyLink').html(currentQuotes.title);
            $('.quoteBodyLink').attr('href', currentQuotes.url).attr('target', '_blank');
            $('.quoteAuthor').html(currentQuotes.author);
            $('.tweetQuote')
            .attr('href', 'https://twitter.com/intent/tweet?text= '
             + currentQuotes.title + ' - ' + currentQuotes.author)
            .attr('target', '_blank').attr('disabled', false);
        });

        console.log(data);
    });


});