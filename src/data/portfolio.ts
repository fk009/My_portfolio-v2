/** Works セクション: 1件の作品データ */
export type WorkItem = {
  id: string;
  title: string;
  catchcopy: string; // キャッチコピー（一言説明）
  summary: string; // 詳細説明（複数行可）
  background: string; // 背景・制作の動機
  challenge: string; // 解決した主な課題
  features: string[]; // 主要機能リスト
  technologies: string[]; // 技術スタック（タグ表示用）
  techReason: {
    // 技術選定の理由（Why）
    tech: string; // 技術名
    reason: string; // 選定理由・トレードオフ
  }[];
  achievements: string; // 成果・インパクト
  githubUrl: string; // GitHub URL（非公開なら空文字）
  videoUrl: string; // デモ動画 URL
  siteUrl: string; // 公開サイト URL
  articleUrl: string; // 解説記事 URL（Qiitaなど）
  imageUrl: string; // サムネイル画像（/public/img/ 以下）
  architectureImageUrl: string; // アーキテクチャ図画像（なければ空文字）
  imageFit?: "cover" | "contain"; // next/image の object-fit（スクショ系は contain が見やすいことがある）
  imagePosition?: string; // CSS object-position（例: "70% 50%"）
  disableParallax?: boolean; // 画像のパララックス（スクロール追従）を無効化
};

/** Engineering Approach セクション: 1件の課題解決カードデータ */
export type EngineeringItem = {
  id: string;
  category:
    | "インフラの安定性"
    | "セキュリティと認証"
    | "UXと非同期処理"
    | "開発基盤";
  title: string;
  challenge: string; // 直面した課題
  approach: string; // アプローチ
  solution: string; // 解決策
  articleUrl: string; // Qiita等の記事URL
  tags: string[]; // 関連技術タグ
};

/** Skills セクション: 1カテゴリのスキルデータ */
export type SkillCategory = {
  category: string; // カテゴリ名
  level: string; // 注力領域・見出しテキスト
  description: string; // 実態に即した説明文
  items: string[]; // 具体的な技術・ツール名
};

