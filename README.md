# marp-speee-theme

Speee 用の marp テーマ

# 開発方法

## 依存物

1. `make init` で必要なパッケージをインストールする
1. 必要に応じて theme が要求するフォントをインストールする(でないと github actions workflow 側と描画結果が一致せず、CI テストがエラーになる)

## 開発手順

1. vscode で marp 拡張をインストール
1. `make csswatch` で scss が変更されたらすぐ反映されるようにする
1. `example/example.md` を開き、vscode でプレビューしながらマークダウンファイルと SCSS を編集する

# 関連ドキュメント

- [Speee*VI*レギュレーション.pdf (コーポレートカラー仕様)](https://drive.google.com/file/d/1m5VzUtWX6JbortXmylHLABrN_RxamyXx/view?usp=sharing)
- [【テンプレ配布】パワポ職人が本気でGスライドのマスタを作ったから見てくれ \| speee Kibela](https://speee.kibe.la/@masayuki_nagayama/22064)
