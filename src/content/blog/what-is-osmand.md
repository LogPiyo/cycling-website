---
title: "GoogleマップではなくOsmAndを使え！"
slug: "what-is-osmand"
pubDate: 2025-12-12
description: "Googleマップではなく，OsmAndアプリを使うべき理由について解説します。OsmAndは，OpenStreetMapをベースにした高機能な地図アプリであり，特にサイクリストにとって有用な機能が豊富です。"
image: {
  url: "/uploads/blog/what-is-osmand/osmand-cycling-map-image-official.webp",
  alt: "OsmAndのイメージ"
}
tags: ["OSM"]
draft: false
---

## はじめに

ギークの皆さん，こんにちは！今回は，サイクリングに便利な地図アプリであるOsmAndについて紹介していくぞ。多くの人は，地図アプリとしてGoogleマップやYahooマップ，NAVITIMEなどを利用していると思うが，OsmAndはそれとは異なる魅力を持っている。特に，OpenStreetMap（OSM）をベースにしているため，サイクリストにとって有用な情報が豊富に含まれているんだ。

OsmAndは，OpenStreetMapのデータを利用しており，誰でも自由に編集・利用が可能だ。積極的に貢献しよう！

<figure style="text-align:center;">
  <img src="/uploads/blog/what-is-osmand/osmand-cycling-map-image-osaka.webp" alt="OsmAndで表示した大阪のサイクリングマップ" style="width:30%; height:auto; display:block; margin:0 auto;">
  <figcaption><em>日本のサイクリングロードの表示例（OsmAnd）</em></figcaption>
</figure>

## なぜOsmAndを使うべきか？ - OsmAndの利点

OsmAndの利点は，挙げようと思えばいくらでも挙げることができる。例えば，すぐに思いつくものだけでも，

1. デザインを細かくカスタマイズ可能
1. 検索機能が強力で，マニアックなものまで対応可能（階段，消火栓，地蔵，鉄塔...など，あなたの好奇心を満たすまで）
1. **完全に**オフラインで使用可能
1. プラグインによる機能拡張が可能（天気予報，GPSログなど）
1. オープンソースのため，その気になれば自由に改造可能

という魅力がある。

### 1. デザインのカスタマイズ性

<figure style="display:flex; justify-content:center; gap:1rem; align-items:center;">
  <img src="/uploads/blog/what-is-osmand/osmand-style-default.webp" alt="OsmAndにおけるスタイルのイメージ1" style="width:50%; height:auto;">
  <img src="/uploads/blog/what-is-osmand/osmand-style-nautical.webp" alt="OsmAndにおけるスタイルのイメージ2" style="width:50%; height:auto;">
</figure>

Googleマップなどの商用地図アプリでは，地図の見た目を細かく変えたりすることはできない。せいぜい，お気に入りスポットの表示と，ライト/ダークモード切り替えくらいだろう。

