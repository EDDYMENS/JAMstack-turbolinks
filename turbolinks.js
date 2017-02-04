 $('a').each(function(){
           var  ATag = this;
            ATag.onclick = function(){
                event.preventDefault();
                $.get( ATag.href, function( data ) {
                    //console.log( $.parseHTML(data) );
                    var body = data.replace(/^.*?<body[^>]*>(.*?)<\/body>.*?$/i,"$1","$1");
                    $("body").html(body);
                    eval($('body').find("script").text());
                })
            }

        //$( ".result" ).html( data );
          //alert( "Load was performed." );
          
        });
        
    
