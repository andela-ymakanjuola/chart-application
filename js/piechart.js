//function to plot pie chat from dataset
function piechart(dataset,max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var chartcolors = ['#C62828','#6A1B9A', '#283593', '#0277BD', '#00695C', 
						'#558B2F', '#F9A825', '#EF6C00', '#4E342E', '#37474F'];  
	var x = (canvas.width/2);
	var y = (canvas.height/2);
	var radius = y-100;	
	var startAngle = 0;
    var title = document.getElementById('title').value;
    var starty = 50;

              
    context.clearRect(0, 0, canvas.width, canvas.height);
              
    context.font = '20pt Helvetica';
    context.fillText(title, x-100, 50);

	//convert percentage in radians and plot graph				
	for(var s in dataset){
		dataset[s].radian = (dataset[s].percent/100)*Math.PI*2;
		context.fillStyle = chartcolors[s];
		context.beginPath();
		context.arc(x, y, radius, startAngle,startAngle+dataset[s].radian, false);
		context.lineTo(x,y);
		context.fill();

		//create Legend
		context.rect(canvas.width-100,starty, 15,15);
		context.fillStyle = chartcolors[s];
		context.fill();
		context.font = '10pt Helvetica';
		context.fillStyle = 'black';
		context.textAlign = "left";
    	context.fillText(dataset[s].name, canvas.width-80, starty+12);

		startAngle += dataset[s].radian;
		starty+=20;
	}    
}