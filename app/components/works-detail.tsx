import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";

const WorksDetail = () => {
  return (
    <Box mx={15} pt={13} pb={10} pl={8} pr={6} bgcolor={"white"}>
      <Typography
        pb={0.5}
        pl={3}
        fontSize={30}
        letterSpacing={2}
        borderBottom={1.5}
        borderColor={"#C4C4C4"}
      >
        Web色紙
      </Typography>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box flexDirection={"column"} mx={5} mt={3}>
          {/* プロダクトの説明と詳細 */}
          <Typography mb={3} fontSize={17} letterSpacing={1}>
            卒業する先輩へのweb色紙を制作しました。
            <br />
            私が所属するプログラミングサークルを創設してくださった方で『感謝×プログラミング』として開発することを決めました。
            <br />
            私の初めてのプロダクトです。
          </Typography>
          <Box p={5} bgcolor={"#EFEFEF"} letterSpacing={1}>
            開発技術 ： Next.js, TypeScript
            <br />
            その他　 ： Material UI, Vercel(デプロイ)
            <br />
            制作時期 ： 2024年2月
            <br />
            制作期間 ： 1ヶ月
          </Box>
        </Box>
        <Box>
          <Image
            width={600}
            height={400}
            src={"/works-detail/web-shikishi.png"}
            alt={""}
            priority
          />
        </Box>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={15}
      >
        <Box>
          <Image
            width={600}
            height={400}
            src={"/works-detail/web-shikishi.png"}
            alt={""}
            priority
          />
        </Box>
        <Box flexDirection={"column"} mx={5} mt={2}>
          {/* こだわったところ */}
          <Typography
            pb={0.5}
            fontSize={20}
            letterSpacing={2}
            borderBottom={1.5}
            borderColor={"#C4C4C4"}
          >
            こだわったところ
          </Typography>
          <Box ml={1}>
            <Typography fontSize={17} mt={4} letterSpacing={1}>
              卒業年度ごとに色を分けたところです。
              <br />
              サークルで使用しているコミュニケーションツールの学年ごとにロールを設定しており、その色と同じ色にしました。そうすることで、直感的にどの学年のメッセージがあるか分かるようになると考えました。
            </Typography>
            <Typography mt={2} fontSize={17} letterSpacing={1}>
              通常、一部の機能を動的にしたい際はReactの機能であるPropsの受け渡しを行いますが、colorの場合は上手く機能しなかったためMUIのstyled関数を利用して実装しました。
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorksDetail;
