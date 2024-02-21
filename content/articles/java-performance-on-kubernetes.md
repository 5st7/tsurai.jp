---
title: Java Performance on kubernetesの要約
author:
  name: 5st7
  avatarUrl: https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg
  link: https://twitter.com/5st7
date: 2024-2-15
layout: article
---

Kubernetes上でのJavaアプリケーションの実行に関するリソース制限（CPUとメモリ）がアプリケーションのパフォーマンスに与える影響について解説している[動画](https\://www\.youtube.com/watch?v=HTtdoRc0BQI) を見たので要約

- リソース制限の影響
  - NewRelicの調査によると多くのJavaアプリケーションが1つまたは2つのCPUコアと512MB以下のメモリ制限で実行されているらしい
  - 2つのCPU、1GBの割り当てでもGCのアルゴリズムはSerial GCになる
- ガベージコレクタの選択と設定
  - Serial GCだとG1よりStop The Worldが長い
  - 一般的にG1より効率が悪い
- JVMの設定
  - ヒープサイズに関しては自分で設定したほうがいい
  - 1GB割り当てた時に256MBしか割り当てられなかったりするため
- スタートアップ時間の最適化 
  - 多くのフレームワークがCPUの数でスレッドプールの数を設定してる
  - 
- クラスタとアプリケーションのスケーリング戦略
  - Javaアプリケーションがスケールアップ（リソースを増やす）方がスケールアウト（インスタンス数を増やす）よりも効率的である場合が多いこと, そして適切なクラスタサイズとアプリケーションの設定が重要であるらしい

