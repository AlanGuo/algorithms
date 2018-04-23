let run = function(func, params, times){

  let startTime = + new Date(), res
  for(let i=0;i<times;i++){
    res = func(params)
  }
  console.log("结果: ", res, "耗时: "+ (+new Date()-startTime)+"ms")
}


module.exports = {
  run : run
}