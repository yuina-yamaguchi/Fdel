# Fdel Röte Jazz Orchester — 公式サイト

架空のジャズオーケストラ「Fdel Röte Jazz Orchester」の公式 Web サイトです。  
**黒 × ゴールド × 深紅**を基調にした「ジャズ × アーバン × モダン」の世界観で設計されています。

---

## デザインコンセプト

| 要素 | 詳細 |
|------|------|
| カラー | 黒 `#0a0a0a` / ゴールド `#c9a84c` / 深紅 `#8b1a1a` |
| 印象 | シャープ・クール・都市夜景 |
| タイポグラフィ | Montserrat（見出し・本文）+ Playfair Display（タイトル装飾）|

---

## ページ一覧

| ファイル | 内容 |
|----------|------|
| `index.html` | トップページ。フルスクリーンヒーロー＋最新ライブ情報＋ギャラリーテイザー |
| `about.html` | バンド紹介。結成経緯・コンセプト・歴史 |
| `members.html` | メンバー紹介。Saxophone / Trumpet / Trombone / Rhythm の各セクション |
| `songs.html` | 楽曲リスト。オリジナルアルバム・EP ごとにテーブル形式で掲載 |
| `live.html` | ライブスケジュール＋過去公演 |
| `gallery.html` | グリッドフォトギャラリー（ダミー画像） |
| `contact.html` | 問い合わせフォーム（デモ実装：送信はフロント処理のみ） |

---

## フォルダ構成

```
/
├── index.html
├── about.html
├── members.html
├── songs.html
├── live.html
├── gallery.html
├── contact.html
├── style.css
├── script.js
├── images/          ← 実際の画像をここに配置（現在はダミー表示）
└── README.md
```

---

## 機能仕様

### ナビゲーション
- 全ページ共通の固定ナビバー
- スクロール 60px 超で `scrolled` クラスが付与され半透明化

### スクロールアニメーション
- `IntersectionObserver` により `.slide-left` / `.slide-right` / `.slide-up` クラスの要素が画面に入ったタイミングで `.visible` を付与
- 兄弟要素のインデックスに応じて `transitionDelay` を 0.1s 刻みでずらしてスタガー演出

### メンバーページのアニメーション
| 方向 | クラス | 条件 |
|------|--------|------|
| 左からスライドイン | `.slide-left` | グリッドの奇数カード |
| 右からスライドイン | `.slide-right` | グリッドの偶数カード |
- 画面内に入ったら `opacity: 0 → 1` + `translateX → 0` を 0.6s でトランジション

### タブナビ（members.html）
- `.tab-btn[data-target]` クリック時に対象セクションへスムーズスクロール
- スクロール位置に応じてアクティブタブを自動ハイライト

---

## 使用技術

- HTML5 / CSS3 / Vanilla JavaScript（ES2020）
- 外部依存なし（ライブラリ・フレームワーク不使用）

---

## 外部リソースとライセンス

### Google Fonts
| フォント | ライセンス |
|----------|------------|
| [Montserrat](https://fonts.google.com/specimen/Montserrat) | SIL Open Font License 1.1 |
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | SIL Open Font License 1.1 |

SIL OFL 1.1 は商用利用・Web 埋め込みを許可しています。  
ライセンス全文: https://openfontlicense.org/

---

## GitHub Pages での公開方法

1. このリポジトリを GitHub にプッシュ
2. リポジトリの **Settings → Pages** を開く
3. **Source** で `Deploy from a branch` を選択
4. **Branch** を `main`（または `master`）、フォルダを `/ (root)` に設定して **Save**
5. 数秒〜数分後に `https://<username>.github.io/<repository>/` で公開されます

---

## ライセンス

MIT License

Copyright (c) 2026 Fdel Röte Jazz Orchester Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

> このサイトに含まれるすべての人名・バンド名・楽曲名・会場名は架空のものであり、
> 実在する個人・団体・作品とは一切関係ありません。
