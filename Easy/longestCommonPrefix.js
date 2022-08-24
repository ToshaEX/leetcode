//14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let minStringSize=100000;
    let result="";
    
    //find shortes string
    strs.forEach((str)=>{
        if(str.length < minStringSize){
            minStringSize=str.length;
        }
    });
    
     for(let i=1;i <= minStringSize; i++){
         let strMatch = strs.map((str)=>str.slice(0,i));
         let strSlice=strMatch[0];
         let res =strMatch.every((value)=>value===strSlice)
         
         if(res){
             result=strSlice
         }else{
             return result;
         }
         
     }
    return result;
};