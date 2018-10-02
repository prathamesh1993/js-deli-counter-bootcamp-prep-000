/*
function takeANumber(current_line,  name){
  if (current_line.length > 3){
  return `"Welcome, ${name}. You are ${current_line.length}th in the line."`;
  }
  
  else if (current_line.length === 3){
  return `"Welcome, ${name}. You are 3rd in the line."`;
  }
  
  if (current_line.length === 2){
  return `"Welcome, ${name}. You are 2nd in the line."`;
  }
  
  if (current_line.length === 1){
  return `"Welcome, ${name}. You are 1st in the line."`;
  }

}
*/

function takeANumber(current_line,  name){
  current_line.push(name)
  return `Welcome, ${name}. You are number ${current_line.length} in line.`;
}

function nowServing(current_line){
  if (current_line.length ===0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${current_line.shift()}.`
  }
}

function currentLine(current_line){
  if(current_line.length === 0){
    return "The line is currently empty."
  }else{
    var return_statement = "The line is currently:" 
    for(var x in current_line){
      return_statement + `${x+1}. ${current_line[x]}`
    }
  }
  return return_statement
}




function currentLine(current_line){
  first_part = "The line is currently:";
  if (current_line.length > 0){
    for (var x in current_line){
      if (x + 1 === current_line.length){
        var last_part = x + "." 
      }
    }
    
  }
  
  
  
  
}
















