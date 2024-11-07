// JSON reverse proxy variable idea
// [
//     {
//       "Domain": [
//         "code.example.com",
//         "pubblic.example.com"
//       ],
//       "Origin": {
//         "https": true,
//         "origin_address": "192.168.1.21",
//         "origin_port": 443
//       },
//       "Settings": {
//         "skip_tls": true,
//         "cloudflare_tproxy": true,
//         "websocket": true,
//         "cache_support": true
//       },
//       "AccessList": 1,
//       "SSLType": 1
//     }
//   ]

class ReverseProxy {
    constructor(){
        this.domain = [];
        this.origin = {"https":false,"origin_address":null,"origin_port":null};
        this.settings = {"skip_tls":false,"cloudflare_tproxy":true,"cache_support":true};
        //TODO access in some way to an object or const of accesslist or ssltype;
        this.accesslist = 0;
        this.ssltype = 0;
    }

    getReverseProxy(){
        return Object.assign(this);
    }
    setAddDomain(x){
        if (!x instanceof String) return false;
        x = x.split(",");
        x.forEach(element => {
            this.domain.push(element);
        });
        return true;
    }
    setOrigin(obj){
        if(!obj.https instanceof Boolean) return false;
        if(!obj.origin_address instanceof String) return false;
        if(!typeof obj.origin_port === 'number' || isNaN(obj.origin_port)) return false;
        this.origin.https = obj.https;
        this.origin.origin_address = obj.origin_address;
        this.origin.origin_port = obj.origin_port;
    }
    setSettings(obj){
        if(!obj.skip_tls instanceof Boolean) return false;
        if(!obj.cloudflare_tproxy instanceof Boolean) return false;
        // if(!obj.cloudflare_tproxy instanceof Boolean) return false;
        this.settings.skip_tls = obj.skip_tls;
        this.settings.cloudflare_tproxy = obj.cloudflare_tproxy;
        // this.settings.cache_support = obj.cache_support;
    }

}

// Some random test
let a = new ReverseProxy;
console.log(a.setOrigin({"https":false,"origin_address":"hi","origin_port":2}));


// AddReverseProxy - idea
// function AddReverseProxy(){
//     let rev = {};
//     // rev["Domain"] = document.getElementById("").innerHTML.split(",");
//     // rev["Origin"]["https"] = document.getElementById("").checked;
//     // rev["Origin"]["origin_address"] = document.getElementById("").value;
//     // rev["Origin"]["origin_port"] = document.getElementById("").value;
//     // rev["Settings"]["skip_tls"] = document.getElementById("").checked;
//     // rev["Settings"]["cloudflare_tproxy"] = document.getElementById("").checked;
//     // rev["Settings"]["websocket"] = document.getElementById("").checked;
//     // rev["Settings"]["cache_support"] = document.getElementById("").checked;
//     // rev["AccessList"]= document.getElementById("").value;
//     // rev["SSLType"] = document.getElementById("").value;
//     rev = Object.assign(rev,{"domain":[]});
//     rev = Object.assign(rev,{"origin":{"https":false,"origin_address":null,"origin_port":null}});
//     rev = Object.assign(rev,{"settings":{"skip_tls":false,"cloudflare_tproxy":true,"cache_support":true}});
//     rev = Object.assign(rev,{"AccessList":0});
//     rev = Object.assign(rev,{"SSLType":0});
//     console.log(rev);
//     rev.origin.origin_address = "192.168.1.85";
//     rev.origin.origin_port = 443;
//     rev.settings.skip_tls = true;
//     rev.settings.cloudflare_tproxy = true;
//     rev.settings.websocket = true;
//     rev.settings.cache_support = true;
//     rev.accessList = 1;
//     rev.ssltype = 2;
//     console.log(rev);
// }



// function checkReverseProxy(x){
//     if(!(x instanceof Object) || x.length <= 0){
//         return false;
//     }
//     if(!(x["Domain"] instanceof Array) || x["Domain"].length <= 0){
//         return false;
//     }

//     if(!x["Domain"] || x["Domain"].length <= 0){
//         return false;
//     }
//     x["Domain"].forEach(element => {
//         console.log(element);
//     });
//     return true;
// }

// console.log(AddReverseProxy({"Domain":["pippo.com","code.com"]}))

