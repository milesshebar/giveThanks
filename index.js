import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import * as d3 from "d3";
import d3pie from 'd3pie';
window.d3 = d3;

//ApplePieGender.js
$(document).ready(function(){
	//Change this to pie type
	$("#ApplePieGender").empty();
    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
		var thanksCSV = data;
		var maleCount = 0;
		var femaleCount = 0;
		for (var i = 0; i <= 1057; i++) {
			//Change to proper question
			if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Apple"] === "Apple") {
				if (thanksCSV[i]["What is your gender?"] === "Male") {
					maleCount++;
				}
				if (thanksCSV[i]["What is your gender?"] === "Female") {
					femaleCount++;
				}
			}
		}
		//Change this to pie type
		var pie = new d3pie("ApplePieGender", {
			header: {
				title: {
					//Change title to pie type
					text: "Apple Pie by Gender",
					fontSize: 24,
					font: "arial"
				}
			},
			data: {
				content: [
					{ label: "Male", value: maleCount},
					{ label: "Female", value: femaleCount }
				]
			},
			labels: {
				mainLabel: {
					color: "#333333",
					font: "arial",
					fontSize: 16
				},
				percentage: {
					color: "#000000",
					font: "arial",
					fontSize: 16,
					decimalPlaces: 0
				},
				value: {
					color: "#cccc44",
					font: "arial",
					fontSize: 16
				}
			},
			misc: {
				colors: {
					segments: [
						//Change colors here
						"#ccff33", "#ff0000"
					]
				}
			}
		});
	});
	$("#ApplePieGender").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
});

//ApplePieRegion.js
$(document).ready(function(){
	//Change this to pie type
	$("#ApplePieRegion").empty();
    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
		var thanksCSV = data;
		var midwestCount = 0;
		var northeastCount = 0;
		var southeastCount = 0;
		var westCount = 0;
		for (var i = 0; i <= 1057; i++) {
			//Change to proper question
			if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Apple"] === "Apple") {
				if (thanksCSV[i]["US Region"] === "East North Central") {
					midwestCount++;
				}
				if (thanksCSV[i]["US Region"] === "East South Central") {
					southeastCount++;
				}
				if (thanksCSV[i]["US Region"] === "Middle Atlantic") {
					northeastCount++;
				}
				if (thanksCSV[i]["US Region"] === "Mountain") {
					westCount++;
				}
				if (thanksCSV[i]["US Region"] === "New England") {
					northeastCount++;
				}
				if (thanksCSV[i]["US Region"] === "Pacific") {
					westCount++;
				}
				if (thanksCSV[i]["US Region"] === "South Atlantic") {
					southeastCount++;
				}
				if (thanksCSV[i]["US Region"] === "West North Central") {
					midwestCount++;
				}
				if (thanksCSV[i]["US Region"] === "West South Central") {
					southeastCount++;
				}
			}
		}
		//Change this to pie type
		var pie = new d3pie("ApplePieRegion", {
			header: {
				title: {
					//Change title to pie type
					text: "Apple Pie by Region",
					fontSize: 24,
					font: "arial"
				}
			},
			data: {
				content: [
					{ label: "Midwest", value: midwestCount},
					{ label: "Northeast", value: northeastCount},
					{ label: "Southeast", value: southeastCount},
					{ label: "West", value: westCount}
				]
			},
			labels: {
				mainLabel: {
					color: "#333333",
					font: "arial",
					fontSize: 16
				},
				percentage: {
					color: "#000000",
					font: "arial",
					fontSize: 16,
					decimalPlaces: 0
				},
				value: {
					color: "#cccc44",
					font: "arial",
					fontSize: 16
				}
			},
			misc: {
				colors: {
					segments: [
						//Change colors here
						"#cc0000", "#ff0000", "#ffff00", "#ccff33"
					]
				}
			}
		});
		$("#ApplePieRegion").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
	});
});

//CherryPieGender.js
$(document).ready(function(){
	$("#CherryPieGender").empty();
    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
		var thanksCSV = data;
		var maleCount = 0;
		var femaleCount = 0;
		for (var i = 0; i <= 1057; i++) {
			//Change to proper question
			if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Cherry"] === "Cherry") {
				if (thanksCSV[i]["What is your gender?"] === "Male") {
					maleCount++;
				}
				if (thanksCSV[i]["What is your gender?"] === "Female") {
					femaleCount++;
				}
			}
		}
		//Change this to pie type
		var pie = new d3pie("CherryPieGender", {
			header: {
				title: {
					//Change title to pie type
					text: "Cherry Pie by Gender",
					fontSize: 24,
					font: "arial"
				}
			},
			data: {
				content: [
					{ label: "Male", value: maleCount},
					{ label: "Female", value: femaleCount }
				]
			},
			labels: {
				mainLabel: {
					color: "#333333",
					font: "arial",
					fontSize: 16
				},
				percentage: {
					color: "#dddddd",
					font: "arial",
					fontSize: 16,
					decimalPlaces: 0
				},
				value: {
					color: "#cccc44",
					font: "arial",
					fontSize: 16
				}
			},
			misc: {
				colors: {
					segments: [
						//Change colors here
						"#ff0000", "#800000"
					]
				}
			}
		});
		$("#CherryPieGender").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
	});
});

