class Formatter {
  //add static methods here
  
  static capitalize(string){

 
      return string.charAt(0).toUpperCase() + string.slice(1)


 }
 static sanitize(string){
    return string.replace(/[^-,'A-Za-z0-9\s]+/g, '');
}

  
  static titleize(string){
      
   let s = string.split(" ")
 let filtering = s.map(item => {
   if(item == "a" || item == "an" || item == "but" || item == "of" || item == "and" || item == "for" || item == "at" || item == "by" || item == "from" || item=="the"){
     if(s[0]==item){return item.charAt(0).toUpperCase()+item.slice(1)}
     else{return item}
   }else {return item.charAt(0).toUpperCase()+ item.slice(1)}
 })
 return filtering.join(" ")
 
 
}

  
  
  
}
console.log(Formatter.sanitize("56634646"))