function xacthuc(){
    var arr = document.getElementsByTagName("input");
    var name = arr[0].value;
    var cmnd_cccd = arr[1].value;
    var ngaysinh = arr[2].value;
    var sdt = arr[6].value;
    var email = arr[7].value;
    var diachi = arr[8].value;
    
    if (name == "" || cmnd_cccd == "" || sdt == "" || email =="" || diachi == "" || ngaysinh == "") 
    {
        alert("Bạn chưa điền đủ thông tin.");
        return;
    }
    var tmp = confirm('Bạn đã gửi đăng ký thành công. Trong vòng 24h từ khi bạn gửi phiếu đăng ký bên hổ trợ sẽ liên hệ với số điện thoại bạn điền vào phiếu đăng ký để xác nhận về cách thức thanh toán (nếu sau 24h vẫn không có ai liên lạc bạn hãy gọi tới hotline 1900.2523.xxx).')
    if (tmp == 1) 
    {
        alert('Vui lòng giữ điện thoại. Cảm ơn đã tin tưởng APA.')   
    }
}