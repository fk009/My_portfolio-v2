# My_portfolio-v2

バックエンド/MLOps志向の転職向けポートフォリオサイトです。  
`src/data/portfolio.ts` を中心に内容を管理し、UIコンポーネントは表示責務に寄せています。

## セクション構成

- Hero
- About
- Works
- Engineering Approach
- Skills
- Contact

## 技術スタック

- Next.js 16.2.3 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

## スクリプト

```bash
npm run dev    # 開発サーバー
npm run build  # 本番ビルド
npm run start  # 本番起動
npm run lint   # ESLint
```

## コンテンツ更新の主な編集先

- `src/data/portfolio.ts`
  - `profile`: プロフィール、資格、外部リンク
  - `works`: 制作物カード
  - `engineeringApproach`: 課題解決カード
  - `skills`: スキル一覧（注力領域・実装経験ベース）

## 実装上のメモ

- Works の `Architecture` タブは `architectureImageUrl` がある作品のみ表示されます。
- ダークテーマは `src/app/layout.tsx` の `<html className="dark ...">` で固定しています。

## 主要ディレクトリ

```text
src/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ About.tsx
│  ├─ Contact.tsx
│  ├─ EngineeringApproach.tsx
│  ├─ Header.tsx
│  ├─ Hero.tsx
│  ├─ Skills.tsx
│  ├─ WorkCard.tsx
│  └─ Works.tsx
└─ data/
   └─ portfolio.ts
```

## ドキュメント

- `CLAUDE.md`: 作業ルール
- `MEMORY.md`: 現在状態・変更履歴
- `docs/INDEX.md`: 補助ドキュメント案内
