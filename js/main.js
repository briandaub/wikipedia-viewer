$(document).ready(function() {
  
    function search() { 
        var query = $('input').val(); 
        var wikiAPI = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=" + query + "&prop=info&format=json&callback=?"; 
        var list = $('#results').html('<ul id="result_list" class="list-group"></ul>').find('ul');

        $.getJSON(wikiAPI, function(data) { 
            for(var i in data.query.pages) { 
                list.append('<li class="list-group-item col-md-12">' + '<a href="https://en.wikipedia.org/wiki/' + data.query.pages[i].title + '" target="_blank">' + data.query.pages[i].title + '</a>' + '</li>');
            } 
        }); 
    }

    $("form").submit(function(event) {
        event.preventDefault();
        search();
    });
});