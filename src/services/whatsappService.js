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
            Authorization: "Bearer EAALDZB4bbJFsBANH1mLcqxnyASWT4bcUwbZBzYqYTZBAWyytI7slzUzAVhyF0VpkoPitk7NaxZCp13Lf1hQFiDncriWZAu2qtTHjvHYo1nnnwZAG2xsgkZBBrGbZCY4j2QBTGmZAi71zaPDQBB1Hfs5sarRgWJsfqZB4ArPazbH2GO2fmBwWhat6zRw2BBIrH9Fe1Dfy22zhPHRgZDZD"
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
