// script.js
// - ページ読み込み後に簡単な DOM 初期化を行うサンプルスクリプトです。
// - このファイルは軽量で、実際のアプリではより多くの初期化や
//   イベントハンドラ設定をここに追加します。
document.addEventListener('DOMContentLoaded', () => {
  // フッターに現在の年を表示します（自動更新されるので手動更新不要）。
  const year = new Date().getFullYear()
  const footer = document.querySelector('footer p')
  if (footer) {
    // テキストは `© <year> mimamorukun` の形式にしています。
    footer.textContent = `© ${year} mimamorukun`
  }

  // ここに追加の DOM 初期化コードを書けます。
  // 例: ボタンのイベント登録、Analytics の初期化、ダークモード切替など。
})
