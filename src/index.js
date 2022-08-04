module.exports = function check(str, bracketsConfig,brack= false) {
   let string="";
   if(str.length==0) return brack
   for(let i=0;i<bracketsConfig.length;i++){
    let bracket= bracketsConfig[i].reduce((a,b)=>a+b)
    let s=str.indexOf(bracket)
    brack=str.includes(bracket)
    string= brack? str.slice(0,s) +str.slice(s+2):""
    if(brack) break;
  }
  return check(string, bracketsConfig, brack)
}
