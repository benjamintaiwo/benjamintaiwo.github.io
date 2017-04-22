//function to plot pie chat from dataset
function piechart(dataset,max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var chartcolors = ['#00ffff','#ff00ff','#0000ff', '#00ff00', '#ff0000', 
						'#808000', '#000000', '#c0c0c0', '#008080', '#800000',];
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
		context.font = '20pt serif'
		context.fillStyle = 'white'
		context.fillText(dataset[s].name, x, y)
		
        	//create Legend
		context.rect(canvas.width-100,starty, 15,15);
		context.fillStyle = chartcolors[s];
		context.fill();

		context.font = '10pt Helvetica';
		context.fillStyle = 'black';
    	context.fillText(dataset[s].name, canvas.width-70, starty+12);
		startAngle += dataset[s].radian;
		starty+=20;

	
	}    
}

              
    