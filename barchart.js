//function to plot bar chat			  
function barchart(dataset, max) {
  var canvas = document.getElementById('chart');
  var context = canvas.getContext('2d');
  var startx = 80;
  var chartColors = ['#00ffff','#ff00ff','#0000ff', '#00ff00', '#ff0000', 
						'#808000', '#000000', '#c0c0c0', '#008080', '#800000',];   
  var scaleF = (canvas.height-200)/max;				        
  context.clearRect(0, 0, canvas.width, canvas.height);
	//context.font = '30pt Arial';
  context.strokeStyle='#B71C1C';
  renderBackground();
  plotAxis();

  for(var s in dataset){ 
	context.strokeStyle='#B71C1C';
	context.beginPath();
    context.rect(startx,600, 30,-dataset[s].percent*scaleF); //multiply by 10 to improve scaling
	context.fillStyle = chartColors[s];
    context.fill();
	context.font = '10pt Helvetica';
	context.fillStyle = 'black';
    context.fillText(dataset[s].name, startx, 620);
	startx += 50;
	}

function renderBackground() {
  var lingrad = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  lingrad.addColorStop(0.0, '#D4D4D4');
  lingrad.addColorStop(0.2, '#fff');
  lingrad.addColorStop(0.8, '#fff');
  lingrad.addColorStop(1, '#D4D4D4');
  context.fillStyle = lingrad;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'black';
	}	

}

