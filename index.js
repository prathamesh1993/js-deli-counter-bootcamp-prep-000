function takeANumber(current_line,  name){
  if (current_line.length > 3){
  return `"Welcome, ${name}. You are ${}th in the line."`;
  }
  
  else if (current_line.length === 3){
  return `"Welcome, ${name}. You are ${}rd in the line."`;
  }
  
  if (current_line.length === 2){
  return `"Welcome, ${name}. You are 2nd in the line."`;
  }

}