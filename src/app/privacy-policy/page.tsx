import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sidebar Notes プライバシーポリシー",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif font-black text-xl text-foreground uppercase tracking-widest rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="トップページへ戻る"
          >
            Portfolio.
          </Link>
          <Link
            href="/"
            className="text-xs font-sans tracking-[0.18em] font-bold uppercase text-muted-foreground hover:text-amber-500 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-serif font-black tracking-tight">
          Sidebar Notes プライバシーポリシー
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          最終更新日: 2026-04-16
        </p>

        <p className="mt-10 text-muted-foreground leading-relaxed">
          本プライバシーポリシーは、Chrome 拡張機能「Sidebar Notes」（以下「本拡張機能」）におけるユーザーデータの取り扱いについて説明します。
        </p>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-black">
            1. 本拡張機能の概要
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            本拡張機能は、Chrome のサイドパネル上で、閲覧中のページの URL
            に紐づけてメモを作成・保存・検索・管理できる機能を提供します。必要に応じて、ページの一部をスクリーンショットとしてメモに貼り付けることもできます。
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-black">
            2. 取り扱うデータ
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            本拡張機能は、機能提供のために以下のデータを端末内で取り扱います。
          </p>

          <h3 className="mt-8 text-lg font-serif font-black">
            2.1 ユーザーが入力・生成するデータ
          </h3>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>メモ本文（ユーザーが入力したテキスト、装飾、貼り付けた画像等）</li>
            <li>ブックマーク状態（ユーザーが「ブックマーク」としてマークしたページの URL）</li>
            <li>ゴミ箱データ（削除したメモ、削除日時等）</li>
            <li>設定情報（テーマ等）</li>
          </ul>

          <h3 className="mt-8 text-lg font-serif font-black">
            2.2 閲覧中ページに関するデータ
          </h3>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>現在のタブの URL / タイトル（メモをページに紐づけるため）</li>
          </ul>

          <h3 className="mt-8 text-lg font-serif font-black">
            2.3 スクリーンショットに関するデータ
          </h3>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>
              ユーザーが操作して取得した、表示中ページの選択範囲のスクリーンショット画像
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>画像はメモ内に埋め込み（Data URL 形式）として保存されます。</li>
                <li>
                  選択範囲を切り出す処理のため、取得時に表示中ページの可視領域全体の画像データを一時的に扱いますが、切り出し後は保存せず、メモには選択範囲のみが保存されます。
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-8 text-lg font-serif font-black">2.4 クリップボード</h3>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>
              ユーザーが「コピー」ボタン等を操作した場合、メモ内容を OS/ブラウザのクリップボードへ書き込みます。
            </li>
            <li>
              クリップボードの内容を本拡張機能が自動収集・送信することはありません（貼り付け等はユーザー操作に基づきます）。
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-black">
            3. データの保存場所と送信
          </h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>本拡張機能は、メモ・ブックマーク状態・ゴミ箱等を端末内（IndexedDB）に保存します。</li>
            <li>
              テーマ等の軽量な設定は{" "}
              <code className="px-1 py-0.5 rounded bg-muted text-foreground">
                chrome.storage.local
              </code>{" "}
              （端末内の Chrome ストレージ）に保存します。
            </li>
            <li>
              本拡張機能は、開発者または第三者のサーバーにユーザーデータを送信しません（解析・広告・トラッキング用途の通信を行いません）。
            </li>
            <li>
              インポート/エクスポート機能は、ユーザーが選択したファイルの読み込み、または端末へのファイル保存を行うものであり、外部送信は行いません。
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-black">
            4. データの共有・第三者提供
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            本拡張機能は、ユーザーデータを第三者へ販売・転送・提供しません。
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-black">
            5. データの保持期間と削除
          </h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>メモや設定は、ユーザーが削除するまで端末内に保持されます。</li>
            <li>
              削除したメモはゴミ箱に移動し、一定期間（14日）保持した後、自動的に破棄されます。ユーザーは手動で復元・完全削除・ゴミ箱を空にすることができます。
            </li>
            <li>
              本拡張機能をアンインストールすると、Chrome の仕組みにより端末内に保存された本拡張機能のデータは削除されます（状況により手動での削除が必要な場合があります）。
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-black">
            6. セキュリティ
          </h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>
              本拡張機能は、メモ表示におけるスクリプト混入等のリスク低減のため、保存/表示時にサニタイズ（無害化）処理を行います。
            </li>
            <li>
              ただし、端末環境やブラウザ拡張機能全般の制約により、完全な安全性を保証するものではありません。
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-black">
            7. 利用する権限とその目的
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            本拡張機能は、次の権限を機能の実現のために利用します。
          </p>

          <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>
              <code className="px-1 py-0.5 rounded bg-muted text-foreground">
                sidePanel
              </code>
              : サイドパネルに本拡張機能の UI（メモ作成・管理画面）を表示するため。
            </li>
            <li>
              <code className="px-1 py-0.5 rounded bg-muted text-foreground">
                storage
              </code>
              : メモ、ブックマーク、設定、ゴミ箱等を端末内に保存するため。
            </li>
            <li>
              <code className="px-1 py-0.5 rounded bg-muted text-foreground">
                unlimitedStorage
              </code>
              : ローカル保存の容量制限に当たりにくくするため。
            </li>
            <li>
              <code className="px-1 py-0.5 rounded bg-muted text-foreground">
                activeTab
              </code>
              : ユーザー操作に基づき、現在表示中のタブの情報を取得し、メモをページに紐づけるため。
            </li>
            <li>
              <code className="px-1 py-0.5 rounded bg-muted text-foreground">
                scripting
              </code>
              : ユーザー操作に基づき、スクリーンショット範囲選択用のオーバーレイ等の処理を現在のページに対して実行するため。
            </li>
          </ul>

          <p className="mt-8 text-muted-foreground leading-relaxed">
            任意で次の権限を要求する場合があります（ユーザーが許可した場合のみ）。
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>
              <code className="px-1 py-0.5 rounded bg-muted text-foreground">
                tabs
              </code>{" "}
              （任意）: タブ切り替え時の表示更新、URL/タイトル取得の補助、メモに紐づくページを開く等、タブ連携機能のため。
            </li>
            <li>
              <code className="px-1 py-0.5 rounded bg-muted text-foreground">
                &lt;all_urls&gt;
              </code>{" "}
              （任意のホスト権限）: スクリーンショット機能を、任意のサイト上で利用できるようにするため（ユーザーがスクリーンショット機能を使用する際に要求します）。
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-black">
            8. 本ポリシーの変更
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            本ポリシーは、機能追加や法令等の変更に応じて更新されることがあります。更新後は、本ページの「最終更新日」を変更します。
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-black">
            9. お問い合わせ
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            本ポリシーまたはデータの取り扱いに関するお問い合わせは、Chrome
            ウェブストアに掲載する「サポートメール」または「デベロッパー連絡先」へご連絡ください。
          </p>
        </section>
      </main>
    </div>
  );
}

