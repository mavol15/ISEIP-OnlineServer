/* Parse the data and create a graph with the data. */



function parseData(a) {
	Papa.parse('http://'+localStorage.sensorBoxAddress+'/historical_data.php?'+a, {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var dateStamp = [];
	var time = [];
	var date = [];
	var splitDate = [];
	var splitDate2;
	var co2measured = ["CO\u2082 [ppm]"];
	var tempCmeasured = ["Temp [\xB0C]"];
	var humMeasured = ["Humidity"];

	for (var i = data.length-2; i > 1; i--) {
		dateStamp.push(data[i][0]);
		co2measured.push(data[i][1]);
		tempCmeasured.push(data[i][2]);
		humMeasured.push(data[i][3]);
	}
	for (var i = 0; i < dateStamp.length; i++) {
		splitDate2 = dateStamp[i];
		splitDate = splitDate2.split(" ");
		date[i] = splitDate[0];
		time[i] = splitDate[1];
	}

	var chart = c3.generate({
		bindto: '#chart',
	    data: {

	        columns: [
	        	co2measured, tempCmeasured
	        ],
					axes: {
						co2measured: 'y',
						'Temp [\xB0C]': 'y2'
					}
	    },
	    axis: {
					y2: {
						show: true,
						max: 30,
						min: 22
					},
	        x: {
	            type: 'categories',
	            categories: time,
	            tick: {	multiline: false,	culling: { max: 8	}}
	        }
	    },
	    zoom: {	enabled: true },
	    legend: { position: 'right'}
	});
}

window.onload=function(){parseData('TYPE=RANGE&DATA=CTH&RANGE=1H');}
