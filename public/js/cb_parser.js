$(document).ready(function (){
  $('#btnGetStories').click(function(){
    var requestData = $('#txtDomain').val();

    var resultElement = $('#resultDiv');

    var cbKeyDisplay = config.cbKey;

    $.ajax({
      url : 'http://api.chartbeat.com/live/toppages/v3/?apikey=' + cbKeyDisplay,
      method: 'get',
      data: {host: requestData},
      dataType: 'json',
      success: function(data){
        var dt = new Date();
        resultElement.html("<b> Request made at " + dt + "</b>");
        if (data.pages[1].path.includes(requestData)){
        // the following loops assume that the page with most concurrents is always the homepage. Logic to be added in case that every changes.
        // You can swap out the commented logic below for more pages
        // for (var i = 1; i <= data.pages.length; i++){
            for (var i = 0; i < 6; i++){
              if (data.pages[i].path === requestData + "/") { continue; }
              resultElement.append('<h4>' + '<a href="https://' + data.pages[i].path + '" target="_blank">'+ data.pages[i].title + '</a> </h4>');
            }
      } else {
          for (var i = 0; i < 6; i++){
              if (data.pages[i].path === "/") { continue; }
              console.log(data.pages[i].path);
              resultElement.append('<h4>' + '<a href="https://' + requestData + data.pages[i].path + '" target="_blank">'+ data.pages[i].title + '</a> </h4>')
          };
      }

      }
    })
  });
});
