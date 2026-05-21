const App = () => {
  // ヘッダーのスタイル定義
  const headerStyle = {
    backgroundColor: "#3b82f6", // 鮮やかな青色（画像に合わせた調整）
    color: "white",             // 文字色（白）
    padding: "20px 30px",       // 上下・左右の余白
    margin: 0,                  // デフォルトの余白を消す
    fontSize: "32px",           // 文字の大きさ
    fontWeight: "normal",       // 太さの調整
  };

  return (
    <div>
      {/* ヘッダー部分 */}
      <header style={headerStyle}>
        scatter plot of iris data
      </header>

      {/* コンテンツ部分（今後のドロップダウンやグラフ用） */}
      <main style={{ padding: "20px" }}>
        {/* ここにドロップダウンや散布図を実装していきます */}
        
      </main>
    </div>
  );
};

export default App;