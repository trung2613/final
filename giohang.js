
function themvaogiohang(x){
    var arrsp = new Array();

    var gh_str = sessionStorage.getItem("ssgiohang");
    if (gh_str != null) {
        arrsp = JSON.parse(gh_str);
    }
    var countsp = sessionStorage.getItem("countsp");
    if (countsp == null) {
        countsp = 0;
    }
    var ttsp = x.parentElement.children;
    var hinh = ttsp[0].children[0].src;
    var giasp = ttsp[1].children[0].innerText;
    var tensp = ttsp[2].innerText;
    var slsp = Number(ttsp[3].value);
    var soluong = parseInt(ttsp[3].value);
    var sp = [hinh, tensp, giasp, slsp];
    var coroi = 0;
    for(var i = 0; i < arrsp.length; i++){
        if(arrsp[i][1] == tensp){
            var sldangco = arrsp[i][3];
            sldangco += slsp;
            arrsp[i][3] = sldangco;
            coroi = 1;
            break;
        }
    }

    if (coroi == 0){
        arrsp.push(sp);
        countsp++;
    } 
    

    sessionStorage.setItem("ssgiohang", JSON.stringify(arrsp));
    sessionStorage.setItem("countsp", countsp);
    showcountsp();
}


function laydon(){
 
    var gh_str = sessionStorage.getItem("ssgiohang");
    var arrsp = JSON.parse(gh_str);
    var ttgh = "";
    var tong = 0;
   
    for (var i = 0; i < arrsp.length; i++) {
        var tt = Number(arrsp[i][2]*arrsp[i][3]);
        tong += tt;
        ttgh += `
            <tr>
                <td>${i+1}</td>
                <td><img src = "${arrsp[i][0]}"></td>
                <td>${arrsp[i][1]}</td>
                <td>${arrsp[i][2]}</td>
                <td><input type="number" min="0" max="10" value="${arrsp[i][3]}"
                                            onchange="tinhlaidon(this);"></td>
                <td>${tt}($)</td>
            </tr>
        `
    }
    ttgh +=`
    <tr>
        <td colspan = "5">TỔNG ĐƠN HÀNG</td>
        <td>${tong} ($)</td>
    </tr>
    `
    document.getElementById("mycart").innerHTML = ttgh;
}


function showcountsp(){
    var countsp = sessionStorage.getItem("countsp");
    if (countsp == null) {
        countsp = 0;
    }
    document.getElementById("countsp").innerHTML = countsp;

}

function tinhlaidon(x){
    var gh_str = sessionStorage.getItem("ssgiohang");
    var arrsp = JSON.parse(gh_str);

    var tr = x.parentElement.parentElement;
    var dg = parseInt(tr.children[3].innerHTML);
    var sl = x.value;
    var tt = parseInt(tr.children[5].innerHTML);
    var tongdon = document.getElementById("tongtien").innerText;
    tongdon -= tt;

    var tensp = tr.children[2].innerText;
    if(sl == 0){
        dongy = confirm("Số lượng 0 sẽ xóa sản phẩm khỏi giỏ hàng. OK?");
        if(dongy == true){
            tr.remove();
        }
        for(var i = 0; i < arrsp.length; i++){
            if(arrsp[i][1] == tensp){
                arrsp.splice(i, 1);
            }
        }
        var countsp = parseInt(sessionStorage.getItem("countsp") - 1);
        sessionStorage.setItem("countsp", countsp);
        showcountsp();
    }else{
        for(var i = 0; i < arrsp.length; i++){
            if (arrsp[i][1] == tensp) {
                arrsp[i][3] = sl;
            }
        }
        tt = dg * sl;
        tr.children[5].innerHTML = tt;
        tongdon += tt;
    }
    document.getElementById("tongtien").innerHTML = tongdon;
    sessionStorage.setItem("ssgiohang", JSON.stringify(arrsp));
}
function showcart(){
    var x = document.getElementById("showcart");
    if(x.style.display == "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
    addcart();
}

function addcart(){
    var gh_str = sessionStorage.getItem("ssgiohang");
    var arrsp = JSON.parse(gh_str);
    var ttgh = "";
    var tong = 0;
    for (var i = 0; i < arrsp.length; i++) {
        var tt = Number(arrsp[i][2]*arrsp[i][3]);
        tong += tt;
        ttgh += `
            <tr>
                <td>${i+1}</td>
                <td><img src = "${arrsp[i][0]}"></td>
                <td>${arrsp[i][1]}</td>
                <td>${arrsp[i][2]}</td>
                <td><input type="number" min="0" max="10" value="${arrsp[i][3]}"
                                            onchange="tinhlaidon(this);"></td>
                <td>${tt}($)</td>
            </tr>
        `
    }
    ttgh +=`
    <tr>
        <td colspan = "5">TỔNG ĐƠN HÀNG</td>
        <td id="tongtien">${tong} ($)</td>
    </tr>
    `
    document.getElementById("mycart").innerHTML = ttgh;
}

