import { WorksDetailProps } from "../types/types";

export const WebShikishiDetailData: WorksDetailProps = {
  workTitle: "web色紙",
  workContents: [
    "卒業する先輩へのweb色紙を制作しました。",
    "私が所属するプログラミングサークルを創設してくださった方で『感謝×プログラミング』として開発することを決めました。",
    "私の初めてのプロダクトです。",
  ],
  workDetail: [
    "開発技術 ： Next.js, TypeScript",
    "その他　 ： MUI, Vercel(デプロイ)",
    "制作時期 ： 2024年2月",
    "制作期間 ： 1ヶ月",
    "開発担当 ： デザイン, 開発全般",
  ],
  workFirstImage: "/works-detail/web-shikishi.png",
  workSecondImage: "/works-detail/web-shikishi.png",
  workPointContents: [
    "卒業年度ごとに色を分けたところです。サークルで使用しているコミュニケーションツールの学年ごとにロールを設定しており、その色と同じ色にしました。そうすることで、直感的にどの学年のメッセージがあるか分かるようになると考えました。",
    "通常、一部の機能を動的にしたい際はReactの機能であるPropsの受け渡しを行いますが、colorの場合は上手く機能しなかったためMUIのstyled関数を利用して実装しました。",
  ],
};

export const CanBookDetailData: WorksDetailProps = {
  workTitle: "CanBook",
  workContents: [
    "一ヶ月間のハッカソンにて「ギャップを埋めるものづくり」というテーマから、教育費のギャップ解消のための教科書特化型フリマアプリ「CanBook」を開発しました。",
    "自身の大学キャンパス内でのみ教科書の交換・レンタル・購入ができるプラットフォームです。",
  ],
  workDetail: [
    "開発技術 ： Next.js, TypeScript, Go",
    "その他　 ： MUI, Vercel, PostgreSQL, 　　　　　docker",
    "制作時期 ： 2024年3月",
    "制作期間 ： 1ヶ月",
    "開発担当 ： 企画, デザイン, 開発(フロント)",
  ],
  workFirstImage: "/works-detail/web-shikishi.png",
  workSecondImage: "/works-detail/web-shikishi.png",
  workPointContents: [
    "あああああああああああああああああああああああああ",
    "あああああああああああああああああああああああああああああああ",
  ],
};

export const TutorialDetailData: WorksDetailProps = {
  workTitle: "PeachTechチュートリアル",
  workContents: [
    "私が所属するプログラミングサークルに新しく加入した方に取り組んでもらうチュートリアルサイトを開発しました。",
    "加入してすぐに代表との1on1があり、そこで説明する内容がいつも同じで量が多かったため、その点を効率化し代表の労力を減らすために開発いたしました。",
  ],
  workDetail: [
    "開発技術 ： Next.js, TypeScript",
    "その他　 ： MUI, Vercel(デプロイ)",
    "制作時期 ： 2024年5月",
    "制作期間 ： 2ヶ月",
    "開発担当 ： 企画, デザイン, 開発(Stepページ), 文言",
  ],
  workFirstImage: "/works-detail/PeachTech-tutorial.png",
  workSecondImage: "/works-detail/PeachTech-tutorial.png",
  workPointContents: [
    "このチュートリアルサイトでは現在6つのStepがありますが、適宜Stepを追加していくことを想定してコンポーネント分割を丁寧にして開発しました。",
    "データさえあれば容易にページを作れるよう、UIに関するコードとデータ反映をさせるコードを切り離しています。(3枚目の画像)",
  ],
};

export const PortfolioDetailData: WorksDetailProps = {
  workTitle: "ポートフォリオサイト",
  workContents: [
    "このサイトである私のポートフォリオサイトです。",
    "今までの開発ではチーム開発しかしてこなかったため、初めての個人開発での制作物です。",
    "デザインにもこだわりを持って自分の好きなように開発できることに楽しさを感じながら、開発をしました。",
  ],
  workDetail: [
    "開発技術 ： Next.js, TypeScript",
    "その他　 ： MUI, Vercel(デプロイ)",
    "制作時期 ： 2024年8月",
    "制作期間 ： 1ヶ月",
    "開発担当 ： 企画, デザイン, 開発",
  ],
  workFirstImage: "/works-detail/portfolio-site.png",
  workSecondImage: "/works-detail/portfolio-site.png",
  workPointContents: [
    "私しか開発しないからこそ、フォントや余白の取り方を細かく設定して違和感のない配置で制作するところにこだわりました。またパララックスやヘッダーの透かしが気に入っています。",
    "面接などで伝えきれない分を補うために可能な限り詳細かつ簡潔に伝えられるようこだわりました。(WorksやProfile)",
    "About meやSkillsは現段階で表面的な情報が多いため、どんな人物かどんな機能を扱えて業務レベルでどのくらい開発ができるかなど、デザインも意識しながら今後改良していきます。",
  ],
};
