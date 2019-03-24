function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
    return "There is nobody waiting to be served!"
  } else {
    let firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return firstPerson;
  }
}