document.ready(function(){
  $(#"MainDishBars").empty();
  d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
    var turkeyCount = 0;
    var tofurkeyCount = 0;
    var porkCount = 0;
    var turduckenCount = 0;
    var beefCount = 0;
    data.forEach(function(person){
      if(person."What is typically the main dish at your Thanksgiving dinner?"==="Turkey"){
        turkeyCount++;
      }
      else if(person."What is typically the main dish at your Thanksgiving dinner?"==="Tofurkey"){
        tofurkeyCount++;
      }
      else if(person."What is typically the main dish at your Thanksgiving dinner?"==="Ham/Pork"){
        porkCount++;
      }
      else if(person."What is typically the main dish at your Thanksgiving dinner?"==="Roast beef"){
        beefCount++;
      }
      else if(person."What is typically the main dish at your Thanksgiving dinner?"==="Turducken"){
        turduckenCount++;
      }
    });
    var barLengths = [turkeyCount, tofurkeyCount, porkCount, turduckenCount, beefCount];
  });
});

var x = d3.scale.linear()
    .domain([0, d3.max(barLengths)])
    .range([0, 420]);

d3.select(".MainDishBars")
  .selectAll("div")
    .data(barLengths)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
