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
            Authorization: "Bearer EAALDZB4bbJFsBABt9WhSuK1dJPK9RFxLlDe0ijZBiOpdZAc4B6IsRgKaLI980m9ZAWKWOqGA0RythpXboV9MWWmv8wB90iQIIwhdyhpbLBHmez7ZBQCbsTmMYVIrZA9a2W7tXZBuGedkqZBT6vebeGtmRR7SAfBXoaI7EPUZAbdjsptRZCjNTY1l1E6iXSV0VHh5A4G9uhVOow20WDmgbBF2F1avtrRy8HefAZD"
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
