class Formatter {
  static capitalize(string){
      return  string.charAt(0).toUpperCase() + string.slice(1);
    }
static sanitize(string){
    return string.replace(/[^-,'A-Za-z0-9\s]+/g, '');
}
static titleize(string){
  // console.log('string',string)
    const punj = ['the','a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    // let cap = string.replace(/^.{1}/g, s[0].toUpperCase());
    let arr = string.split(' ');
    // let capitalizedArray = arr.map(word=>word.CharAt(0).)
    let last = arr.map(function(word){
      let isTrue = punj.includes(word);
      // for(let i = 0; i < punj.length; i ++){
      //   let isTrue = false;
        if(!isTrue){

          return word.charAt(0).toUpperCase() + word.substring(1);
        }else{
          return word.toLowerCase();
        }
      // }
    });
    // console.log(last.join(' '))

    let final = last.join(' ');
    return final.charAt(0).toUpperCase() + final.substring(1);
  }
}
