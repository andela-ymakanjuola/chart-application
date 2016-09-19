//function to plot bar chat			  
function barchart(dataset, max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 80;  
	var scale_f = (canvas.height-200)/max;				        
	context.clearRect(0, 0, canvas.width, canvas.height);
    plotaxis();
                
	for(var s in dataset){			    
		context.beginPath();
        context.rect(startx,600, 30,-dataset[s].percent*scale_f); //multiply by 10 to improve scaling
		context.fillStyle = '#B71C1C';
		context.fill();
		context.font = '10pt Helvetica';
		context.fillStyle = 'black';
    	context.fillText(dataset[s].name, startx, 620);
		startx += 50;
	}			        
}