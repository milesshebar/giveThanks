import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import csv from "d3";
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

//KeyLimePieGender.js
$(document).ready(function(){
	$("#KeyLimePieGender").empty();
	    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
			var thanksCSV = data;
			var maleCount = 0;
			var femaleCount = 0;
			for (var i = 0; i <= 1057; i++) {
				//Change to proper question
				if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Key lime"] === "Key lime") {
					if (thanksCSV[i]["What is your gender?"] === "Male") {
						maleCount++;
					}
					if (thanksCSV[i]["What is your gender?"] === "Female") {
						femaleCount++;
					}
				}
			}
			//Change this to pie type
			var pie = new d3pie("KeyLimePieGender", {
				header: {
					title: {
						//Change title to pie type
						text: "Key Lime Pie by Gender",
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
							"#ffff66", "#66ff33"
						]
					}
				}
			});
			$("#KeyLimePieGender").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
		});
});

//KeyLimePieRegion.js
$(document).ready(function(){
	$("#KeyLimePieRegion").empty();
	    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
			var thanksCSV = data;
			var midwestCount = 0;
			var northeastCount = 0;
			var southeastCount = 0;
			var westCount = 0;
			for (var i = 0; i <= 1057; i++) {
				//Change to proper question
				if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Key lime"] === "Key lime") {
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
			var pie = new d3pie("KeyLimePieRegion", {
				header: {
					title: {
						//Change title to pie type
						text: "Key Lime Pie by Region",
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
							"#66ff33", "#ccff33", "#ccff66", "#ffff66"
						]
					}
				}
			});
			$("#KeyLimePieRegion").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
		});
});

//PecanPieGender.js
$(document).ready(function(){
	$("#PecanPieGender").empty();
    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
		var thanksCSV = data;
		var maleCount = 0;
		var femaleCount = 0;
		for (var i = 0; i <= 1057; i++) {
			//Change to proper question
			if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Pecan"] === "Pecan") {
				if (thanksCSV[i]["What is your gender?"] === "Male") {
					maleCount++;
				}
				if (thanksCSV[i]["What is your gender?"] === "Female") {
					femaleCount++;
				}
			}
		}
		//Change this to pie type
		var pie = new d3pie("PecanPieGender", {
			header: {
				title: {
					//Change title to pie type
					text: "Pecan Pie by Gender",
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
						"#b37700", "#994d00"
					]
				}
			}
		});
		$("#PecanPieGender").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
	});
});

//PecanPieRegion.js
$(document).ready(function(){
	$("#PecanPieRegion").empty();
    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
		var thanksCSV = data;
		var midwestCount = 0;
		var northeastCount = 0;
		var southeastCount = 0;
		var westCount = 0;
		for (var i = 0; i <= 1057; i++) {
			//Change to proper question
			if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Pecan"] === "Pecan") {
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
		var pie = new d3pie("PecanPieRegion", {
			header: {
				title: {
					//Change title to pie type
					text: "Pecan Pie by Region",
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
						"#994d00", "#cc6600", "#b37700", "#ffaa00"
					]
				}
			}
		});
		$("#PecanPieRegion").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
	});
});

//PumpkinPieGender
$(document).ready(function(){
	$("#PumpkinPieGender").empty();
    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
		var thanksCSV = data;
		var maleCount = 0;
		var femaleCount = 0;
		for (var i = 0; i <= 1057; i++) {
			//Change to proper question
			if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Pumpkin"] === "Pumpkin") {
				if (thanksCSV[i]["What is your gender?"] === "Male") {
					maleCount++;
				}
				if (thanksCSV[i]["What is your gender?"] === "Female") {
					femaleCount++;
				}
			}
		}
		//Change this to pie type
		var pie = new d3pie("PumpkinPieGender", {
			header: {
				title: {
					//Change title to pie type
					text: "Pumpkin Pie by Gender",
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
						"#ffad33", "#ba6612"
					]
				}
			}
		});
		$("#PumpkinPieGender").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
	});
});

