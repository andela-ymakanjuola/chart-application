//function to plot line chat from dataset
function lineChart(dataset, max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 70;

	var scale_f = (canvas.height-200)/max; //calculate scale factor based on maximum user input	and y-axis							
	context.clearRect(0, 0, canvas.width, canvas.height);
	plotAxis();
	context.beginPath();
		
	//convert percentage in radians and plot graph			       
	for(var s in dataset){	
		//create and join line   
		context.lineTo(startx, ((canvas.width-100)-dataset[s].percent*scale_f));//y-axis numbers multiplied by scale factor to improve scaling
		context.lineWidth = 2;
		context.strokeStyle = '#F44336';
		context.stroke();

		//create points
		//context.font = '16pt Helvetica';
		//context.fillStyle = '#F44336';
    	//context.fillText('x', startx, (canvas.width-100)-dataset[s].percent*scale_f);
	    	    
		//create Labels
		context.font = '12pt Helvetica';
		context.fillStyle = 'black';
    	context.fillText(dataset[s].names, startx, canvas.height-80);
		startx += 70;
	}	
}