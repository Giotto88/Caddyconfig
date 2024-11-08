/**
 * @description info array -> json proxy 
 * @param obj domain[], origin_method, origin_address, origin_port, set_tproxy, set_skiptls, ssltype, accesslist
 */
function proxyToJson(obj, ){
    return {
        "domain": obj[0],
        "origin": {"https":obj[1],"address":obj[2],"port":obj[3]},
        "settings": {"tproxy":obj[4],"skiptls":obj[5]},
        "ssltype": obj[6],
        "accesslist": obj[7]
    }
}


/**
 * @description json proxy -> html row
 * @param tableBodyId
 * @param number row number
 * @param obj domain[], origin_method, origin_address, origin_port, set_tproxy, set_skiptls, ssltype, accesslist
 * @param arraySSL list of details per SSL id
 * @param arrayAList list of details per AccessList id
 */
function proxyJsonToTableRow(tableBodyId, number, obj, arraySSL ,arrayAList){
    const tableBody = document.getElementById(tableBodyId);
    const row = document.createElement("tr");
    let x = document.createElement("th");
        x.classList.add("text-center");
        x.classList.add("pe-1");
        x.innerHTML = number ? number : 0;
    row.appendChild(x);

    x = document.createElement("td");
        x.innerHTML = "";
        obj.domain.forEach(element => {
            x.innerHTML += '<span class="badge rounded-pill text-bg-secondary me-1">'+element.trim()+'</span> ';         
        });
        row.appendChild(x);
    
    x = document.createElement("td");
        x.innerHTML = '<span class="badge rounded-pill text-bg-light">' + (obj.origin.https?("https://"):("http://")) + obj.origin.address +":"+obj.origin.port+'</span>';
        row.appendChild(x);

    x = document.createElement("td");
        x.innerHTML = '<span class="badge rounded-pill text-bg-light">Let s Encrypt</span>';
        row.appendChild(x);
    x = document.createElement("td");
        x.innerHTML = '<span class="badge rounded-pill '+(obj.accesslist == 1? ('text-bg-warning"> <i class="bi bi-shield-lock"></i> Restricted'):('text-bg-success"> <i class="bi bi-globe2"></i> Pubblic'))+'</span>';
        row.appendChild(x);
    x = document.createElement("td");
        x.innerHTML = '<span class="badge text-bg-success">Online</span>';
        row.appendChild(x);
    x = document.createElement("td");
        x.innerHTML = '<div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary btn-sm me-1"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-danger btn-sm" onclick="proxysRemove('+number+')"><i class="bi bi-x-lg"></i></button></div>'
        row.appendChild(x);

    // Append the row to the table body
    tableBody.appendChild(row);
    // console.log("Riga Aggiunta! [PROXY]");

}
function updateProxysTable(tableBodyId, obj, arraySSL, arrayAList){
    document.getElementById(tableBodyId).innerHTML = null;
    for (let index = 0; index < obj.length; index++) {
        proxyJsonToTableRow(tableBodyId,index,obj[index]);
    }
    console.log("[PROXY] Refresh tabella!");
}