//PumpkinPieRegion
$(document).ready(function(){
	$("#PumpkinPieRegion").empty();
    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
		var thanksCSV = data;
		var midwestCount = 0;
		var northeastCount = 0;
		var southeastCount = 0;
		var westCount = 0;
		for (var i = 0; i <= 1057; i++) {
			//Change to proper question
			if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Pumpkin"] === "Pumpkin") {
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
		var pie = new d3pie("PumpkinPieRegion", {
			header: {
				title: {
					//Change title to pie type
					text: "Pumpkin Pie by Region",
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
						"#ba6612", "#db8315", "#ff9900", "#ffad33"
					]
				}
			}
		});
		$("#PumpkinPieRegion").append('<img src="piecrust.png" style="position:absolute;right:70px;top:75px;z-index:-1;width:365px">');
	});
});

$(document).ready(function(){
  $("#MainDishBars").empty();
  d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
    var turkeyCount = 0;
    var tofurkeyCount = 0;
    var porkCount = 0;
    var turduckenCount = 0;
    var beefCount = 0;
		console.log('initialized bar lengths');
    data.forEach(function(person){
      if(person["What is typically the main dish at your Thanksgiving dinner?"]==="Turkey"){
        turkeyCount++;
      }
      else if(person["What is typically the main dish at your Thanksgiving dinner?"]==="Tofurkey"){
        tofurkeyCount++;
      }
      else if(person["What is typically the main dish at your Thanksgiving dinner?"]==="Ham/Pork"){
        porkCount++;
      }
      else if(person["What is typically the main dish at your Thanksgiving dinner?"]==="Roast beef"){
        beefCount++;
      }
      else if(person["What is typically the main dish at your Thanksgiving dinner?"]==="Turducken"){
        turduckenCount++;
      }
    });
		console.log('turkey count: ' + turkeyCount);
    var barLengths = [{food: 'Turkey', count: turkeyCount}, {food: 'Tofurkey', count: tofurkeyCount}, {Food: 'Pork', count: porkCount}, {food: 'Turducken', count: turduckenCount}, {Food: 'Beef', count: beefCount}];
		var foods = barLengths.map(function(t){
			return t.food
		});
  });
});
console.log('what is going on');
	console.log(`turkey count: ${turkeyCount}`);
	console.log('under turkey count')
;	var margin = {top: 5, bottom: 5, left: 50, right: 50};
	var fullWidth = 700;
	var fullHeight = 200;
	var width = fullWidth - margin.right - margin.left;
	var height = fullHeight - margin.top - margin.bottm;
	console.log('right before the thing i think is causing the problem');
	var svg = d3.select('#MainDishBars').append('svg').attr('width', fullWidth).attr('height', fullHeight).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
console.log('line 980');
	var mainScale = d3.scaleBand()
	  .domain(foods)
	  .range([0, width])
	  .paddingInner(0.1);
		var bandwidth = mainScale.bandwidth();

		var mostCommonFood = d3.max(barLengths, function(d) { return d.count; });
var countScale = d3.scaleLinear()
  .domain([0, mostCommonFood])
  .range([height, 0])
  .nice();

	var xAxis = d3.axisBottom(mainScale);
var yAxis = d3.axisLeft(countScale);

svg.append('g')
  .classed('x axis', true)
  .attr('transform', 'translate(0,' + height + ')')
  .call(xAxis);

var yAxisEle = svg.append('g')
  .classed('y axis', true)
  .call(yAxis);
	console.log('made it this far');

	var yText = yAxisEle.append('text')
  .attr('transform', 'rotate(-90)translate(-' + height/2 + ',0)')
  .style('text-anchor', 'middle')
  .style('fill', 'black')
  .attr('dy', '-2.5em')
  .style('font-size', 14)
  .text('Count');

var barHolder = svg.append('g')
  .classed('bar-holder', true);

	// draw the bars
	var bars = barHolder.selectAll('rect.bar')
	    .data(barLengths)
	  .enter().append('rect')
	    .classed('bar', true)
	    .attr('x', function(d, i) {
	      // the x value is determined using the
	      // month of the datum
	      return mainScale(d.food)
	    })
	    .attr('width', bandwidth)
	    .attr('y', function(d) {
	      // the y position is determined by the datum's temp
	      // this value is the top edge of the rectangle
	      return countScale(d.count);
	    })
	    .attr('height', function(d) {
	      // the bar's height should align it with the base of the chart (y=0)
	      return height - countScale(d.count);
	    });
/*var x = d3.scale.linear()
    .domain([0, d3.max(barLengths)])
    .range([0, 420]);

d3.select(".MainDishBars")
  .selectAll("div")
    .data(barLengths)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; }); */
