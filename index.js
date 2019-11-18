class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase()+str.substring(1);
  }
  
   static sanitize(str){
     return str.replace(/[^A-Za-z0-9- ']+/g, '');
   }
   static titleize(str){
   let arr=["a","and","for","the","an","by","at","from","of","it","but"]
  var splitstr=str.toLowerCase().split(" ");
    let mapping=splitstr.map(item=>{
     
          if(item==arr[0]||item==arr[1]||item==arr[2]||item==arr[3]||item==arr[4]||
          
          item==arr[5]||item==arr[6]||item==arr[7]||item==arr[8]||item==arr[9]||item==arr[10]){
          if(splitstr[0]==item)
          {  return item.charAt(0).toUpperCase()+item.substring(1)}

             
            else { return item; }
                
        
          }
    else{
        return item.charAt(0).toUpperCase()+item.substring(1)
}})
   
 return mapping.join(" ") 
} 



/*var splitstr=str.toLowerCase().split(" ");
    let mapping=splitstr.map(item=>{
     for(var i=0;i<arr.length;i++){
          if(item==arr[i]){
          if(splitstr[0]==item)
          {  return item.charAt(0).toUpperCase()+item.substring(1)}

             
            else { return item; }
                
        
          }
    else{
        return item.charAt(0).toUpperCase()+item.substring(1)
}}})
return mapping.join(" ")  

   }*/

}
 


   