//CherryPieRegion.js
$(document).ready(function(){
	$("#CherryPieRegion").empty();
    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
		var thanksCSV = data;
		var midwestCount = 0;
		var northeastCount = 0;
		var southeastCount = 0;
		var westCount = 0;
		for (var i = 0; i <= 1057; i++) {
			//Change to proper question
			if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Cherry"] === "Cherry") {
				if (thanksCSV[i]["US Region"] === "East North Central") {
					midwestCount++;
				}
				if (thanksCSV[i]["US Region"] === "East South Central") {
					southeastCount++;
				}
				if (thanksCSV[i]["US Region"] === "Middle Atlantic") {
					northeastCount++;
				}
				if (thanksCSV[i]["US Region"] === "Mountain") {
					westCount++;
				}
				if (thanksCSV[i]["US Region"] === "New England") {
					northeastCount++;
				}
				if (thanksCSV[i]["US Region"] === "Pacific") {
					westCount++;
				}
				if (thanksCSV[i]["US Region"] === "South Atlantic") {
					southeastCount++;
				}
				if (thanksCSV[i]["US Region"] === "West North Central") {
					midwestCount++;
				}
				if (thanksCSV[i]["US Region"] === "West South Central") {
					southeastCount++;
				}
			}
		}
		//Change this to pie type
		var pie = new d3pie("CherryPieRegion", {
			header: {
				title: {
					//Change title to pie type
					text: "Cherry Pie by Region",
					fontSize: 24,
					font: "arial"
				}
			},
			data: {
				content: [
					{ label: "Midwest", value: midwestCount},
					{ label: "Northeast", value: northeastCount},
					{ label: "Southeast", value: southeastCount},
					{ label: "West", value: westCount}
				]
			},
			labels: {
				mainLabel: {
					color: "#333333",
					font: "arial",
					fontSize: 16
				},
				percentage: {
					color: "#dddddd",
					font: "arial",
					fontSize: 16,
					decimalPlaces: 0
				},
				value: {
					color: "#cccc44",
					font: "arial",
					fontSize: 16
				}
			},
			misc: {
				colors: {
					segments: [
						//Change colors here
						"#800000", "#cc0000", "#ff0000", "#ff5c33"
					]
				}
			}
		});
		$("#CherryPieRegion").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
	});
});

//ChocolatePieGender.js
$(document).ready(function(){
	$("#ChocolatePieGender").empty();
	    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
			var thanksCSV = data;
			var maleCount = 0;
			var femaleCount = 0;
			for (var i = 0; i <= 1057; i++) {
				//Change to proper question
				if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Chocolate"] === "Chocolate") {
					if (thanksCSV[i]["What is your gender?"] === "Male") {
						maleCount++;
					}
					if (thanksCSV[i]["What is your gender?"] === "Female") {
						femaleCount++;
					}
				}
			}
			//Change this to pie type
			var pie = new d3pie("ChocolatePieGender", {
				header: {
					title: {
						//Change title to pie type
						text: "Chocolate Pie by Gender",
						fontSize: 24,
						font: "arial"
					}
				},
				data: {
					content: [
						{ label: "Male", value: maleCount},
						{ label: "Female", value: femaleCount }
					]
				},
				labels: {
					mainLabel: {
						color: "#333333",
						font: "arial",
						fontSize: 16
					},
					percentage: {
						color: "#dddddd",
						font: "arial",
						fontSize: 16,
						decimalPlaces: 0
					},
					value: {
						color: "#cccc44",
						font: "arial",
						fontSize: 16
					}
				},
				misc: {
					colors: {
						segments: [
							//Change colors here
							"#ac7339", "#663300"
						]
					}
				}
			});
			$("#ChocolatePieGender").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
		});
});

//ChocolatePieRegion.js
$(document).ready(function(){
	$("#ChocolatePieRegion").empty();
	    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
			var thanksCSV = data;
			var midwestCount = 0;
			var northeastCount = 0;
			var southeastCount = 0;
			var westCount = 0;
			for (var i = 0; i <= 1057; i++) {
				//Change to proper question
				if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Chocolate"] === "Chocolate") {
					if (thanksCSV[i]["US Region"] === "East North Central") {
						midwestCount++;
					}
					if (thanksCSV[i]["US Region"] === "East South Central") {
						southeastCount++;
					}
					if (thanksCSV[i]["US Region"] === "Middle Atlantic") {
						northeastCount++;
					}
					if (thanksCSV[i]["US Region"] === "Mountain") {
						westCount++;
					}
					if (thanksCSV[i]["US Region"] === "New England") {
						northeastCount++;
					}
					if (thanksCSV[i]["US Region"] === "Pacific") {
						westCount++;
					}
					if (thanksCSV[i]["US Region"] === "South Atlantic") {
						southeastCount++;
					}
					if (thanksCSV[i]["US Region"] === "West North Central") {
						midwestCount++;
					}
					if (thanksCSV[i]["US Region"] === "West South Central") {
						southeastCount++;
					}
				}
			}
			//Change this to pie type
			var pie = new d3pie("ChocolatePieRegion", {
				header: {
					title: {
						//Change title to pie type
						text: "Chocolate Pie by Region",
						fontSize: 24,
						font: "arial"
					}
				},
				data: {
					content: [
						{ label: "Midwest", value: midwestCount},
						{ label: "Northeast", value: northeastCount},
						{ label: "Southeast", value: southeastCount},
						{ label: "West", value: westCount}
					]
				},
				labels: {
					mainLabel: {
						color: "#333333",
						font: "arial",
						fontSize: 16
					},
					percentage: {
						color: "#dddddd",
						font: "arial",
						fontSize: 16,
						decimalPlaces: 0
					},
					value: {
						color: "#cccc44",
						font: "arial",
						fontSize: 16
					}
				},
				misc: {
					colors: {
						segments: [
							//Change colors here
							"#663300", "#86592d", "#ac7339", "#cc9966"
						]
					}
				}
			});
			$("#ChocolatePieRegion").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
		});
});
