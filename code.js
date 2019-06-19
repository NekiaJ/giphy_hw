
//var queryURL = "https://api.giphy.com/v1/gifs/search?q=api_key=xkRLAHLHkerYvir7nngZgs54AB50oylI&tag=&rating=G";

// $.ajax({
//     url: "https://api.giphy.com/v1/gifs/search?q=api_key=xkRLAHLHkerYvir7nngZgs54AB50oylI&tag=&rating=G",
//     method: "GET"
// }) .then(function(response){
//     console.log(response);
// });
var sampleGifs = ["Trending","Puppyies","Babies","Reactions"];
 

function displayGifs(){
   // var gifs = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=api_key=xkRLAHLHkerYvir7nngZgs54AB50oylI&tag=&rating=G";
    //"https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
   $.ajax({
        url: queryURL,
        method: "GET"
        
    }).then(function(response){

        var giphyDiv = $("<div class = 'gifDisplay'>");

        var rating = response.data.rating;
        var pOne = $("<p>").text("Rating:" + rating);

        giphyDiv.append(pOne);

        var imgURL = response.data.images_original_url;

        var image = $("<img>").attr("src", imgURL);

        // append the img
        giphyDiv.append(image);

        $(".gifDisplay").prepend(giphyDiv);

        console.log(response);
    });
}

//function for displaying Gifs data

function buttonRender(){
    $("#createBtn_div").empty();

    for (var x = 0; x < sampleGifs.length; x++ ) {
        // creates a button for each gif name in the array
        var a = $("<button>");
        //adding a class
        a.addClass("gif_btn");
        //adding data attribute
        a.attr("data-name",sampleGifs[x]);
        // text for the buttons
        a.text(sampleGifs[x]);
        //adding buttons to the div
        $("#createBtn_div").append(a);
    }
}
$("#addGif_btn").on("click", function(event) {
    event.preventDefault();
    //grabs text from input form gif-input

    var giphy = $("#gif-input").val().trim();

   sampleGifs.push(giphy);
    // handles the array processing
   buttonRender();
});

$(document).on("click",".gifBTN", sampleGifs);
// displays the buttons
buttonRender();