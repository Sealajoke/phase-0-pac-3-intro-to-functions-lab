
    function shout(string) {
       
        return string.toUpperCase()
      }

    
    shout(string)

    function whisper(string) {
     console.log(string.toLowerCase())
    }
    whisper("HELLO")
      function sayHiToHeadphonedRoommate(string){
        if(string==string.toLowerCase())
        {return "I can't hear you!"}
        if(string==string.toUpperCase()){
          return "YES INDEED!"
        }
        if(string=="Let's have dinner together!"){
          return  "I would love to!"
        }
      }


/*
        function sayHiToHeadphonedRoommate(string){
         
          console.log("I can't hear you!", string.toLowerCase())
          console.log("yes indeed", string.toUpperCase())
          console.log("I would love to!",string.("Let's have dinner together"))
        }

        sayHiToHeadphonedRoommate("hello")


function sayHiToHeadphonedRoommate(string){
         
  console.log("I can't hear you!", string.toLowerCase())
  console.log("yes indeed", string.toUpperCase())
  console.log("I would love to!",string.("Let's have dinner together"))
}

sayHiToHeadphonedRoommate("hello")
      /*

        sayHiToHeadphonedRoommate(string)
       returns "I can't hear you!" if `string` is lowercase:
     ReferenceError: sayHiToHeadphonedRoommate is not defined
 (test/index-test.js:40:5)
      at processImmediate (internal/timers.js:461:21)

  6) sayHiToHeadphonedRoommate(string)
       returns "YES INDEED!" if `string` is uppercase:
     ReferenceError: sayHiToHeadphonedRoommate is not defined
 (test/index-test.js:44:5)
      at processImmediate (internal/timers.js:461:21)

  7) sayHiToHeadphonedRoommate(string)
       returns "I would love to!" if `string` is "Let's have dinner together!"`:
     ReferenceError: sayHiToHeadphonedRoommate is not defined
 (test/index-test.js:48:5)
      at processImmediate (internal/timers.j
      */