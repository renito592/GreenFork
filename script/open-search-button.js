
        var x = window.matchMedia("(max-width: 1024px)")
        search = document.getElementById('search');
        
        $('.fa-search').on('click',function () {
             if (x.matches) {
                if (search.style.visibility=="hidden") {        
                    $( '.search' ).css({"visibility": "visible"});  
                } else {
                    $( '.search' ).css({"visibility": "hidden"});
                }              
            } else {
            $( '.search' ).css({"visibility": "visible"});
            }
        });                           
