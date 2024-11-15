function sslToJson(obj){
    return {
        "acmeHttp": true,
        "acmeHttps": true,
        "acmeDns": {"isDnsChallEnabled": null,"dns_provider": null, "dns_token": null},
    }
}

function sslEnableDNS(obj, provider){
    if(provider !== "null" || provider !== "disabled"){
        obj.acmeDns.isDnsChallEnabled = true;
        obj.acmeDns.dns_provider = provider;

    }else{
        obj.acmeDns.isDnsChallEnabled = false;
    }
    return obj;
}



function sslJsonToTableRow(tableBodyId, obj){
    const tableBody = document.getElementById(tableBodyId);
    tableBody.innerHTML = null;
    let row = document.createElement("tr");
    let x = document.createElement("th");
        x.innerHTML = '<span class="badge rounded-pill text-bg-light"><i class="bi bi-globe2"></i> HTTP</span>';
    row.appendChild(x);
    x = document.createElement("th");
        x.innerHTML = '<span class="badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">Automatico</span>';
    row.appendChild(x);
    x = document.createElement("th");
        x.innerHTML = '<button type="button" class="btn btn-secondary btn-sm" disabled><i class="bi bi-pencil-square"></i> Automatico</button>';
    row.appendChild(x);
    tableBody.appendChild(row);

    row = document.createElement("tr");
    x = document.createElement("th");
        x.innerHTML = '<span class="badge rounded-pill text-bg-light"><i class="bi bi-globe2"></i> HTTPS</span>';
    row.appendChild(x);
    x = document.createElement("th");
        x.innerHTML = '<span class="badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">Automatico</span>';
    row.appendChild(x);
    x = document.createElement("th");
        x.innerHTML = '<button type="button" class="btn btn-secondary btn-sm" disabled><i class="bi bi-pencil-square"></i> Automatico</button>';
    row.appendChild(x);
    tableBody.appendChild(row);

    row = document.createElement("tr");
    x = document.createElement("th");
        x.innerHTML = '<span class="badge rounded-pill text-bg-light"><i class="bi bi-pc"></i> DNS</span>';
    row.appendChild(x);
    x = document.createElement("th");
        switch(obj.acmeDns.dns_provider){
            case null:
                x.innerHTML = '<span class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">Da Configurare</span>';
                break;
            case "disabled":
                x.innerHTML = '<span class="badge bg-danger-subtle border border-danger-subtle text-danger-emphasis rounded-pill">Disattivo</span>';
                break;
            default:
                x.innerHTML = '<span class="badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">Attivo</span>';
            break;
        }
    row.appendChild(x);
    x = document.createElement("th");
        x.innerHTML = '<button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#my_modal_ssl"><i class="bi bi-pencil-square"></i> Configura</button>';
    row.appendChild(x);
    tableBody.appendChild(row);

    // row = document.createElement("tr");
    // x = document.createElement("th");
    //     x.innerHTML = '<span class="badge rounded-pill text-bg-light"><i class="bi bi-file-earmark-arrow-up-fill"></i> Custom</span>';
    // row.appendChild(x);
    // x = document.createElement("th");
    //     x.innerHTML = '<span class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">Da Configurare</span>';
    // row.appendChild(x);
    // x = document.createElement("th");
    //     x.innerHTML = '<button type="button" class="btn btn-secondary btn-sm" disabled><i class="bi bi-pencil-square"></i> Configura</button>';
    // row.appendChild(x);
    // tableBody.appendChild(row);
}