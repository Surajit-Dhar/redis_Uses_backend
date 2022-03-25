

const app = require("./index");
const connect = require("./configs/db");


app.listen(8000, async()=>{
    
         await connect();
        console.log("listing on port 8000");
    
});
