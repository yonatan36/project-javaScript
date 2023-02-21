const validate = (regex , value , min , max) =>{
let msgsArr = [];
if (value.length < min){
 msgsArr = [...msgsArr , "to short"];
}
if (value.length > max){
    msgsArr= [...msgsArr,"to long"]  
}
if (!regex.test(value)){
    msgsArr = [...msgsArr ,"is invalid!"]
}
return msgsArr;
};
export default validate;