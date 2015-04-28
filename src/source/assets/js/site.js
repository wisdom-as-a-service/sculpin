$(document).ready(function(){
    $("#feedback a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
    $("#events a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
});