class Formatter {
  //add static methods here
  static capitalize(headline){
    return headline.charAt(0).toUpperCase() + headline.substring(1);
  }
  static sanitize(str){
    return str.replace(/[^-,'A-Za-z0-9\s]+/g, '');
    // return str.filter(e=>{
    //   if(e>=a & e<=z || (e=='-'|| e==''||e==' '))
    //   {
    //     return e;
    //   }
     
      
    // });
  }
  static titleize(words){
    // 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
    let wordsArr = words.split(" ");
    let exceptWord = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let flag;
    let resultWord = wordsArr.map((word,index)=>{
      if(index===0)
      return word.charAt(0).toUpperCase()+ word.slice(1)
      else
      {
         flag = exceptWord.find(e=>e==word );
         if(flag){
           return word.toLowerCase();
         }
         else if(flag==undefined){
           return word.charAt(0).toUpperCase()+ word.slice(1)
         }
      }
      
    }).join(' ');
    return resultWord;
  }
}