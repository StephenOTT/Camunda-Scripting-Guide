# Use Cases

Different use cases and how to use them

<!-- BPMN diagram container -->
<div id="canvas"></div>

<!-- replace CDN url with local bpmn-js path -->
<script src="https://cdn.rawgit.com/bpmn-io/bower-bpmn-js/v0.26.3/dist/bpmn-viewer.js"></script>


<script>



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

</script>