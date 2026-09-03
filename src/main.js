import "./style.css";
console.log("Network-Simulatorの土台が起動しました！");

// 1. 画面にある「PCを追加」ボタンを JavaScript の世界にお迎えする
const pcButton = document.querySelector(".btn-pc");

// 2. ボタンが「クリック」されたときに動く仕組み（関数）を作る
pcButton.addEventListener("click", () => {
  // 試しに、裏側の画面（コンソール）に文字を表示してみる
  console.log("💻 PCを追加するボタンがポチッと押されました！");

  // 試しに、ブラウザの画面にポップアップ（アラート）を出してみる
  alert("PCを追加する処理（データ作成）をここから始めます！");
});
