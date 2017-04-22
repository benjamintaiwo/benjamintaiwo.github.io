//function to plot histogram
function histogram(dataset, max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 51; 
	var chartcolors = ['#00ffff','#ff00ff','#0000ff', '#00ff00', '#ff0000', 
						'#808000', '#000000', '#c0c0c0', '#008080', '#800000',]; 
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
    	context.fillText(dataset[s].name, startx + 10, 620);
		

		/*	//create Legend
		context.rect(canvas.width-100,starty, 15,15);
		context.fillStyle = chartcolors[s];
		context.fill();

		context.font = '10pt Helvetica';
		context.fillStyle = 'black';
    	context.fillText(dataset[s].name, canvas.width-70, starty+12);*/
		startx += 50;
	}		
                
		        
}