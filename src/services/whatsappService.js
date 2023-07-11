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
            Authorization: "Bearer EAALDZB4bbJFsBALwqC9zDHLQt5ohOmWQDmGCojT00O4dhCb2E0mt6rJjH525D9d2vHazFbO9D2ZB5WWfXnATPttA5GnHXblIWhOBsglClkA2cpcb3ovNg25eQ9PyfEVW5yhx1UUtyawKrNo8hvZAvkGoGFpmjJ4Fc2apBshThzDggOWPdpi"
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
