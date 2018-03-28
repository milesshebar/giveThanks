$(document).ready(function(){
	//Change this to pie type
	$("#ApplePieRegion").empty();
    d3.csv("thanksgiving-2015-poll-data.csv", function(data) {
		var thanksCSV = data;
		var eastNorthCount = 0;
		var eastSouthCount = 0;
		var midAtlanticCount = 0;
		var mountainCount = 0;
		var newEnglandCount = 0;
		var pacificCount = 0;
		var southAtlanticCount = 0;
		var westNorthCount = 0;
		var westSouthCount = 0;
		for (var i = 0; i <= 1057; i++) {
			//Change to proper question
			if (thanksCSV[i]["Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Apple"] === "Apple") {
				if (thanksCSV[i]["US Region"] === "East North Central") {
					eastNorthCount++;
				}
				if (thanksCSV[i]["US Region"] === "East South Central") {
					eastSouthCount++;
				}
				if (thanksCSV[i]["US Region"] === "Middle Atlantic") {
					midAtlanticCount++;
				}
				if (thanksCSV[i]["US Region"] === "Mountain") {
					mountainCount++;
				}
				if (thanksCSV[i]["US Region"] === "New England") {
					newEnglandCount++;
				}
				if (thanksCSV[i]["US Region"] === "Pacific") {
					pacificCount++;
				}
				if (thanksCSV[i]["US Region"] === "South Atlantic") {
					southAtlanticCount++;
				}
				if (thanksCSV[i]["US Region"] === "West North Central") {
					westNorthCount++;
				}
				if (thanksCSV[i]["US Region"] === "West South Central") {
					westSouthCount++;
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
					{ label: "East North Central", value: eastNorthCount},
					{ label: "East South Central", value: eastSouthCount},
					{ label: "Middle Atlantic", value: midAtlanticCount},
					{ label: "Mountain", value: mountainCount},
					{ label: "New England", value: newEnglandCount},
					{ label: "Pacific", value: pacificCount},
					{ label: "South Atlantic", value: southAtlanticCount},
					{ label: "West North Central", value: westNorthCount},
					{ label: "West South Central", value: westSouthCount}
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
						"#cc0000", "#ff0000", "#ff3300", "#ff6600", "#ff9933", "#ffcc00", "#ffff00", "#ccff33", "#99ff33"
					]
				}
			}
		});
	});
});
