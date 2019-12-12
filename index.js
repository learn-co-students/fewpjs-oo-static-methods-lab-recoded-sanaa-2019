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
      if(i==0){
        let cap=g[i].charAt(0).toUpperCase()+g[i].slice(1)
        all.push(cap)
      }else if(g[i]=='the' ||g[i]=='a'||g[i]=='an'||g[i]=='but'||g[i]=='of'||g[i]=='and'||g[i]=='for'||g[i]=='at'||g[i]=='by'||g[i]=='from' ){
        all.push(g[i])
      }else{
        let cap=g[i].charAt(0).toUpperCase()+g[i].slice(1);
        all.push(cap)
      }
    }
    let u= all.join(" ")
   let sentence= all.join(" ")
  return sentence
  }
}