
sNames = ["bin", "oct", "dec", "hex"];
sDigits = ["01", "01234567", "0123456789", "0123456789ABCDEFabcdef"];
function check(){
  sfrom=from.value;
  sto=to.value;
  if(!checkInp(sDigits[sNames.indexOf(sfrom)], inp.value)){
    alert("Invalid input");
  }
  else{
    if(sfrom==sto){
      oup.value=inp.value;
    }
    else{
      choose();
    }
  }

}
function checkInp(sys,num){
  for(i=0; i<num.length; i++){
    if(sys.indexOf(num[i])==-1){
      return false;
    }
  }
  return true;
}
function choose(){
  if(sfrom=="bin"){
    if(sto=="oct") oup.value=binToOct(inp.value);
    else if(sto=="dec") oup.value=binToDec(inp.value);
    else if(sto=="hex") oup.value=binToHex(inp.value);
  }
  else if(sfrom=="oct"){
    if(sto=="bin") oup.value=octToBin(inp.value);
    else if(sto=="dec") oup.value=octToDec(inp.value);
    else if(sto=="hex") oup.value=octToHex(inp.value);
  }
  else if(sfrom=="dec"){
    if(sto=="bin") oup.value=decToBin(inp.value);
    else if(sto=="oct") oup.value=decToOct(inp.value);
    else if(sto=="hex") oup.value=decToHex(inp.value);
  }
  else if(sfrom=="hex"){
    if(sto=="bin") oup.value=hexToBin(inp.value);
    else if(sto=="oct") oup.value=hexToOct(inp.value);
    else if(sto=="dec") oup.value=hexToDec(inp.value);
  }
  else alert("Error");
}



const decToBin = (str) =>
{ 
    str  = str * 1;
    return str.toString(2);
}

const decToOct = (str) =>
{ 
    str  = str * 1;
    return str.toString(8);
}

const decToHex = (str) =>
{ 
    str  = str * 1;
    return str.toString(16);
}

const hexToBin = (str) =>
{
    let a = parseInt(str,16);
    return a.toString(2);
}


const hexToDec = (str) =>
{
    return parseInt(str,16);
}

const hexToOct = (str) =>
{
    let a = parseInt(str,16);
    return a.toString(8);
}

const binToDec = (str) =>
{
    return  parseInt(str,2);
}

const binToOct = (str) =>
{
    let a = parseInt(str,2);
    return a.toString(8);
}

const binToHex = (str) =>
{
    let a = parseInt(str,2);
    return a.toString(16);
}

const octToBin = (str) =>
{
    let a = parseInt(str,8);
    return a.toString(2);
}

const octToDec = (str) =>
{
    return  parseInt(str,8);
}

const octToHex = (str) =>
{
    let a = parseInt(str,8);
    return a.toString(16);
}






