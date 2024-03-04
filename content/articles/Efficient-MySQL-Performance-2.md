---
title: Efficient MySQL Performance 読書メモ ~その2~
author:
  name: 5st7
  avatarUrl: https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg
  link: https://twitter.com/5st7
date: 2024-03-1
layout: article
---

メモ１からの続き

# Indexes and Indexing
- Indexを有効に使うことでMySQLのパフォーマンスを最も発揮することができる
- InnoDbは主キーで整理されたB-Treeインデックス
  - Clustered Index
    - PK をキーにした B-tree インデックスとして保存されている
  - Secondary Index
    - PK 以外のキーを使ったすべてのインデックス
    - Leaf に PK を保持している。つまり Secondary Index を使った検索はまず Secondary Index を走査し取得した PK の値で Clustered Index を走査する
- ある時点では最適なインデックスも、時間経過でそうではなくなることがある
  - クエリが変わる
  - キーが過剰、重複、未使用
    - [pt-duplicate-key-checker](https://docs.percona.com/percona-toolkit/pt-duplicate-key-checker.html)
  - インデックスを Drop する時、8.0 以降は Invisible Indexes で実際に削除せずに検証できる
  - Selectivity が極端
    - 小さい場合: より適切なキーがある
    - 大きい場合: 本来ユニークインデックスであるべきかも