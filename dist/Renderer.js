class Renderer{
    
    render(data){
        $(".main").empty();
        const src = $("#movie-template").html();
        const template = Handlebars.compile(src);
        let someHtml = template({ data });
        $(".main").append(someHtml);
    }
    
      
}