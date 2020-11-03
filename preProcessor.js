const fs=require("fs");
fs.readFile("cars.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        const namesArr=JSON.parse(data).map(elem=>{
            return elem.Name;
        });
        fs.writeFile("namesArr",JSON.stringify(namesArr),(error)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("Saved Sucessfully");
            }
        });
    }
});
