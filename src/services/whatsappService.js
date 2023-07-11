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
            Authorization: "Bearer EAALDZB4bbJFsBAHgbnRrF0ltbYvafawJGghugE6PdkLDxKWAIVfZBlFlXVn27ZBt8ru2A6hnp9FxkfeOqKPjpm3Os1K05HTSkeZBCGJs2LZCfFfafOxqapANCj4gZAwZCGLlcgGMSeHdUZB3FOoPsgQOHCFwoZBwZAdyBEw1Yqslyz1us1VAVBlKao"
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
