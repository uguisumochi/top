$(function (){
    $(".btn").mouseover(function(e){
        $(".content").hide();
        console.log(e);
        $(e.target.hash).show();
    })
});