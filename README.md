# marp-speee-theme [![exampleの出力結果画像が最新かどうかのテスト](https://github.com/speee/marp-speee-theme/actions/workflows/test.yml/badge.svg)](https://github.com/speee/marp-speee-theme/actions/workflows/test.yml)

Speee 用の marp テーマ

# 使用例

![](./example/example.001.png) | ![](./example/example.002.png)
:-------------------------:|:-------------------------:
![](./example/example.003.png) | ![](./example/example.004.png)

# 使い方

## 利用上の注意

Speee 社員以外または株式会社 Speee の企業活動ではない目的でこのテーマを利用する場合は描画結果に株式会社 Speee の企業ロゴが表示されないよう画像ファイルを削除してください。
詳細は[ライセンスについて](#ライセンスについて)を参照

## VS Codeの場合

1. [【VS Code \+ Marp】Markdownから爆速・自由自在なデザインで、プレゼンスライドを作る \- Qiita](https://qiita.com/tomo_makes/items/aafae4021986553ae1d8#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%86%E3%83%BC%E3%83%9E%E3%82%92%E4%BD%BF%E3%81%86)を参考にVS Codeの設定へ `https://raw.githubusercontent.com/speee/marp-speee-theme/main/marp-themes/speee.css` を設定
2. [example.md](example/example.md) をコピーまたは参考にしてmarkdownファイルを作成する

## Marp CLIの場合

コマンド実行時 `--theme-set https://raw.githubusercontent.com/speee/marp-speee-theme/main/marp-themes/speee.css` オプションを指定する。

# 開発方法

## 依存物

1. `make init` で必要なパッケージをインストールする

## 開発手順

1. vscode で marp 拡張をインストール
1. `make csswatch` で scss が変更されたらすぐ反映されるようにする
1. `make marpwatch` で css や markdown が変更されたらすぐ反映されるようにする
3. `example/example.md` を開き、vscode でプレビューしながらマークダウンファイルと SCSS を編集する

## 設計ノート

コントリビュートしてもらうときは以下を一読した上で機能追加・修正方向を考えてもらうと助かります 💦

### フォントは基本的に[Google Font](https://fonts.google.com/)を使用する

フォント指定でたくさん指定してfallbackを設定するのはウェブサイトでは有効だけど、marpでは人によってフォントが違う原因になり厄介になりやすい。
またテストでの画像比較も問題が起きやすくなる。
ウェブフォントの重いというデメリットもmarpの場合は気にならないので、ポータビリティに全振りして基本ウェブフォントとする。

### このリポジトリはCICDやgitのpre hookによるコントリビュートホスピタリティに全振りしている

だからかなりコントリビュートしやすくなっているはず。なるべくそこは維持していきたい。

# 関連ドキュメント(Speee社内向け)

- [Speee*VI*レギュレーション.pdf (コーポレートカラー仕様)](https://drive.google.com/file/d/1m5VzUtWX6JbortXmylHLABrN_RxamyXx/view?usp=sharing)
- [【テンプレ配布】パワポ職人が本気で G スライドのマスタを作ったから見てくれ \| speee Kibela](https://speee.kibe.la/@masayuki_nagayama/22064)

# ライセンスについて

本リポジトリに含まれるリソースは Speee 企業ロゴを除いて[ライセンス](./LICENSE)に属します。
ただし Speee 企業ロゴのみは株式会社 Speee が独占的な権利を保持するため、
Speee 社員が株式会社 Speee の企業活動の一部として資料を作成する場合以外でロゴを使用したい場合は弊社までお問い合わせください。
