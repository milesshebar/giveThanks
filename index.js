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
						"#d16900", "#c80000"
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
						"#af0000", "#c80000", "#c73f00", "#d16900"
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
