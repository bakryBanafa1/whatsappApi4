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
            Authorization: "Bearer EAALDZB4bbJFsBAPgIG585oo3czXHSLSCZBFcPWKelvOtEtwBdN4ZByT9q4xAazJe2XuqzZAukJTo5PZCu4T3J8XZCKhwjIcK5PwVh1OKLo6WVZBCO2dukZBFJIkOTOMj9MKypFatRPu18wXkgM7YM6cEYIkk9iqLZC8wEJH57dCGmYn7DrpmDUD1m"
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
