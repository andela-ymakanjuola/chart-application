//funtion to get data from inputs and plot chart based on selection
function plotGraph(){
	var list = document.getElementById("list");  // get div element with id list
    var node_name = list.getElementsByClassName('name'); //get all the input text with class: name 
    var node_value = list.getElementsByClassName('values'); //get all the input text with class: value
    var dataset = [], scale=[];            
    var sum = 0;
    var title = document.getElementById("title").value; //get graph title text           
    var option = charttype();
            
    //push all user data to be plotted into array
    for(var i=0;i<node_name.length;i++){
    	var data ={};
        data.name = node_name[i].value;
        data.value = parseInt(node_value[i].value);

        sum += data.value; //get sum of data values
        dataset.push(data); 
        ;           
    }                      			    
		
	//calculate value percentage and add to dataset
	for(var j=0;j<dataset.length;j++){
        dataset[j].percent = Math.round((dataset[j].value/sum)*100);
        
        scale.push(dataset[j].percent);
    }
    console.log(scale);
    var max = findMax(scale);//max user linput value
    console.log(max);
            
    if(option==='barchart'){
    	barchart(dataset, max);
    }
    else if(option==='piechart'){
        piechart(dataset, max);
    }
    else if(option==='linechart'){
        linechart(dataset, max);
    }
    else if(option==='histogram'){
        histogram(dataset, max);
    }
}
 
//function to get typeof chart selected            
function charttype(){
	var chart = document.getElementById("charts"); 
    var option = chart.options[chart.selectedIndex].value; //get chart type selected
    return option;
}
      		
//function to create item input list base of number of items
function itemlist() {
    var no = document.getElementById("items");
    var option = no.options[no.selectedIndex].value;
    var list = document.getElementById("list");            
    list.innerHTML='';              
    list.appendChild(document.createTextNode("Item Name:  Item Value:"));
    //list.appendChild(document.createTextNode("Item Value:"));
	for (var i=0; i<option; i++){
	    var input_label = document.createElement("INPUT");
	    var input_value = document.createElement("INPUT");            
	    input_label.setAttribute("type", "text");
	    input_label.setAttribute("class", "name");
	    input_value.setAttribute("type", "number");
	    input_value.setAttribute("class", "values");
	    list.appendChild(document.createElement("BR"));
	    list.appendChild(document.createTextNode(i+1+'. \t'));
	    list.appendChild(input_label);
	    list.appendChild(input_value);            
	}           		
}
       
function findMax(A){
	A.sort(function(a, b){return a-b});
	return A.pop();
}

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
		    			
//function to plot pie chat from dataset
function piechart(dataset,max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var chartcolors = ['#B71C1C','#4A148C', '#1A237E', '#01579B', '#004D40', 
						'#33691E', '#F57F17', '#E65100', '#3E2723', '#263238'];
	var x = (canvas.width/2)-50;
	var y = (canvas.height/2)-50;
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
		context.rect(550,starty, 15,15);
		context.fillStyle = chartcolors[s];
		context.fill();

		context.font = '10pt Helvetica';
		context.fillStyle = 'black';
    	context.fillText(dataset[s].name, 570, starty+12);
		startAngle += dataset[s].radian;
		starty+=20;
	}    
}
          
			
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
		context.lineWidth = 3;
		context.strokeStyle = '#F44336';
		context.stroke();
		//create Labels
		context.font = '10pt Helvetica';
		context.fillStyle = 'black';
    	context.fillText(dataset[s].name, startx, 620);
		startx += 50;
	}	
}

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
			
//Function to plot axis with labels from data set
function plotaxis(){
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 50;
    var title = document.getElementById('title').value;
	context.clearRect(0, 0, canvas.width, canvas.height);              	
    context.font = '20pt Helvetica';
    context.fillStyle = 'black';
    context.fillText(title, canvas.width/2-100, 50);
	context.beginPath();
	context.moveTo(startx, 100);
	context.lineTo(startx, 600);
	context.lineTo(600, 600);
	context.lineWidth = 2;
	context.strokeStyle = '#777777';
	context.stroke();
}			
       