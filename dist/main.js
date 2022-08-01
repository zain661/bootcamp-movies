const render = new Renderer();

const fetchMovieData = function () {
  let input = $("#movieType").val();

  $.get(`/movies/${input}`, function (moviesData) {
   
    render.render(moviesData)
     
  });
};



$(".main").on("click", "#movieImage", function () {
         const id = $(this).closest(".containerMovie").data().id
         $.ajax({
            method: "GET",
            url: `http://www.omdbapi.com/?apikey=b0d39b78&i=${id}`,
            success: (response) => {
              const ratings = response.Ratings
              for(let i of ratings){
                $(".containerMovie").find(".ratingsList").append(`<li>${i.Value}</li>`)
              }
             },
            error: function (xhr, text, error) {
              console.log(text);
            },
          });
})







































  