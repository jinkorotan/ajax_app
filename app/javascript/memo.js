function post (){
  //getElementByIdメソッドで取得した投稿ボタンの要素を変数submitに格納
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    //preventDefault()の対象をeとすることにより、「投稿ボタンをクリックした」という現象を無効化している
    const form =document.getElementById("form");
    //getElementByIdメソッドで取得したフォームの要素を変数formに格納
    const formData = new FormData(form); 
    //メモ投稿のフォームに入力された値を、非同期通信で送信する必要があるためフォームの値を取得 
    const XHR = new XMLHttpRequest();
    //非同期通信を行うためにXMLHttpRequestオブジェクトを生成
    XHR.open("POST", "/posts" , true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};
window.addEventListener('load', post);
