const buildHTML = (XHR) =>{
  cを作成
    const item = XHR.response.post;
    //XHR.response.postと記述することで、レスポンスの中から投稿されたメモの情報を抽出し、変数itemに格納
    const html = `
            <div class = "post">
              <div class = "post-date">
              投稿日時 :${item.created_at}
              </div>
              <div class = "post-content">
              ${item.content}
              </div>
            </div>`;
    return html;
    //関数buildHTMLの戻り値にhtmlを指定（5行目に定義した変数htmlのこと）
};

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
    XHR.onload = () => {
      if (XHR.status !=200){
          //XHR.statusには、HTTPステータスコードが格納される。
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
        //return null;によってJavaScriptの処理から抜け出す
      };
        const list = document.getElementById("list");
        //新しいメモを挿入するための要素を取得して、変数listに格納
        const formText = document.getElementById("content");
        //リセットの対象となるフォームの要素contentを取得して、変数formTextに格納
        
        
        list.insertAdjacentHTML("afterend" , buildHTML(XHR));
        //insertAdjacentHTMLメソッドの第一引数にafterendを指定することで、変数listに格納された要素の直後に生成したHTMLを挿入
        formText.value = "";
        //formTextのvalue属性に空の文字列を指定することで、フォームの中身をリセット
        
    };
  });
};
window.addEventListener('load', post);
