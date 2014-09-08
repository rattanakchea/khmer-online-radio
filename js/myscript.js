$(document).ready(function()
{
    var radioStations = [];
    function Station(name, url, description) {
        this.name = name;
        this.url = url;
        this.description = description;
        this.sayName = function() {
            alert(this.name);
        };
    }
//    var radioStation = {
//        name: "Komsan",
//        url: "http://112.121.150.133:9308/;stream.nsv/;stream&type=mp3",
//        decription: "Komsan Radio Station"
//    };

    radioStations.push(new Station("Komsan", "http://112.121.150.133:9308/;stream.nsv/;stream&type=mp3", "Komsan Radio Station"));
    radioStations.push(new Station("RFA", "http://112.121.150.133:9308/;stream.nsv/;stream&type=mp3", "RFA Station"));
    //alert(radioStations);
    
    
    
   function createStations(){
      $station = $(".station");
      $station.append('<li>');
      $station.append('<a class="playback" href="#">');
      $station.append('<img src="img/kamsanfm.png" alt=""/>');
      $station.append('<h2>' + radioStations[0].name + '</h2>');
      $station.append('<p>' + radioStations[0].description + '</p>');
      $station.append('<p>' + radioStations[0].url + '</p>');
      $station.append('</a></li>');
                        
   };
   createStations();
});

