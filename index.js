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
  return `"Welcome, ${name}. You are number ${current_line.length} in line."`;
}