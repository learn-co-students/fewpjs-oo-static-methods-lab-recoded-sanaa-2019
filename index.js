class Formatter {
  //add static methods here
  static capitalize(string){
    let arr=string.split(' ');
    string=function(){
      let string="";
      
      for(let e of arr.map(function(a){
        return a.charAt(0).toUpperCase()+a.slice(1)
      }) ){
        string+=e+" ";
      }
      return string
    }()
    return string.slice(0,(string.length-1))
  }
  static sanitize(string){
    return string.replace(/[^A-Z0-9a-z-' ]+/g, '');
  }
  static titleize(string){
    let str=this.sanitize(this.capitalize(string));
    console.log(str)
    let arr=str.split(" ");
    
    let st="";
    arr.forEach(function(e){
      switch(e){
        case "The":
        st+=(e.toLowerCase()+" ")
        break;
        case "A":
        st+=(e.toLowerCase()+" ");
        break;
        case "An":
        st+=(e.toLowerCase()+" ")
        break;
        case "But":
        st+=(e.toLowerCase()+" ")
        break;
        case "Of":
        st+=(e.toLowerCase()+" ")
        break;
        case "And":
        st+=(e.toLowerCase()+" ")
        break;
        case "For":
        st+=(e.toLowerCase()+" ")
        break;
        case "At":
        st+=(e.toLowerCase()+" ")
        break;
        case "By":
        st+=(e.toLowerCase()+" ")
        break;
        case "From":
        st+=(e.toLowerCase()+" ")
        break;
        default:
        st+=e+" ";
        break;
      }
    })
    return (st.charAt(0).toUpperCase()+st.slice(1)).slice(0,this.length-1)
  }
  
}
console.log(Formatter.titleize("Chicken Soup With Rice and A Few Other Songs"))