export const portfolioData = {
  // ===== プロフィール =====
  profile: {
    name: "yuurei",
    title: "バックエンド開発者 / AIを技術顧問に、実運用レベルで課題を解決する",
    description:
      "「とりあえず動く」で終わらせず、インフラの安定性・セキュリティ・本番環境でのエラー解決まで泥臭くやり抜く開発スタイルを持っています。AIを技術顧問として使いこなしながら、未知の技術を自走でキャッチアップし、プロダクトを完遂する力が強みです。",
    skills: ["Python", "FastAPI", "Pydantic V2", "Loguru"],
    learning: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    qualifications: ["基本情報技術者試験", "Python3 エンジニア認定基礎試験"],
    github: "https://github.com/fk009",
    qiita: "https://qiita.com/yuurei_09",
    contactEmail: "example@example.com",
  },

  // ===== Works =====
  works: [
    // ─── フラッグシッププロジェクト ───
    {
      id: "emo-reader",
      title: "EmoReader",
      catchcopy: "YouTubeコメントの「空気」を読むAIアプリ",
      summary:
        "YouTube動画の膨大なコメントをAI（DeBERTa / Gemini）が分析し、ポジティブ・ネガティブの感情判定や内容の要約をリアルタイムで行うフルスタックWebアプリケーション。",
      background:
        "YouTubeの動画を評価する際、数千件のコメントを読むのは非現実的。AIを使って「空気感」を瞬時に掴めるツールが欲しいと思い制作しました。",
      challenge:
        "大量コメント取得によるAPIクォータ消費の抑制と、重い推論処理によるタイムアウト問題を、自作の非同期ジョブ管理システムとSSE（Server-Sent Events）を用いた進捗通知によって解決。",
      features: [
        "YouTube URL入力だけで感情分析・要約を自動実行",
        "DeBERTaによるコメント感情分析（ポジティブ/ネガティブ分類）",
        "Gemini APIによるコメント内容の自然言語要約",
        "SSEによるリアルタイム進捗通知でUX向上",
        "Cloud Schedulerによるコールドスタート対策（Keep Warm）",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "Pydantic V2",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "GCP Cloud Run",
        "Secret Manager",
        "Cloud Scheduler",
        "Cloud Storage",
        "DeBERTa",
        "Gemini API",
      ],
      techReason: [
        {
          tech: "SSE（Server-Sent Events）vs WebSocket",
          reason:
            "感情分析の進捗通知はサーバー→クライアントの一方向で十分。WebSocketは双方向通信のオーバーヘッドがあり、Cloud Run の構成上も複雑になるため、軽量で実装コストが低いSSEを採用。",
        },
        {
          tech: "GCP Cloud Run（APIコンテナ / 推論コンテナ分離構成）",
          reason:
            "重い推論（DeBERTa）と通常のAPI処理を同一コンテナに乗せるとスケーリング効率が悪い。コンテナを分離することでそれぞれ独立してスケールでき、コスト最適化と安定性を両立。",
        },
        {
          tech: "自作ジョブキューシステム",
          reason:
            "Cloud Run にはリクエストタイムアウト（60秒）の壁がある。長時間の推論処理を同期的に実行するとタイムアウトが発生するため、ジョブをDBに保存して非同期実行する独自キューを実装。",
        },
        {
          tech: "Supabase（Postgres）",
          reason:
            "RDBの信頼性とBaaSの導入コストの低さを両立。RLS（行レベルセキュリティ）が標準で使えるため、初期フェーズのセキュリティ実装コストを抑えつつ、本番運用レベルのデータ管理が可能。",
        },
      ],
      achievements:
        "個人開発として独自ドメイン（emo-reader.jp）で本番公開。Cloud Run × Supabase のサーバーレス構成でインフラコストを月数百円台に抑えながら安定稼働を実現。",
      githubUrl: "", // 非公開
      videoUrl: "",
      siteUrl: "https://emo-reader.jp/",
      articleUrl: "https://qiita.com/yuurei_09/items/1b13de459142d09a964e",
      imageUrl: "/img/EmoReader.png",
      architectureImageUrl: "/img/emo-reader-arch.png",
      disableParallax: true,
      imageFit: "cover",
      imagePosition: "42% 72%",
    } as WorkItem,

    // ─── サブプロジェクト ───
    {
      id: "yahoo-scraping",
      title: "Yahooスクレイピング",
      catchcopy: "中古価格調査を自動化するPythonツール",
      summary:
        "Yahooオークションの過去販売情報を取得し、価格の傾向を可視化するツールです。",
      background: "中古で売りたいものの価格調査を楽にする目的で制作しました。",
      challenge:
        "価格を調べる手間の削減と、適正な価格設定の支援を目指しました。",
      features: [
        "商品名での検索機能",
        "過去180日分の売上平均と中央値の算出",
        "売値推移のグラフ表示",
      ],
      technologies: ["Python", "Scraping", "Data Visualization"],
      techReason: [],
      achievements: "価格調査の手間を手軽な検索のみに削減。",
      githubUrl: "https://github.com/fk009/find_sale_price",
      videoUrl: "https://youtu.be/BeG9H_YouWQ",
      siteUrl: "",
      articleUrl: "",
      imageUrl: "/img/yahooscraping.png",
      architectureImageUrl: "",
    } as WorkItem,

    {
      id: "sidebar-notes",
      title: "Sidebar Notes",
      catchcopy: "URLごとにメモを保存できるChromeサイドパネル拡張",
      summary:
        "ブラウザのサイドパネルで、開いているページ（URL）ごとにメモを作成・検索できるChrome拡張です。メモは端末内（IndexedDB）に保存され、外部サーバーへ送信しません（同期もしません）。",
      background:
        "調べもの中のメモがタブ・サービス間で散らばり、後から探し直すコストが大きいのが課題でした。「ページに紐づくメモ」が自然に残る体験を、ブラウザ内で完結させたくて制作しました。",
      challenge:
        "URL単位のメモを「確実に」自動保存・復元しつつ、リッチテキスト/貼り付け/スクリーンショット等の入力経路が増えても破綻しないデータ設計と安全性（サニタイズ）を両立すること。",
      features: [
        "URLごとのメモ作成・編集・検索（リッチテキスト）",
        "自動保存（入力停止後 / パネル非表示時）＋タブ切替追従（任意権限）",
        "メモ一覧（すべて / 直近 / サイト別）＋ごみ箱（14日で自動整理）",
        "スクリーンショット（範囲選択→メモへ貼り付け、任意権限）",
        "Markdown貼り付け（最小）: テーブル / 箇条書き / 番号リスト",
        "JSONL形式でのエクスポート／インポート",
      ],
      technologies: [
        "Chrome Extensions (MV3)",
        "JavaScript",
        "IndexedDB",
        "DOMPurify",
        "Node.js",
        "Puppeteer",
      ],
      techReason: [
        {
          tech: "端末内保存（IndexedDB）vs クラウド同期",
          reason:
            "「外部へ送らない」ことを最優先に、メモは端末内へ保存。クラウド同期の利便性は捨てる代わりに、プライバシーとオフライン耐性を確保しました。",
        },
        {
          tech: "リッチテキスト + HTMLサニタイズ（DOMPurify）",
          reason:
            "貼り付け/スクショ等で入力経路が増えるほどHTMLを扱うリスクが上がるため、保存・表示の両方で必ずサニタイズして安全性を担保。表現力と安全性のバランスを取っています。",
        },
        {
          tech: "UIの自動検証（Puppeteer）",
          reason:
            "サイドパネルUIは手動確認だけだと退行が混入しやすい。速度別にテストを分け、普段は高速な検証を回しつつ、必要時にE2Eも実行できる運用にしました。",
        },
      ],
      achievements:
        "「ページごとのメモ」をブラウザ内で完結。検索・フィルタ・ごみ箱・エクスポートなど、日常運用で困りやすい周辺機能まで含めて作り込みました。",
      githubUrl: "https://github.com/fk009/sidebar_note",
      videoUrl: "",
      siteUrl:
        "https://chromewebstore.google.com/detail/gjjhihgdlfbmbhdcpanhelejgelimbfl?utm_source=item-share-cb",
      articleUrl: "",
      imageUrl: "/img/Sidebar_Notes.png",
      architectureImageUrl: "",
      imageFit: "cover",
      imagePosition: "72% 50%",
      disableParallax: true,
    } as WorkItem,
  ],

  // ===== Engineering Approach =====
  engineeringApproach: [
    {
      id: "job-queue-timeout",
      category: "インフラの安定性",
      title: "Cloud Runタイムアウト問題を自作ジョブキューで解決",
      challenge:
        "Cloud Run のデフォルトタイムアウト（60秒）内に DeBERTa の推論処理が完了せず、502エラーが頻発。同期的なリクエスト処理では根本解決できなかった。",
      approach:
        "AIと壁打ちしながら「そもそもリクエストと推論を切り離せばよい」という発想を得た。ジョブキューパターンを調査し、Supabase の jobs テーブルに処理を登録→非同期ワーカーが消化する構成を設計。",
      solution:
        "リクエスト受信時にジョブをDBに登録してすぐ202を返し、別コンテナのワーカーが非同期で推論を実行。結果はSSEでクライアントにプッシュ通知。タイムアウトエラーをゼロにした。",
      articleUrl: "https://qiita.com/yuurei_09/items/1b13de459142d09a964e",
      tags: ["Cloud Run", "FastAPI", "非同期処理", "Supabase", "ジョブキュー"],
    } as EngineeringItem,

    {
      id: "cold-start-warm",
      category: "インフラの安定性",
      title: "Cloud Schedulerによるコールドスタート対策（Keep Warm）",
      challenge:
        "Cloud Run はアクセスがない時間帯にコンテナをシャットダウンする。特に推論コンテナは起動に数秒かかり、最初のユーザーが長い待ち時間を経験していた。",
      approach:
        "AIに「サーバーレスのコールドスタート問題の一般的な解決策」を聞き、Keep Warm パターンを発見。Cloud Scheduler で定期的にヘルスチェックリクエストを送る構成を検討。",
      solution:
        "Cloud Scheduler を使い、5分おきにコンテナへダミーのpingを送信。コンテナを常時ウォームに保つことで、初回リクエストの応答時間を90%削減。",
      articleUrl: "https://qiita.com/yuurei_09/items/1b13de459142d09a964e",
      tags: ["Cloud Run", "Cloud Scheduler", "コールドスタート", "GCP"],
    } as EngineeringItem,

    {
      id: "secret-manager-iam",
      category: "セキュリティと認証",
      title: "Secret Manager＋IAM認証によるセキュアな構成",
      challenge:
        "APIキーや DB接続文字列を環境変数として直書きすると、Dockerイメージに機密情報が含まれるリスク。また Cloud Run サービス間の通信を無認証にするのはセキュリティ上問題だった。",
      approach:
        "AIと「GCPでの機密情報管理のベストプラクティス」を壁打ち。Secret Manager での集中管理とサービスアカウントによるIAM認証の組み合わせを学び、実装手順を具体化した。",
      solution:
        "全機密情報を Secret Manager に格納し、Cloud Run の実行時に環境変数として注入。サービス間通信はサービスアカウントトークンで認証し、403エラーをゼロにした。",
      articleUrl: "https://qiita.com/yuurei_09/items/1b13de459142d09a964e",
      tags: ["Secret Manager", "IAM", "Cloud Run", "セキュリティ", "GCP"],
    } as EngineeringItem,

    {
      id: "sse-async",
      category: "UXと非同期処理",
      title: "SSEによる堅牢な非同期進捗通知",
      challenge:
        "感情分析には数十秒かかる。処理中にローディングスピナーだけ表示しても離脱率が高く、「本当に動いているか」ユーザーが不安になるUX課題があった。",
      approach:
        "WebSocket vs SSE のトレードオフをAIと議論。一方向通信で十分・Cloud Run との親和性が高い・実装コストが低いという理由でSSEを選択した。",
      solution:
        "FastAPIの StreamingResponse でSSEエンドポイントを実装。「解析開始→コメント収集中→感情分析中→要約中→完了」のステップをリアルタイムで通知し、ユーザーの安心感と完了率を向上。",
      articleUrl: "https://qiita.com/yuurei_09/items/1b13de459142d09a964e",
      tags: ["SSE", "FastAPI", "StreamingResponse", "非同期処理", "UX"],
    } as EngineeringItem,

    {
      id: "loguru-logging",
      category: "開発基盤",
      title: "loguruによる実運用を想定したログ基盤構築",
      challenge:
        "本番環境でエラーが発生しても、print文デバッグでは再現が困難。どのリクエストで・どのステップで・何が起きたかをトレースできるログ基盤が必要だった。",
      approach:
        "AIに「本番FastAPIアプリのロギングベストプラクティス」を質問。loguru の構造化ログ出力と、Cloud Logging との連携方法を調査・検証した。",
      solution:
        "loguruで構造化ログを出力し、Cloud Monitoring のログビューアで可視化。エラー発生時にリクエストIDでトレースできる仕組みを整備し、本番障害の原因特定時間を大幅短縮。",
      articleUrl: "https://qiita.com/yuurei_09/items/1b13de459142d09a964e",
      tags: ["loguru", "Python", "Cloud Monitoring", "ログ設計", "FastAPI"],
    } as EngineeringItem,

    {
      id: "wsl2-docker",
      category: "開発基盤",
      title: "WSL2+Dockerの爆速化設定による開発体験の改善",
      challenge:
        "Windows上でDockerを使うと、デフォルト設定ではファイルI/Oが極端に遅く、コンテナのビルドや起動に時間がかかる開発体験の悪さが課題だった。",
      approach:
        "AIと「WSL2のDockerパフォーマンス問題の根本原因」を調査。ファイルシステムの境界（Windows⇔Linux）をまたぐことが原因と特定し、プロジェクトをWSL2内ファイルシステムに置く解決策を導出。",
      solution:
        ".wslconfig でメモリ・CPU割り当てを最適化し、プロジェクトを /home/ 以下に移動。ビルド時間が従来比で約60%短縮し、開発サイクルを高速化。",
      articleUrl: "#",
      tags: ["WSL2", "Docker", "Dev Containers", "開発環境", "パフォーマンス"],
    } as EngineeringItem,
  ],

  // ===== Skills =====
  skills: [
    {
      category: "Python / FastAPI",
      level: "API開発と運用を想定した実装",
      description:
        "FastAPIとPydantic V2を用いた型安全なAPI開発に加え、loguruによるログ設計やasyncioでの非同期処理など、デプロイ後の運用を意識した実装を心がけています。また、パッケージ管理にはuvを採用し、pyproject.tomlによるモダンな環境構築を行っています。",
      items: ["FastAPI", "Pydantic V2", "loguru", "asyncio", "Uvicorn", "uv"],
    },
    {
      category: "GCP インフラ",
      level: "コストとセキュリティを意識したサーバーレス構成",
      description:
        "Cloud Runを用いたコンテナ運用を中心に、Secret Managerでの秘匿情報管理やIAMによる適切な権限設定など、最低限のセキュリティと運用コストを考慮したインフラ構築に取り組んでいます。",
      items: [
        "Cloud Run",
        "Secret Manager",
        "Cloud Scheduler",
        "Cloud Storage",
        "Cloud Monitoring",
      ],
    },
    {
      category: "AI / ML 活用",
      level: "プロダクトへのAI・MLモデルの統合",
      description:
        "感情分析タスクに向けたDeBERTa等のファインチューニングからGemini APIの組み込みまでを幅広く経験しました。それらのAI技術を単なるローカル環境での検証で終わらせず、Webアプリケーションの機能としてシステムに統合し、実稼働させる一連のプロセスに注力しています。",
      items: [
        "DeBERTa",
        "Gemini API",
        "Hugging Face",
        "プロンプトエンジニアリング",
      ],
    },
    {
      category: "データベース / BaaS",
      level: "Supabaseを用いたデータ連携と基本操作の実装",
      description:
        "BaaSであるSupabase（PostgreSQL）を利用し、アプリケーションの要となるデータの作成・読み取り・更新・削除（CRUD操作）を実装しました。複雑なテーブル設計についてはAIの提案を活用してベストプラクティスを取り入れつつ、自身はバックエンド（FastAPI）から安全かつ正確にデータを扱うためのAPI連携と処理フローの構築に注力しました。",
      items: ["Supabase", "PostgreSQL", "SQL"],
    },
    {
      category: "開発環境・ツール",
      level: "再現性を重視したコンテナ開発環境",
      description:
        "WSL2とDocker、Dev Containersを活用し、環境に依存しない開発基盤を構築しています。Git/GitHubでのバージョン管理や、GitHub Actionsを通じた自動化・開発効率化にも取り組んでいます。",
      items: ["WSL2", "Docker", "Dev Containers", "Git", "GitHub Actions"],
    },
  ] as SkillCategory[],
};
