var Banner = function() {
    $(document).ready( function(){
        $( "#container ul" ).cycle({ 
            fx: "fade",
            pager: "#pager"
        });
    } );
};

var aposInicializado = function() {
    $(Banner);
}

$(aposInicializado);