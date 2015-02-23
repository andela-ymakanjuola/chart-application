//function to plot line chat from dataset
function lineChart(dataset, max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 50;

	var scale_f = (canvas.height-200)/max; //scale factor calculation							
	context.clearRect(0, 0, canvas.width, canvas.height);
	plotAxis();
	context.beginPath();
		
	//convert percentage in radians and plot graph			       
	for(var s in dataset){	
		//create and join line   
		context.lineTo(startx, ((canvas.width-100)-dataset[s].percent*scale_f));//y-axis numbers multiplied by scale to improve scaling
		context.lineWidth = 2;
		context.strokeStyle = '#F44336';
		context.stroke();
		//create Labels
		context.font = '12pt Helvetica';
		context.fillStyle = 'black';
    	context.fillText(dataset[s].names, startx, canvas.height-80);
		startx += 70;
	}	
}