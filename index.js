function something() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("done");
        },3000);
        }
    ) 
         promise.then(function(result){
      console.log(result);
         }
  )
}
something();