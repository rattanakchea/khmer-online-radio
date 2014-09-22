var app = {
    //variables
     //song : $('audio').get(0),
    loadeddata: function() {
        console.log("can play");
        $("#loading").fadeOut();
    },
    onerror: function() {
        console.log("cannot play..error");
        //$('audio').get(0).src = "http://112.121.150.133:9308/;stream.nsv";
        $('#panel').text("Error with this channel..");
        $("#loading").fadeOut(1000);
    },
    onwaiting: function() {
        console.log("waiting...");
        $("#loading").fadeIn();
    },
    init: function() {
        //load in our radio list
        $.get("radioStations.json", {}, function(res, code) {
            var s = "";
            for (var i = 0; i < res.length; i++) {
                var src = res[0].url;
                s += "<li class='radio' data-url='" + res[i].url + "'><a href='#'>";
                s += "<img src = '" + res[i].image + "' />";
                s += "<h2>" + res[i].name + "</h2>";
                s += "<p>" + res[i].description + "</p>";
                s += "</a></li>";
            }
            //$('audio').get(0).src = src;
            $('#radioList').html(s).listview("refresh");
        }, "json");
    },
    play: function() {

        //play proper radio channel on click
        $('#radioList').on('click', 'li', function() {
            var song = $('audio').get(0);

            var url = $(this).data('url');

            //the same channel
            if (url == song.src) {
                if (song.paused) {
                    song.play();
                    //console.log($(this));
                    //var panel = $("playing " + $(this).find('h2').text());
                    //$('div#audio').append(panel);

                } else {
                    song.pause();
                }
            } else {
                song.src = url;
                song.play();
                    var panel = $('span#panel').text("");
                    var text = ("playing " + $(this).find('h2').text());
                    console.log(text);
                    panel.text(text);
                
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

