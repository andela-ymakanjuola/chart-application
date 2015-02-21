//function to plot histogram
function histogram(dataset, max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 51; 
	var chartcolors = ['#C62828','#6A1B9A', '#283593', '#0277BD', '#00695C', 
						'#558B2F', '#F9A825', '#EF6C00', '#4E342E', '#37474F']; 
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