var app = {
    //variables

    init: function() {
        //load in our radio list
        $.get("radioStations.json", {}, function(res, code) {
            var s = "";
            for (var i = 0; i < res.length; i++) {
                s += "<li class='radio' data-url='" + res[i].url + "'><a href='#'>";
                s += "<img src = '" + res[i].image + "' />";
                s += "<h2>" + res[i].name + "</h2>";
                s += "<p>" + res[i].description + "</p>";
                s += "</a></li>";
            }

            $('#radioList').html(s).listview("refresh");
        }, "json");
    },
    play: function() {
        var song = $('audio').get(0);
        //play proper radio channel on click
        $('#radioList').on('click', 'li', function() {

            var url = $(this).data('url');
            
            //the same channel
            if (url == song.src) {
                song.pause();
            } else {
                song.src = url;
                song.play();
            }


        });
    }
};


$(document).ready(function()
{
    app.init();
    app.play();

});
//        < li >
//        < a class = "playback" href = "#" >
//        < img src = "img/kamsanfm.png" alt = "" / >
//        < h2 > Komsan Radio < /h2>
//        < p > Creates a beautiful, relaxing light. < /p>
//        < /a>
//        < /li>
//        < li >
//        < img src = "img/rfa.png" alt = "" / >
//        < h2 > Komsan Radio < /h2>
//        < p > Creates a beautiful, relaxing light. < /p>
//        < /li>

