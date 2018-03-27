 // Adding click event listen listener to all buttons
 $("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    var movie = $(this).attr("data-movies");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      movie + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var movieDiv = $("<div>");

          // Creating and storing an image tag
          var movieImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          movieImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          movieDiv.append(movieImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs").prepend(movieDiv);
        }
      });

  });

  function runQuery(movie, queryURL) {

  $("#run-search").on("click", function(event) {
    event.preventDefault();
  
  
    searchTerm = $("#search-term").val().trim();
    var searchURL = queryURLBase + searchTerm;
  
  
    runQuery("_", searchURL);
  });

}