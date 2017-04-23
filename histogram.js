//function to plot histogram
function histogram(dataset, max) {
  var canvas = document.getElementById('chart');
  var context = canvas.getContext('2d');
  var startx = 51; 
  var chartColors = ['#00ffff','#ff00ff','#0000ff', '#00ff00', '#ff0000', 
						'#808000', '#000000', '#c0c0c0', '#008080', '#800000',]; 
  var scaleF = (canvas.height-200)/max; //calculate scale factor based on maximum user input				        
  context.clearRect(0, 0, canvas.width, canvas.height);
  plotAxis();

   for(var s in dataset){			    
     context.beginPath();
     context.rect(startx,600, 50,-dataset[s].percent*scaleF); //multiply by scale factor
	   context.fillStyle = chartColors[s];
     context.fill();
	   context.font = '10pt Helvetica';
	   context.fillStyle = 'black';
     context.fillText(dataset[s].name, startx + 10, 620);
		
	 startx += 50;
	}		
                
		        
}