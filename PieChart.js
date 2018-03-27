var thanksCSV;

$(document).ready(function(){
    console.log("start!");
	$("#pie").empty();
    $.ajax({
		url: 'thanksgiving-2015-poll-data.csv', // name of file to parse
		dataType: "csv",
		success: getCSV,
		error: function(){alert("Error: Something went wrong");}
    });
});

function getCSV(document) {
    thanksCSV = document;
    makeChart();
}

function makeChart(){
	var key = "Which type of pie is typically served at your Thanksgiving dinner? Please select all that apply. - Apple";
	var maleCount = 0;
	var femaleCount = 0;
	console.log(thanksCSV.length);
    for (var i = 0; i < thanksCSV.length; i++) {
        if (thanksCSV[i][key] === "Apple") {
            if (thanksCSV[i]["What is your gender?"] === "Male") {
				maleCount++;
			}
			if (thanksCSV[i]["What is your gender?"] === "Female") {
				femaleCount++;
			}
        }
    }
	
	var pie = new d3pie("pie", {
		header: {
			title: {
				text: "Apple Pie by Gender"
			}
		},
		data: {
			content: [
				{ label: "Male", value: maleCount},
				{ label: "Female", value: femaleCount }
			]
		}
	});
};