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
            Authorization: "Bearer EAALDZB4bbJFsBADKJpHg5tC9XJo0Q25aGVZAbJCHof3Iqgu0zdALhBJEwu4ajzreCdw1PONRX53GkX6S7ZBlfPN6L2seJiDUQmEd9j4Qfju8nHw31LeWeD2e1YkonEt8ZBOyh1SI3zQ0yPzpuSnpa80PuMWZAzLodx0mMGWI9aBjYuHDr3IOw"
        }
    };
    const req =https.request(options,res =>{
        res.on("data", d=>{
            process.stdout.write(d);
        });
    });
    req.write(data);
    req.end();
}
module.exports ={
    SendMessageWhatsapp
}