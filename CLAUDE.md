## プロジェクト概要

Speee社用のMarpプレゼンテーションテーマ。SCSSで定義されたテーマをCSSにコンパイルし、Marp CLIまたはVS Code Marp拡張機能でMarkdownプレゼンテーションを描画する。

## ビルドコマンド

```bash
# 初期セットアップ（sassのグローバルインストール、gitフックの設定）
make init

# SCSSをCSSにコンパイルし、サンプルPNG画像を生成
make

# SCSS変更時に自動コンパイル（ウォッチモード）
make csswatch

# CSSやMarkdown変更時にサンプル画像を自動再生成（csswatchと併用）
make marpwatch

# 生成ファイルを削除
make clean
```

## アーキテクチャ

- `marp-themes/speee.scss` - テーマのソース（SCSS）、`speee.css`にコンパイルされる
- `example/example.md` - テストとプレビュー用のサンプルプレゼンテーション
- `example/example.*.png` - 生成されたスライド画像（コミット必須、CIでの画像差分テストに使用）

pre-commitフックで`make`が実行され、生成ファイルが最新であることを確認する。CIでは生成画像とコミット済み画像を比較し、視覚的なリグレッションを検出する。

## 設計方針

- **Google Fontsのみ使用**: ポータビリティのためウェブフォント（Lato、Noto Sans JP、Roboto Mono）を使用
- **2種類のスライドクラス**: 通常スライド（白背景）と`lead`クラス（セクションタイトル用のダークグラデーション背景）
- **Speeeロゴ**: GitHub raw URL経由で埋め込み。Speee社員以外はライセンス規定によりロゴ画像の削除が必要
