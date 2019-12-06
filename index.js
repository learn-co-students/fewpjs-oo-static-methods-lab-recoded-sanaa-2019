class Formatter {
  //add static methods here
  static capitalize(strcap){
    return  strcap.charAt(0).toUpperCase() + strcap.substring(1);
  }
  static sanitize(strstrp){
   let strip = strstrp.replace(/[^-,'A-Za-z0-9\s]+/g, '');
   return  strip
  }

  static titleize(strtit){
    
    return strtit.strToTitle()
  }}
  
  String.prototype.strToTitle = function() {
    let Words = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via|from|)$/i;
    let Pattern = /([A-Za-z0-9\u00C0-\u00FF])/

    return this.split(' ').map(function(now, index, arr){
      if (now.search(Words)>-1 && index!= 0 && index != arr.lenght-1) {
        return now.toLowerCase();
      }
      return now.replace(Pattern, function (find) {
        return find.toUpperCase()
      })

    }).join(' ') 
  }