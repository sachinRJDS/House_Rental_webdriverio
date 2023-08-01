
class RandomNo{
    randomNo(){
        var a=Math.random()*300
       var randomNo=Math.trunc(a)
       return randomNo;
    }

    mobileno(){
        var mobileno=""
      for(let i=0;i<10;i++){
    var a=Math.random()*10
    var b=Math.trunc(a)
    mobileno=mobileno+b
     }
     return mobileno;
    }
}
export default new RandomNo()