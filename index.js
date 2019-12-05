class Formatter {
  //add here
  static capitalize(string){
      return  string.charAt(0).toUpperCase() + string.slice(1);
    }
static sanitize(string){
    return string.replace(/[^-,'A-Za-z0-9\s]+/g, '');
}
static titleize(string){
 //takes in a string and capitalizes all words in a sentence //except the, a, an, but, of, and, for, at, by, and from; and //always capitalizes the first word.
    const ex = ['the','a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    
    let a = string.split(' ');
   
    let lastString = a.map(function(word){
      let isTrue = ex.includes(word);
    
        if(!isTrue){

          return word.charAt(0).toUpperCase() + word.substring(1);
        }else{
          return word.toLowerCase();
        }
      
    });
    

    let finalResult = lastString.join(' ');
    return finalResult.charAt(0).toUpperCase() + finalResult.substring(1);
  }
}