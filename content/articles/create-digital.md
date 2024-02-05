---
title: DigitalOceanでk8sを立てた
author:
  name: 5st7
  avatarUrl: https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg
  link: https://twitter.com/5st7
date: 2024-2-5
layout: article
---

GKEのプリエンティブインスタンス並に安いと聞いたので、DigitalOceanでk8sを立てて遊び場を作ってみる
- Projectを作成する
![dc-create-project.png](/dc-create-project.png)

- プロジェクトを作ったらサイドバーからKubernetesを選んでクラスタを作っていく
  - tokyoリージョンとかはなさそうなのでシンガポールを選んだ
  - 2024年2月5日だとv1.29がrecommendedになってた
![select-region.png](/select-region.png)
![select-version.png](/select-version.png)
- 最後にポチポチノードプールを設定して終わり
![node-pool.png](/node-pool.png)
2 vCPU/4GB RAMで 24ドル/月...
GKEでn2-standard-2をSpotで借りる方が安い・・・？