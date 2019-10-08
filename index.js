class Formatter {
  //add static methods here
  static capitalize(str){
    return  str.charAt(0).toUpperCase() + str.substring(1);
  }
  static sanitize(str){
    var stripped = str.replace(/[^-,'A-Za-z0-9\s]+/g, '');

    return stripped;
  
  }

  static titleize(str){
    
    return str.strToTitle()

  }}
  
  String.prototype.strToTitle = function() {
    let smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via|from|)$/i;
    let alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/

    return this.split(' ').map(function(current, index, array){
      if (current.search(smallWords)>-1 && index!= 0 && index != array.lenght-1) {
        return current.toLowerCase();
      }
      return current.replace(alphanumericPattern, function (match) {
        return match.toUpperCase()
      })

    }).join(' ') 
  }
  