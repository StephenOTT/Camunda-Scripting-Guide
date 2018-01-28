'use strict'

var elements = document.getElementsByClassName("bpmn");

var viewers = [];
var xhrs = [];

  for (var i in elements) {

    viewers[i] = new BpmnJS({ container: '#'+i.id });
    // var viewer = new BpmnJS({ container: '#canvas' },{});

    xhrs[i] = new XMLHttpRequest();

    xhrs[i].onreadystatechange = function() {
      if (xhrs[i].readyState === 4) {
        viewers[i].importXML(xhrs[i].response, function(err) {
          if (err) {
                // import failed :-(
              } else {
                // we did well!
                var canvas = viewers[i].get(i.id);
                canvas.zoom('fit-viewport');
              }
        });
      }
    };

    xhrs[i].open('GET', i.dataset.bpmn, true);
    xhrs[i].send(null);


}



