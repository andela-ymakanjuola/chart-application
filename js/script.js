//funtion to get data from inputs and plot chart based on selection
function plotGraph(){
	var list = document.getElementById("list");  // get div element with id list
    var node_names = list.getElementsByClassName('names'); //get all the input text with class: name 
    var node_values = list.getElementsByClassName('values'); //get all the input text with class: value
    var dataset = [], scale=[];            
    var sum = 0;
    var title = document.getElementById("title").value; //get graph title text           
    var option = chartType();
            
    //push all user data to be plotted into array
    for(var i=0;i<node_names.length;i++){
    	var data ={};
        data.names = node_names[i].value;
        data.values = parseFloat(node_values[i].value);

        sum += data.values; //get sum of data values
        dataset.push(data); 
        ;           
    }                      			    
		
	//calculate value percentage and add to dataset
	for(var j=0;j<dataset.length;j++){
        dataset[j].percent = (dataset[j].values/sum)*100;        
        scale.push(dataset[j].percent);
    }    
    var max = findMax(scale);//get max percentage user input values    
            
    if(option==='barchart'){
    	barChart(dataset, max);
    }
    else if(option==='piechart'){
        pieChart(dataset, max);
    }
    else if(option==='linechart'){
        lineChart(dataset, max);
    }
    else if(option==='histogram'){
        histogram(dataset, max);
    }
}
 
//function to get typeof chart selected            
function chartType(){
	var chart = document.getElementById("charts"); 
    var option = chart.options[chart.selectedIndex].value; //get chart type selected
    return option;
}
      		
//function to create item input list base of number of items
function itemList() {
    var items = document.getElementById("items");
    var option = items.options[items.selectedIndex].value;
    var list = document.getElementById("list");            
    list.innerHTML='';              
    list.appendChild(document.createTextNode("Item Name: Item Value:"));
    //loop to create input elemts based on option selected
	for (var i=0; i<option; i++){
	    var input_label = document.createElement("INPUT");
	    var input_value = document.createElement("INPUT");            
	    input_label.setAttribute("type", "text");
	    input_label.setAttribute("class", "names");
	    input_value.setAttribute("type", "number");
	    input_value.setAttribute("class", "values");
        input_value.setAttribute("value", 0);
	    list.appendChild(document.createElement("BR"));
	    list.appendChild(document.createTextNode(i+1+'. '));
	    list.appendChild(input_label);
	    list.appendChild(input_value);            
	}           		
}

//function to clear created input elements on reset click
function resetItemList(){
    var list = document.getElementById("list");            
    list.innerHTML=''; 
}

//function to find maximum percentage value       
function findMax(A){
	A.sort(function(a, b){return a-b});
	return A.pop();
}
	    			    		
//Function to plot axis with labels from data set
function plotAxis(){
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 70;
    var title = document.getElementById('title').value;
	context.clearRect(0, 0, canvas.width, canvas.height); 
    
    //write chart title and center on canvas            	
    context.font = '20pt Helvetica';
    context.fillStyle = 'black';
    context.textAlign = "center";
    context.fillText(title, canvas.width/2, 50); 

	context.beginPath();
	context.moveTo(startx, 100);
	context.lineTo(startx, canvas.height-100);
	context.lineTo(canvas.width-100, canvas.height-100);
	context.lineWidth = 2;
	context.strokeStyle = '#777777';
	context.stroke();
}			
       