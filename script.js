//funtion to get data from inputs and plot chart based on selection
function plotGraph(){
  var list = document.getElementById("list");  // get div element with id list
  var nodeName = list.getElementsByClassName('name'); //get all the input text with class: name 
  var nodeValue = list.getElementsByClassName('values'); //get all the input text with class: value
  var dataset = [], scale=[];            
  var sum = 0;
  var title = document.getElementById("title").value; //get graph title text           
  var option = charttype();


  for(var i=0;i<nodeName.length;i++){
    var data ={};
    if (nodeValue[i].value <= -1){
      alert("Cannot enter negative values");
      return false;
    }

    data.name = nodeName[i].value;
    data.value = parseInt(nodeValue[i].value);
    sum += data.value; //get sum of data values
    dataset.push(data); 
              
}                      			    
	
//calculate value percentage and add to dataset
  for(var j=0;j<dataset.length;j++){
    dataset[j].percent = Math.round((dataset[j].value/sum)*100);
    
    scale.push(dataset[j].percent);
}

  console.log(scale);

  var max = findMax(scale);//max user linput value
  console.log(max);
        
  if (option==='barchart') {
    barchart(dataset, max);

 }
  else if (option==='piechart') {
    piechart(dataset, max);
 }
  else if (option==='linechart') {
    linechart(dataset, max);
}
  else if (option==='histogram') {
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
    list.appendChild(document.createTextNode("Item Name: Item Value:"));

//list.appendChild(document.createTextNode("Item Value:"));

    for (var i=0; i<option; i++) {
      var inputLabel = document.createElement("INPUT"); 
      var inputValue = document.createElement("INPUT");            
      inputLabel.setAttribute("type", "text");
      inputLabel.setAttribute("class", "name");
      inputValue.setAttribute("type", "number");
      inputValue.setAttribute("class", "values");
      inputValue.setAttribute("value", 0);
      inputValue.setAttribute("min", 0);
      list.appendChild(document.createElement("BR"));
      list.appendChild(document.createTextNode(i+1+'. '));
      list.appendChild(inputLabel);
      list.appendChild(inputValue);            
  }           		
  }

//function to find maximum percentage value       
function findMax(A) {
  A.sort(function(a, b){return a-b});
  return A.pop();
 }
    			    		
//Function to plot axis with labels from data set
function plotAxis() {
  var canvas = document.getElementById('chart');
  var context = canvas.getContext('2d');
  var startx = 50;
  var title = document.getElementById('title').value;
 

  context.clearRect(0, 0, canvas.width, canvas.height);              	
  context.font = '20pt Helvetica';
  context.fillStyle = 'black';
  context.textAlign = "center";
  context.fillText(title, canvas.width/2, 50);
  context.beginPath();
  context.moveTo(startx, 100);
  context.lineTo(startx, canvas.height-100);
  context.lineTo(canvas.width-100, canvas.height-100);
  context.lineWidth = 4;
  context.strokeStyle = '#777777';
  context.stroke();

 

}			


function Clear(){
   window.location.reload();
}