//20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let strArr= s.split("");
    const strLength=s.length;
    
    const stack=[];
    
    for(let i=0;i<strLength;i++){
        
        if(stack.length===0){
            
            if(strArr[i]==="(") stack.unshift(1);
            if(strArr[i]=== "{") stack.unshift(2);
            if(strArr[i]==="[") stack.unshift(3);
            if(strArr[i]===")"||strArr[i]==="}"||strArr[i]==="]") return false;
            
        }else{
            
            if(strArr[i]==="("||strArr[i]==="{"||strArr[i]==="["){
                
                if(strArr[i]==="(") stack.unshift(1);
                if(strArr[i]=== "{") stack.unshift(2);
                if(strArr[i]==="[") stack.unshift(3); 
                
            }else{
                let j=stack.shift();
                if(strArr[i]=== ")") {if(j!=1)return false};
               if(strArr[i]=== "}") {if(j!=2)return false};
                if(strArr[i]==="]") {if(j!=3)return false};
            }      
        
}
}
    if(stack.length===0){
        return true;
    }
    return false;       
    
};