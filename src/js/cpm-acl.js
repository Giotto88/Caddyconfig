/**
 * @description info array -> json acl 
 * @param obj name, basic_auth [{user:"bob","hash":"$2$qowkd"}], "is_whitelist": obj[2], "ip_list": obj[3]
 * https://caddyserver.com/docs/caddyfile/matchers#remote-ip
 * https://caddyserver.com/docs/caddyfile/directives/basic_auth
 */
function aclToJson(obj){
    return {
        "name": obj[0],
        "basic_auth": obj[1],
        "ip_filter": obj[2]
    }
}

function aclJsonToTableRow(tableBodyId, number, obj){
    // console.log("ACL JSON -> HTML")
    // console.log(obj)
    number = number ? number : 0;
    const tableBody = document.getElementById(tableBodyId);
    const row = document.createElement("tr");
    let x = document.createElement("th");
    x.classList.add("text-center");
    x.classList.add("pe-1");
    x.innerHTML = number ? number : 0;
    row.appendChild(x);
    
    x = document.createElement("td");
    //TODO: farla riscrivere a copilot
    x.innerHTML += '<span class="badge rounded-pill text-bg-light me-1">'+(obj.basic_auth == null && obj.ip_filter == null ? '<i class="bi bi-globe2"></i> ' : '')+(obj.basic_auth !== null ? '<i class="bi bi-shield-lock"></i> ' : '')+((obj.ip_filter !== null) ? '<i class="bi bi-bricks"></i> ' : "")+obj.name.trim()+'</span>'
    row.appendChild(x);
    
    x = document.createElement("td");
    x.innerHTML = '<span class="badge rounded-pill text-bg-light me-1">'+ (obj.basic_auth !== null ? '<i class="bi bi-check2"></i>':'<i class="bi bi-x-lg"></i>')+'</span>';
    row.appendChild(x);
    
    x = document.createElement("td");
    x.innerHTML = '<span class="badge rounded-pill text-bg-light me-1">'+ (obj.ip_filter !== null ? '<i class="bi bi-check2"></i>':'<i class="bi bi-x-lg"></i>')+'</span>';
    row.appendChild(x);

    x = document.createElement("td");
    x.innerHTML = '<div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary btn-sm me-1"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-danger btn-sm" onclick="aclsRemove('+number+')"><i class="bi bi-x-lg"></i></button></div>'
    row.appendChild(x);

    // Append the row to the table body
    tableBody.appendChild(row);
    // console.log("Riga Aggiunta! [ACL]");

}

function updateAclsTable(tableBodyId, obj){
    document.getElementById(tableBodyId).innerHTML = null;
    for (let index = 0; index < obj.length; index++) {
        aclJsonToTableRow(tableBodyId, index, obj[index]);
    }
    console.log("[ACL] Refresh tabella!");
}