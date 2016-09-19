//function to plot line chat from dataset
function linechart(dataset, max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 50;

	var scale_f = (canvas.height-200)/max;							
	context.clearRect(0, 0, canvas.width, canvas.height);
	plotaxis();
	context.beginPath();
		
	//convert percentage in radians and plot graph			       
	for(var s in dataset){	
		//create line   
		context.lineTo(startx, (600-dataset[s].percent*scale_f));//y=axis numbers multiplied by 5 to improve scaling
		context.lineWidth = 2;
		context.strokeStyle = '#F44336';
		context.stroke();
		//create Labels
		context.font = '10pt Helvetica';
		context.fillStyle = 'black';
    	context.fillText(dataset[s].name, startx, 620);
		startx += 50;
	}	
}