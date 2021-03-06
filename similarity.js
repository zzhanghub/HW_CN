$.ajax({
  url: "/data/similarity.txt",
  success: function (data, status) {

    let text;
    let edges = [];
    let G = new jsnx.MultiDiGraph;

    console.log(arguments);
    text = data.split("\n");
    let iedge;
    for(let i = 0; i < text.length-1; i++){
      let w = text[i].split(" ");
      edges.push([Number(w[0]), Number(w[1]), {edge_labels: w[2]}]);
    }
    console.log(iedge)
    G.addNodesFrom([[edges[0][0],{color: '#008A00'}]]);
    G.addEdgesFrom(edges);
    jsnx.draw(G, {
    element: '#similarity', 
    withLabels: true, 
    withEdgeLabels:true,
    nodeStyle: {
        fill: function(d) { 
            return d.data.color; 
        },
    }, 
    nodeAttr: {
      r: 12,
    },
    labelStyle: {
      fill: 'white',
    },
    // edge_style: { 
    //   'stroke-width': 0.1
    // },
    with_edge_labels: true,
    stickyDrag: true,
    with: 1000,
    height: 1000
    });
  },
  error: function (data, status) {
    console.log(arguments);
  }
});
