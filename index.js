class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    static sanitize(string){
  return string.replace(/[^A-Za-z0-9-']+/g, '');
  }
   static titleize(string){
    let g= string.split(" ");
    let all=[]
    for(let i=0;i<g.length;i++){
      if(g[i]=='the' ||g[i]=='a'||g[i]=='an'||g[i]=='but'||g[i]=='of'||g[i]=='and'||g[i]=='for'||g[i]=='at'||g[i]=='by'||g[i]=='form' ){
        all.push(g[i])
      }else{
        all.push(g[i].toUpperCase())
      }
    }
    let u= all.join()
   let sentence= u.replace(","," ")
  return sentence
  }
}