var wrapper= document.body;
var data= [
  {
    Name: "Esneralda",
    Color: "purple"
    
  },
  {
   Name: "Melissa",
   Color: "blue"
  },
  {
   Name: "Jose",
   Color: "green"
  }
];

var elements= [];

function Numbers(Name, Color){
  var that= this;
  this.Name = Name;
  this.Color= Color;
  this.Number= 0;
  this.ele = document.createElement("div");
  this.ele.style.backgroundColor= this.Color;
  this.ele.style.borderRadius= "10px";
  this.ele.style.width="200px";
  this.ele.style.height="100px";
  
  
  
  this.NumberEle=document.createElement("div");
  this.NumberEle.style.fontSize= "18px";
  this.NumberEle.style.verticalAlign= "middle";
  this.NumberEle.style.textAlign= "center";
  this.NumberEle.innerHTML=this.Number;
  this.ele.appendChild(this.NumberEle);
  
  this.ele.addEventListener("click", function(){
    that.increase();
  })
  wrapper.appendChild(this.ele);
  
}

Numbers.prototype.increase= function(){
  this.Number++;
  this.NumberEle.innerHTML=this.Number;
};

for(var i=0; i<data.length; i++){
  elements.push(new Numbers(data[i].Name, data[i].Color))
}