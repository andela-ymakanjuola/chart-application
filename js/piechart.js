//function to plot pie chat from dataset
function pieChart(dataset,max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var chartcolors = ['#C62828','#6A1B9A', '#283593', '#0277BD', '#00695C', 
						'#558B2F', '#F9A825', '#EF6C00', '#4E342E', '#37474F'];  
	var x = (canvas.width/2);
	var y = (canvas.height/2);
	var radius = y-120;	
	var start_angle = 0;
    var starty = 100;
    var title = document.getElementById('title').value;
              
    context.clearRect(0, 0, canvas.width, canvas.height);

    //write chart title
    context.font = '20pt Helvetica';
    context.fillStyle = 'black';
    context.textAlign = "center";
    context.fillText(title, canvas.width/2, 50); 
              
    

	//convert percentage in radians and plot graph				
	for(var s in dataset){
		dataset[s].radian = (dataset[s].percent/100)*Math.PI*2;
		context.fillStyle = chartcolors[s];
		context.beginPath();
		context.arc(x, y, radius, start_angle,start_angle+dataset[s].radian, false);
		context.lineTo(x,y);
		context.fill();

		//create Legend
		context.rect(canvas.width-120,starty, 20,20);
		context.fillStyle = chartcolors[s];
		context.fill();
		context.font = '12pt Helvetica';
		context.fillStyle = 'black';
		context.textAlign = "left";
    	context.fillText(dataset[s].names, canvas.width-90, starty+14);

		start_angle += dataset[s].radian;
		starty+=25;
	}    
}