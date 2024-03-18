# KubernetesとgRPCと負荷分と

Kubernetesは、Serviceリソースを通じてコネクションレベルの負荷分散を提供します。

一方で、gRPCはHTTP/2上に構築されており、HTTP/2は長寿命なコネクションを利用し続けます。

 

![undefined](https://kubernetes.io/images/blog/grpc-load-balancing-with-linkerd/Mono-8d2e53ef-b133-4aa0-9551-7e36a880c553.png)

コネクションレベルの負荷分散では、コネクションの確立時にのみ分散が考慮され、確立されたコネクション内ではリクエストは同じバックエンドにのみ送られ続けます。つまり、3つのバックエンドがあり、それぞれに1つずつコネクションが張られている場合、「コネクションレベル」では完璧に分散されているように見えますが、実際にはリクエストレベルでは分散が行われていないことになります。

![undefined](https://kubernetes.io/images/blog/grpc-load-balancing-with-linkerd/Stereo-09aff9d7-1c98-4a0a-9184-9998ed83a531.png)

これを解決する方法としていくつか方法があります

1. クライアントに負荷分散を実装する* gRPCサーバーのIPアドレスを取得し、負荷を考慮して宛先を決定する処理をgRPCクライアント側に実装します。
   * KubernetesではPodは頻繁に再作成されIPアドレスも頻繁に入れ替わるため、APIサーバーに問い合わせることで最新のPodのIPアドレス一覧を更新し続ける必要があります。
2. L7プロキシをクライアントのPodへサイドカーとして挿入する* Envoyやnginxをサイドカーとして挿入し、プロキシ側に負荷分散してもらう
3. サービスメッシュ* istio, linkerd, cilium
   * istio, linkerdはサイドカーとしてL7プロキシを挿入してその子らに負荷分散をしてもらう。
4. knative* なんかHTTP/2のロードバランシングしてくれる機能があるらしい・・・
   * https\://knative.dev/docs/serving/load-balancing/
