// Script to replace colors in GitHub contributions from green to blue.

// H+130 in HSV.
var colorMap = new Map([
  ["#d6e685", "#85c6e5"],
  ["#8cc665", "#667dc4"],
  ["#44a340", "#4b40a0"],
  ["#1e6823", "#2e1d66"]
])

// Convert "rgb(rr, gg, bb)" to "#RRGGBB".
function ParseRgb(rgb) {
  var hex_list = rgb.match(/\d+/g).map(function(v) {
    return ("0" + parseInt(v).toString(16)).slice(-2);
  });
  return "#" + hex_list.join("");
}

// Replace colors in the matrix.
var elements = document.getElementsByClassName("day");
for (var i = 0; i < elements.length; ++i) {
  var fill = elements[i].getAttribute("fill");
  if (colorMap.has(fill)) {
    elements[i].style.fill = colorMap.get(fill);
  }
}

// Replace colors in the legend.
var elements_legend = document.getElementsByClassName("legend");
for (var i = 0; i < elements_legend.length; ++i) {
  var child_nodes = elements_legend[i].children;
  for (var j = 0; j < child_nodes.length; ++j) {
    var property = ParseRgb(child_nodes[j].style.getPropertyValue("background-color")); 
    if (colorMap.has(property)) {
      child_nodes[j].style.setProperty("background-color", colorMap.get(property));
    }
  }
}

