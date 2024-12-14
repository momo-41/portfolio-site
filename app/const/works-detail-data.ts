import { WorksDetailProps } from "../types/types";

export const WebShikishiDetailData: WorksDetailProps = {
  workTitle: "web色紙",
  workContents: [
    "卒業する先輩へのweb色紙を制作しました。",
    "私が所属するプログラミングサークルを創設してくださった方で『感謝×プログラミング』として開発することを決めました。私の初めての制作物です。",
    "(個人情報が多いためURL等は載せておりません)",
  ],
  workDetail: [
    "Next.js, TypeScript",
    "MUI, Vercel(デプロイ)",
    "2024年2月",
    "1ヶ月",
    "デザイン, 開発全般",
  ],
  workFirstImage: "/works-detail/web-shikishi.png",
  workSecondImage: "/works-detail/web-shikishi-second.png",
  workPointContents: [
    "卒業年度ごとに色を分けたところです。サークルで使用しているコミュニケーションツールにて学年ごとにロールを設定しており、その色と同じ色にしました。そうすることで、直感的にどの学年のメッセージがあるか分かるようになると考えました。",
    "通常、一部の機能を動的にしたい際はReactの機能であるPropsの受け渡しを行いますが、colorの場合は上手く機能しなかったためMUIのstyled関数を利用して実装しました。",
  ],
};

export const CanBookDetailData: WorksDetailProps = {
  workTitle: "CanBook",
  workContents: [
    "一ヶ月間のハッカソンにて「ギャップを埋めるものづくり」というテーマから、教育費のギャップ解消のための教科書特化型フリマアプリ「CanBook」を開発しました。",
    "自身の大学キャンパス内でのみ教科書の交換・レンタル・購入ができるプラットフォームです。",
    "(無料のデータベースを利用しているため表示されない場合がございます)",
  ],
  workDetail: [
    "Next.js, TypeScript, Go",
    "MUI, Vercel, PostgreSQL, docker",
    "2024年3月",
    "1ヶ月",
    "企画, デザイン, 開発(フロント)",
    "https://canbook.vercel.app ",
    "https://github.com/shiori-42/CanBook",
  ],
  workFirstImage: "/works-detail/CanBook.png",
  workSecondImage: "/works-detail/CanBook-second.png",
  workPointContents: [
    "細かいこだわりを持って開発することはできなかったのですが、フリマアプリとしての最低限の機能をとにかく実装することを意識しました。ログイン機能・出品機能・検索機能・メッセージ機能など、プログラミングにまだ慣れていないながら機能的なアプリを開発するために多くのプロダクトを参考にして開発しました。",
    "まだまだ不完全な機能が多いため、今後も継続的に開発していこうと考えています。",
  ],
};

export const TutorialDetailData: WorksDetailProps = {
  workTitle: "PeachTechチュートリアル",
  workContents: [
    "私が所属するプログラミングサークルに新しく加入した方に取り組んでもらうチュートリアルサイトを開発しました。",
    "加入してすぐに代表との1on1があり、そこで説明する内容がいつも同じで量が多かったため、その点を効率化し代表の労力を減らすために開発いたしました。",
    "(個人情報があるためURL等は載せておりません)",
  ],
  workDetail: [
    "Next.js, TypeScript",
    "MUI, Vercel(デプロイ)",
    "2024年5月",
    "2ヶ月",
    "企画, デザイン, 文言, 開発",
  ],
  workFirstImage: "/works-detail/PeachTech-tutorial.png",
  workSecondImage: "/works-detail/PeachTech-tutorial-second.png",
  workPointContents: [
    "このチュートリアルサイトでは現在6つのStepがありますが、適宜Stepを追加していくことを想定してコンポーネント分割を丁寧にして開発しました。",
    "データさえあれば容易にページを作れるよう、UIに関するコードとデータ反映をさせるコードを切り離しています。", //(3枚目の画像)というふうに書きたい
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
    "Next.js, TypeScript",
    "MUI, Vercel(デプロイ)",
    "2024年8月",
    "1ヶ月",
    "企画, デザイン, 開発",
    "https://momo-41-portfolio-site.vercel.app",
    "https://github.com/momo-41/portfolio-site",
  ],
  workFirstImage: "/works-detail/portfolio-site.png",
  workSecondImage: "/works-detail/portfolio-site.png",
  workPointContents: [
    "私しか開発しないからこそ、フォントや余白の取り方を細かく設定して違和感のない配置で制作するところにこだわりました。パララックスやヘッダーの透かしが気に入っています。",
    "面接などで伝えきれない分を補うために可能な限り詳細かつ簡潔に伝えられるようこだわりました。(WorksやProfile)",
    "About meやSkillsは現段階で表面的な情報が多いため、どんな人物かどんな機能を扱えて業務レベルでどのくらい開発ができるかなど、デザインも意識しながら今後改良していきます。",
  ],
};

export const CocofillDetailData: WorksDetailProps = {
  workTitle: "Cocofill",
  workContents: [
    "従業員の希望の働き方に合わせたシフト作成ができるアプリケーションです。",
    "週4希望だけど5日分のシフトを提出する人、土日どちらかは休みがいい、などの希望に対して、適切にシフト作成ができているか一画面で確認しながらシフト作成ができます。",
    "フリー株式会社の選考課題として開発をしました。",
  ],
  workDetail: [
    "Next.js, TypeScript, Rails",
    "MUI, Vercel, Render",
    "2024年11月",
    "2週間",
    "企画, デザイン, 開発",
    "https://cocofill-two.vercel.app",
    "https://github.com/momo-41/Cocofill",
  ],
  workFirstImage: "/works-detail/Cocofill.png",
  workSecondImage: "/works-detail/Cocofill-second.png",
  workPointContents: [
    "右側の希望比較の欄にて、希望の出勤日数に対して現在作成しているシフトが適切かどうかを比較しています。",
    "適切な場合は「◎」、適切でない場合は「※」を表示させています。",
    "こだわった点として、「◎」や「※」のみの表示だと、シフトをどのように修正すればいいか分からないと感じたため、かっこ()を使って適切な出勤数の表示をしました。",
  ],
};
