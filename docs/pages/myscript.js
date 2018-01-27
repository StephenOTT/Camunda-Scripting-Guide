// BpmnJS is the BPMN viewer instance
  var viewer = new BpmnJS({ container: '#canvas' });

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      viewer.importXML(xhr.response, function(err) {
        if (err) {
              // import failed :-(
            } else {
              // we did well!

              var canvas = viewer.get('canvas');
              canvas.zoom('fit-viewport');
            }
      });
    }
  };

  xhr.open('GET', 'pages/test.bpmn', true);
  xhr.send(null);