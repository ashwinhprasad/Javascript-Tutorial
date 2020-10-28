arr = [{
  title:"Ashwin the great",
  is_true : true,
},{
  title:"Ashwin the badass",
  is_true:true,
},{
  title:"Kavin is shit",
  is_true:true,
}]

const find = function(myTitle){

  let output = arr.findIndex(function(truth,i){
    return truth.title == myTitle;
  })

  return output;
}


console.log(find('Ashwin the badass'))
