//function to plot histogram
function histogram(dataset, max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 71; 
	var chart_colors = ['#C62828','#6A1B9A', '#283593', '#0277BD', '#00695C', 
						'#558B2F', '#F9A825', '#EF6C00', '#4E342E', '#37474F']; 
	var scale_f = (canvas.height-200)/max; //calculate scale factor based on maximum user input	and y-axis			        
	context.clearRect(0, 0, canvas.width, canvas.height);
    plotAxis();

    //create bar per percentage user input             
	for(var s in dataset){			    
		context.beginPath();
        context.rect(startx,canvas.height-100, 60,-dataset[s].percent*scale_f); //multiply by scale factor
		context.fillStyle = chart_colors[s];
		context.fill();
		context.font = '12pt Helvetica';
		context.fillStyle = 'black';
		context.textAlign = "center";
    	context.fillText(dataset[s].names, startx+25, canvas.height-80);
		startx += 60;
	}			        
}