//function to plot bar chat			  
function barChart(dataset, max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 65;  
	var scale_f = (canvas.height-200)/max;		//scale factor calculation		        
	context.clearRect(0, 0, canvas.width, canvas.height);
    plotAxis();
                
	for(var s in dataset){			    
		context.beginPath();
        context.rect(startx,canvas.height-100, 50,-dataset[s].percent*scale_f); //multiply by 10 to improve scaling
		context.fillStyle = '#B71C1C';
		context.fill();
		context.font = '12pt Helvetica';
		context.fillStyle = 'black';
    	context.fillText(dataset[s].names, startx+25, canvas.height-80);
		startx += 65;
	}			        
}