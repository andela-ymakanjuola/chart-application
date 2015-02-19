//function to plot histogram
function histogram(dataset, max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 51; 
	var chartcolors = ['#B71C1C','#4A148C', '#1A237E', '#01579B', '#004D40', 
						'#33691E', '#F57F17', '#E65100', '#3E2723', '#263238']; 
	var scale_f = (canvas.height-200)/max; //calculate scale factor based on maximum user input				        
	context.clearRect(0, 0, canvas.width, canvas.height);
    plotaxis();
                
	for(var s in dataset){			    
		context.beginPath();
        context.rect(startx,600, 50,-dataset[s].percent*scale_f); //multiply by scale factor
		context.fillStyle = chartcolors[s];
		context.fill();
		context.font = '10pt Helvetica';
		context.fillStyle = 'black';
    	context.fillText(dataset[s].name, startx, 620);
		startx += 50;
	}			        
}