OsmAndでは，独自形式のxmlファイルをインポートすることで，地図のデザインを自由にカスタマイズすることができる。例えば，サイクリストの場合を考ええよう。サイクリストは，自転車レーンやサイクリングロードの位置を知りたいことだろう。また，トイレや駐輪場，空気入れスポットなどの分布も一緒に表示したいと考えるかもしれない。「サイクリングロードは目立つように青実線で表示して，自転車レーンはそれよりも細い青点線にして，トイレは赤い点にして，...」，次の旅に向けて，あれこれと考えるだけでワクワクしないか？OsmAndなら，あなたの要望は思い通りに実現可能だ。もし，面倒だとか難しそうだと感じるなら，とりあえず，すでに誰かが作成したスタイルシートを使ってみよう。サイクリスト向けなら，おすすめは[CycloRoute](https://osmand-rendering.github.io/CycloRoute/index_EN.html)だ。実際に何度か走ってみて，不満があれば，少しずつ自分好みに改造していくのも楽しいぞ。

### 2. 検索機能

<figure style="display:flex; justify-content:center; gap:1rem; align-items:center;">
  <img src="/uploads/blog/what-is-osmand/osmand-search-1.webp" alt="OsmAndにおける検索機能のイメージ1" style="width:50%; height:auto;">
  <img src="/uploads/blog/what-is-osmand/osmand-search-2.webp" alt="OsmAndにおける検索機能のイメージ2" style="width:50%; height:auto;">
</figure>

OsmAnd，というかOpenStreetMap自体の 最大の魅力は，その情報にあるんだ。何度も述べてきたように，OSMは誰でも気が赴くまで編集できる。編集者ひとりひとりの興味の対象は異なり，それぞれが独自の視点で世界を地図に落とし込むんだ。例えば，ある人はバスが好きで，バス停や運行経路などを詳細にマッピングするとしよう。別のある人は，地蔵が大好きで，街中のいたるところにある地蔵を片っ端からマッピングしていく。そしてもちろん，我々のような自転車好きは，ホームセンターなどに設置された無料の空気入れスポットや，階段に設置された自転車用のスロープなどをマッピングしていくことだろう。このように，それぞれの「世界の切り抜き」が集まることによって，商用地図には到底真似できないような，色鮮やかな地図が出来上がるんだ。

OsmAndでは，これらすべての情報を検索可能だ。例えば，階段を検索したければ，"stairs"と検索すれば良いのだ。現在地の近くにある無数の階段が表示される。あなたの好奇心を満たすまで，OsmAndとともに旅しよう。

### 3. 完全オフラインで使用可能

<figure style="display:flex; justify-content:center; gap:1rem; align-items:center;">
  <img src="/uploads/blog/what-is-osmand/offline-icon.webp" alt="オフラインのアイコン" style="width:20%; height:auto;">
</figure>

Googleマップなど，他のマップにもオフライン機能は確かにある。しかし，それらのオフライン機能は中途半端なことが多い。例えば，Googleマップのオフライン機能では，事前にダウンロードした地図データを表示する「Wifiのみ」モードが用意されているのだが，ルート案内機能は車のみ，検索結果が完全でない，場所の説明が表示されないなど，オンラインモードには足元にも及ばない使い心地なんだ。一方，OsmAndでは，地図データだけでなく，検索機能やルート案内機能も完全にオフラインで利用可能だ。これにより，電波の届かない山間部や海外旅行先などでも，安心して地図アプリを利用できるぞ。また，「Wikipedia」プラグインを導入することによって，地図上の観光スポットに関するWikipediaの記事もオフラインで閲覧可能になる。これにより，旅先での情報収集が格段に便利になる。データ量を節約したい方も，圏外の地域を旅する人も，OsmAndがあれば解決だ！

### 4. プラグインによる機能拡張

<figure style="display:flex; justify-content:center; gap:1rem; align-items:center;">
  <img src="/uploads/blog/what-is-osmand/osmand-plugin-image-1.webp" alt="OsmAndにおけるプラグインのイメージ1" style="width:50%; height:auto;">
  <img src="/uploads/blog/what-is-osmand/osmand-plugin-image-2.webp" alt="OsmAndにおけるプラグインのイメージ2" style="width:50%; height:auto;">
</figure>

OsmAndは，プラグインによって機能を拡張できる。例えば，「天気予報」プラグインを導入すれば，現在地や目的地の天気情報を地図上で確認できる。また，「GPSログ」プラグインを利用すれば，走行したルートを記録し，後で分析することも可能だ。これらのプラグインは，OsmAndの基本機能に加えて，ユーザーのニーズに応じた便利な機能を提供する。自分の使い方に合わせて，必要なプラグインを選んで導入しよう。

### 5. オープンソース

そして，最後にして最大の魅力は，OsmAndがオープンソースであることだ。これは，ソースコードが公開されており，誰でも自由に利用・改造・再配布できることを意味する。もし，あなたがプログラミングに興味があり，地図アプリに新しい機能を追加したいと考えているなら，OsmAndのソースコードをダウンロードして，自分で改造することも可能だ。オープンソースであることは，コミュニティによる継続的な改善やバグ修正も促進する。出来が良ければ，積極的にプルリクエストを提出しよう。ユーザー同士が協力して，より良い地図アプリを作り上げていくことができるんだ。

[![OsmAndのソースコード (GitHub)](https://img.shields.io/badge/GitHub-OsmAnd%20Source-181717?logo=github&logoColor=white&style=for-the-badge)](https://github.com/osmandapp/OsmAnd)

## OsmAndの欠点

ただし，正直に述べると，欠点があることも事実だ。例えば，

- 無料版では地図のアップデートが月1回（サブスクリプションに加入すれば，リアルタイムでアップデート可能）
- 地図の編集を完全に有志に頼っているため，情報量にばらつきがあり，誤りも存在する
- 日本語での検索に弱い
- バッテリー消費が激しい
- スマートフォンの機種によっては，地図のレンダリングが遅い

などが挙げられる。特に，情報量に偏りがある点は，地図アプリとしては大きな欠点であると感じられるだろう。そのため，OsmAndだけを使うのは，正直なところ厳しい。情報が少ないところでは，Googleマップなどと併用する必要があるだろう。しかし，これらの欠点は，アプリの普及に伴って徐々に改善されていくと期待している。ともにOsmAndを成長させよう！

## おわりに

今回は，OsmAndの魅力について紹介した。OsmAndは，サイクリストにとって非常に有用な地図アプリであり，そのカスタマイズ性やオフライン機能，プラグインによる拡張性など，多くの利点がある。欠点もあるが，それを補って余りある魅力がOsmAndにはある。ぜひ一度試してみて，自分の旅に役立ててほしい。では，良い旅を！

## さっそくOsmAndをインストールする

下のボタンからお使いの端末に合わせてOsmAndをインストールしよう。ギークにはおなじみの，F-Droid版も用意されているぞ！

[![Google Playで入手](https://img.shields.io/badge/Google%20Play-Get%20it%20on%20Google%20Play-2F8FED?logo=google-play&logoColor=white&style=for-the-badge)](https://play.google.com/store/apps/dev?id=8483587772816822023) 

[![F‑Droidで入手](https://img.shields.io/badge/F‑Droid-Install-7B9FFF?logo=f-droid&logoColor=white&style=for-the-badge)](https://f-droid.org/packages/net.osmand.plus/)

## 参考文献
- [OsmAnd公式サイト](https://osmand.net/)
  - OsmAndの基本情報はこちらで確認できる
- [OsmAndのスタイル](https://osmand.net/docs/technical/osmand-file-formats/osmand-rendering-style/?current-os=ios&)
  - OsmAndでは，xml形式のスタイルシートを利用する
  - スタイルシートの文法はこちらを見ると良いだろう
