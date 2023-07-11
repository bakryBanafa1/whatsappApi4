const https =require ("https");
function SendMessageWhatsapp(textRespones,number){
    const data =JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "text" : {
            "body": textRespones
        },
        "type":"text"
    });
    const options ={
        host: "graph.facebook.com",
        path: "/v13.0/102267635993060/messages" ,
        method: "POST",
        body: data ,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAALDZB4bbJFsBALg647whQmcDKFP7iOHxIAZBp5rdpGDZAod9IuGxLVSUI1OMXDNCZBXtMci4Pgm2tVZAKOwlh6ubQK1xICZBYAmPUOBUQwkuBPOniX7BIASILukQjSR0lBJan4VmHx7gDE2uPlwKmkCcX93VyKN5Nw8DRVL7PTXwNw4ZCEdU9X"
        }
    };
    const req =https.request(options,res =>{
        res.on("data", d=>{
            process.stdout.write(d);
        });
    });
     req.on("error",error =>{
        console.error(error);
    });
    req.write(data);
    req.end();
}
module.exports ={
    SendMessageWhatsapp
}
