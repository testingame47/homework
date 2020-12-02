const openWeb = () => {
  let a = window.prompt("Nhap vao so a");
  switch (a) {
    case '1':
      window.open("https://quantrimang.com");
      break;
    case '2':
      window.open("https://download.com.vn");
      break;
    case '3':
      window.open("https://vndoc.com");
      break;
    default:
      window.open("https://google.com");
  }
}
openWeb();
