---
title: How Adobe is Optimizing Resource Usage in Kubernetesを見たので要約
author:
  name: 5st7
  avatarUrl: https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg
  link: https://twitter.com/5st7
date: 2024-1-20
layout: article
---

今更だけど、KubeCon + CloudNativeCon North America 2022で発表されたHow Adobe is Optimizing Resource Usage in Kubernetesを見てコスト最適化頑張りたいとなったので要約しておく
動画は以下
- https://www.youtube.com/watch?v=iVD5YI1-U_M

- AdobeではAdobe Experience Manager(AEM)をk8sの上で運用している
  - Java
  - Apache Software FoundationのOSSを使ってる
- Azure上で運用されていて25以上のクラスタで動いている
- k8sのワークロードにはRequestとlimitをつける必要がある
  - Request:どれだけのリソースが保証されているか
  - limit:どれだけのリソースが消費されているか
- 制限をかけると以下のことが起こりうる
  - CPU: CPUスロットリング
  - Memory: OOM
  - ephemeral storage: Podのeviction
- AEMはJavaのアプリケーション
  - JVMは起動時に全てのメモリを確保し、メモリの使用率はk8sからは隠されています
  - JDK 17以上ではホストではなくコンテナの利用可能なメモリを検出する
- Kubernetes Cluster AutoScaler
  - CPU/メモリリクエストに基づいてノードの数を増減させる
  - これでコストを30 - 50 %抑えた
- Horizontal Pod Autoscaler
  - 必要に応じてPodの数を増減させる
  - AEMだとCPUの使用率かHTTPの分単位のリクエスト数(rps)がいいのかが考えられる
    - CPUの使用率は不適切だった
      - コンテナ起動時のスパイクがカスケード効果を引き起こす可能性があった
  - HPAを有効にして50 - 70%コストを抑えられた
- Vertical Pod Autoscaler
  - 開発環境などにおいて使っていないときはスケールダウンする
  - 5 - 15 %コストダウン
- 以下の2つはAdobe内部の話なので割愛
  - Hibernation
  - ARC

