---
title: Efficient MySQL Performance 読書メモ ~その1~
author:
  name: 5st7
  avatarUrl: https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg
  link: https://twitter.com/5st7
date: 2023-12-8
layout: article
---

最近[Efficient MySQL Performance](https://www.amazon.co.jp/Efficient-Mysql-Performance-Practices-Techniques/dp/1098105095)を読んでいる

洋書なので読むのが大変だけど結構面白い
ひとまず第一章のQuery Response Timeの章まで読んだのでそこまで読書メモ

## 1. Query Response Time
- クエリ応答時間がMySQLのパフォーマンスを測る上での北極星になる
  - クエリ応答時間はクエリ実行中のステップやロック待ちなどから構成され、複雑さの範囲を絞り本質的なものに焦点を当てることができる
- クエリのメトリクスはSlow Query log, Perfomance Schemaから確認する
  - MySQL 8.0より前のバージョンだとSlowQueryLogが提供するメトリクスはQueryTime,lock_time,Rows_sent,Rows_examinedしか提供せず、分析が難しいのでPerfomanceSchemaを元に分析をするといい
- クエリ解析の目的は、遅い実行時間を解くのではなく、クエリの実行を理解することである
  - クエリ解析には、報告されているクエリメトリクス、メタデータ（Explain, テーブル構造）やアプリケーションの知識を使って解析をする
- クエリの解析には、クエリ応答じかn、ロック時間、走査した行、送信した行、影響を受けた行、スキャンの種類、フルジョインの選択、作成したtmpテーブル、クエリカウントの9つのクエリメトリクスが必須となる
- クエリ応答時間お改善は、直接クエリ最適化と間接クエリ最適化に分けられる
  - 直接クエリ最適化とは、クエリやインデックスを変更すること
  - 間接クエリ最適化とは、データやアクセスパターンの変更
- 少なくともパフォーマンスが顧客に影響する時、コードを変更する前と後に月に1度クエリプロファイルを確認し、遅いクエリを最適化する
  - コード変更の前後でクエリ最適化を優先するエンジニアが多いが、著者の経験ではどちらもしなく、ステージング環境、本番環境で最適化し続けていく

  - MySQLを高速化するには、レスポンスタイムを短縮化するか、負荷を増加させる方法を取るか考える必要がある
