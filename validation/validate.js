const validate = (regex , value , min , max) =>{
magArr = []
if (value.length < min){
 msgArr = [...msgArr , "to short"];
}
if (value.length > max){
    msgArr= [...msgArr,"to long"]  
}
if (!regex.test(value)){
    msgArr = [...msgArr ,"is invalid!"]
}
return msgArr;
};
export default validate;