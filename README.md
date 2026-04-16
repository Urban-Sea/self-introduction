# Ryu — Portfolio

Ryu の自己紹介ページ。Next.js (App Router) + TypeScript + Tailwind CSS v4 で作られた、パステル配色のモダンなポートフォリオサイトです。

## 技術スタック

- **Next.js 16** (App Router, Turbopack)
- **React 19** / **TypeScript**
- **Tailwind CSS v4** — `@theme` でパステルカラーをデザイントークン化
- **Motion** (`motion/react`) — スクロール連動アニメーション
- **Lenis** — ヌルッとしたスムーススクロール
- **next/font** で Google Fonts を自動最適化（Zen Kaku Gothic New + Fraunces）

## セットアップ

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

デフォルトは [http://localhost:3000](http://localhost:3000)。
**3000 番が埋まっている場合** はポートを指定して起動してください。

```bash
npx next dev -p 3001
# → http://localhost:3001
```

ページを編集するには `app/page.tsx` や `app/components/*` を書き換えると、ホットリロードで即座に反映されます。

## 本番ビルド

```bash
npm run build   # 型チェック + 静的ビルド
npm run start   # ビルド成果物を配信
```

## ディレクトリ構成

```
app/
├── layout.tsx               ルートレイアウト（フォント・Lenis 組込み）
├── page.tsx                 トップページ（各セクションを並べるだけ）
├── globals.css              パステルのデザイントークンを @theme で定義
└── components/
    ├── SmoothScroll.tsx      Lenis による滑らかスクロール
    ├── AuroraBackground.tsx  パステルなグラデーション blob の背景
    ├── FadeIn.tsx            スクロールイン用の共通ラッパー
    ├── SectionHeading.tsx    セクション見出し
    ├── Hero.tsx              ヒーロー（パララックスで消える演出）
    ├── About.tsx             3 軸カード（大学生 / 開発・インフラ / セキュリティ）
    ├── Interests.tsx         投資・競馬などのチップ
    ├── Career.tsx            タイムライン（線がスクロールに合わせて伸びる）
    ├── Products.tsx          akihabara-cardmap / open-regime のカード
    └── Footer.tsx            X (@frankie_kincsem) へのリンク
```

## カスタマイズのヒント

- **配色を変える** → `app/globals.css` の `@theme` ブロックで CSS 変数をまとめて定義しています。ここの色を書き換えるだけで全体に反映されます。
- **文面を変える** → 各セクションの `components/*.tsx` の冒頭に定数（`cards`, `chips`, `timeline`, `products` など）があるので、そこを編集します。
- **セクションの追加・並び替え** → `app/page.tsx` で JSX の並びを変えるだけです。

## デプロイ

[Vercel](https://vercel.com/) にそのままデプロイできます。

```bash
npm i -g vercel
vercel
```

詳細は [Next.js デプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。
