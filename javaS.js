// Menu Mobile Reponsive
const burger = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const Close = document.querySelector('.fa-times');

burger.addEventListener('click', ()=>{
        menu.classList.toggle('menu');
        menu.classList.toggle('menu-active');
});

Close.addEventListener('click', ()=>{
    menu.classList.toggle('menu-close');
});
function outputkh(){
    document.getElementById("5tr").innerHTML = "5 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("5tr5").innerHTML = "5 500 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("6tr").innerHTML = "6 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("6tr5").innerHTML = "6 500 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("7tr").innerHTML = "7 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("7tr5").innerHTML = "7 500 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("8tr").innerHTML = "8 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("8tr5").innerHTML = "8 500 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("9tr").innerHTML = "9 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("9tr5").innerHTML = "9 500 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("10tr").innerHTML = "10 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("11tr").innerHTML = "11 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("12tr").innerHTML = "12 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("13tr").innerHTML = "13 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("14tr").innerHTML = "14 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("15tr").innerHTML = "15 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("16tr").innerHTML = "16 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("17tr").innerHTML = "17 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("18tr").innerHTML = "18 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("19tr").innerHTML = "19 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("20tr").innerHTML = "20 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng)";
    document.getElementById("textt").innerHTML = " Đối với khách hàng không là sinh viên";
}
function outputsv(){
    document.getElementById("5tr").innerHTML = "5 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("5tr5").innerHTML = "5 500 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("6tr").innerHTML = "6 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("6tr5").innerHTML = "6 500 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("7tr").innerHTML = "7 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("7tr5").innerHTML = "7 500 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("8tr").innerHTML = "8 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("8tr5").innerHTML = "8 500 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("9tr").innerHTML = "9 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("9tr5").innerHTML = "9 500 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("10tr").innerHTML = "10 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("11tr").innerHTML = "11 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("12tr").innerHTML = "12 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("13tr").innerHTML = "13 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("14tr").innerHTML = "14 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("15tr").innerHTML = "15 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("16tr").innerHTML = "16 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("17tr").innerHTML = "17 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("18tr").innerHTML = "18 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("19tr").innerHTML = "19 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("20tr").innerHTML = "20 000 000  ₫  (Lãi suất: 1,2% / tháng ----> Kỳ hạn: 6 tháng). Sinh viên lãi suất 3 tháng đầu 0%";
    document.getElementById("textt").innerHTML = " Đối với khách hàng là sinh viên";
}
function clickk(){
    var arr = document.getElementsByTagName("input");
    if(arr[0].checked)
    {
        document.getElementById("intongtien").innerHTML = " 5.360.000  ₫ <br>SV: 5.180.000  ₫ ";
    }
    if(arr[1].checked)
    {
        document.getElementById("intongtien").innerHTML = " 5.896.000  ₫ <br>SV: 5.698.000  ₫ ";
    }
    if(arr[2].checked)
    {
        document.getElementById("intongtien").innerHTML = " 6.432.000  ₫ <br>SV: 6.216.000  ₫ ";
    }
    if(arr[3].checked)
    {
        document.getElementById("intongtien").innerHTML = " 6.968.000  ₫ <br>SV: 6.734.000  ₫ ";
    }
    if(arr[4].checked)
    {
        document.getElementById("intongtien").innerHTML = " 7.504.000  ₫ <br>SV: 7.252.000  ₫ ";
    }
    if(arr[5].checked)
    {
        document.getElementById("intongtien").innerHTML = " 8.040.000  ₫ <br>SV: 7.770.000  ₫ ";
    }
    if(arr[6].checked)
    {
        document.getElementById("intongtien").innerHTML = " 8.576.000  ₫ <br>SV: 8.288.000  ₫ ";
    }
    if(arr[7].checked)
    {
        document.getElementById("intongtien").innerHTML = " 9.112.000  ₫ <br>SV: 8.772.000  ₫ ";
    }
    if(arr[8].checked)
    {
        document.getElementById("intongtien").innerHTML = " 9.648.000  ₫ <br>SV: 9.324.000  ₫ ";
    }
    if(arr[9].checked)
    {
        document.getElementById("intongtien").innerHTML = " 10.184.000  ₫ <br>SV: 9.804.000  ₫ ";
    }
    if(arr[10].checked)
    {
        document.getElementById("intongtien").innerHTML = " 10.720.000  ₫ <br>SV: 10.320.000  ₫ ";
    }
    if(arr[11].checked)
    {
        document.getElementById("intongtien").innerHTML = " 11.792.000  ₫ <br>SV: 11.352.000  ₫ ";
    }
    if(arr[12].checked)
    {
        document.getElementById("intongtien").innerHTML = " 12.864.000  ₫ <br>SV: 12.384.000  ₫ ";
    }
    if(arr[13].checked)
    {
        document.getElementById("intongtien").innerHTML = " 13.936.000  ₫ <br>SV: 13.416.000  ₫ ";
    }
    if(arr[14].checked)
    {
        document.getElementById("intongtien").innerHTML = " 15.008.000  ₫ <br>SV: 14.448.000  ₫ ";
    }
    if(arr[15].checked)
    {
        document.getElementById("intongtien").innerHTML = " 16.080.000  ₫ <br>SV: 15.480.000  ₫ ";
    }
    if(arr[16].checked)
    {
        document.getElementById("intongtien").innerHTML = " 17.152.000  ₫ <br>SV: 16.512.000  ₫ ";
    }
    if(arr[17].checked)
    {
        document.getElementById("intongtien").innerHTML = " 18.224.000  ₫ <br>SV: 17.544.000  ₫ ";
    }
    if(arr[18].checked)
    {
        document.getElementById("intongtien").innerHTML = " 19.296.000  ₫ <br>SV: 18.576.000  ₫ ";
    }
    if(arr[19].checked)
    {
        document.getElementById("intongtien").innerHTML = " 20.368.000  ₫ <br>SV: 19.608.000  ₫ ";
    }
    if(arr[20].checked)
    {
        document.getElementById("intongtien").innerHTML = " 21.440.000  ₫ <br>SV: 20.640.000  ₫ ";
    }
}