// ============================================================
// page.tsx - サイトのトップページ（ルート "/"）
//
// セクション構成:
// 1. Hero           - キャッチコピー型メインビジュアル
// 2. About          - 開発スタンス（Mindset）強調型自己紹介
// 3. Works          - 実運用を見据えたプロジェクト紹介
// 4. Engineering    - 課題解決カタログ（トラブルシューティング）
// 5. Skills         - 実態に即したスキル一覧
// 6. Contact        - お問い合わせ
//
// ※ Stats セクションは廃止 → Engineering Approach に差し替え
// ============================================================

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Works } from "@/components/Works";
import { EngineeringApproach } from "@/components/EngineeringApproach";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* ヘッダー: 固定ナビゲーションバー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-1 w-full">
        {/* 1. アバウト（開発スタンス） */}
        <About />

        {/* 2. ヒーロー */}
        <Hero />

        {/* 3. ワークス（プロジェクト紹介） */}
        <Works />

        {/* 4. Engineering Approach（課題解決カタログ） ★最重要 */}
        <EngineeringApproach />

        {/* 5. スキル */}
        <Skills />

        {/* 6. コンタクト */}
        <Contact />
      </main>
    </div>
  );
}
