"use client";
import { Box, Link, Typography, styled } from "@mui/material";
import Image from "next/image";
import { WorkDetailItem, WorksDetailProps } from "../types/types";

const WorksDetail: React.FC<WorksDetailProps> = ({
  workTitle,
  workContents,
  workDetail,
  workFirstImage,
  workSecondImage,
  workPointContents,
}) => {
  // const workDetailItems: WorkDetailItem[] = [
  //   { label: "開発技術", content: workDetail[0] },
  //   { label: "その他", content: workDetail[1] },
  //   { label: "制作時期", content: workDetail[2] },
  //   { label: "制作期間", content: workDetail[3] },
  //   { label: "開発担当", content: workDetail[4] },
  //   { label: "URL", content: workDetail[5] },
  //   { label: "GitHub", content: workDetail[6] },
  // ];

  // 上記のコードを以下のmap関数やfilter関数で表現している

  const WorkDetailLabels = [
    "開発技術",
    "その他",
    "制作時期",
    "制作期間",
    "開発担当",
    "URL",
    "GitHub",
  ];

  const WorkDetailItems: WorkDetailItem[] = workDetail

    // workDetailの中身(content)があったら { 詳細のラベル : 詳細のコンテント } というオブジェクトを作成するというmap
    // workDetailの中身(content)がなかったら null(オブジェクトを作らない) を返す
    // 三項演算子
    // アイテムの削除などを行うわけではないので、indexを使用
    .map((content, index) =>
      content ? { label: WorkDetailLabels[index], content } : null
    )

    // item is WorkDetailItem というので型ガードを行っている
    // mapされたworkDetailはnullというリストも含まれているため、null以外のリストを残すようにfilterをかけている
    // null以外のリストがWorkDetailItemsになる
    .filter((item): item is WorkDetailItem => item !== null);

  return (
    <Box
      mx={{ xs: 2, md: 15 }}
      pt={{ xs: 10, md: 13 }}
      pb={{ md: 10 }}
      pl={{ md: 8 }}
      pr={{ md: 6 }}
      bgcolor={"white"}
    >
      <Typography
        mr={1}
        ml={1}
        pb={0.5}
        pl={{ xs: 1, md: 3 }}
        fontFamily={"sans-serif"}
        fontSize={{ xs: 19, md: 27 }}
        letterSpacing={1.5}
        borderBottom={1.5}
        borderColor={"#C4C4C4"}
      >
        {workTitle}
      </Typography>
      {/* プロダクトの説明と詳細 */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ xs: "column-reverse", md: "row" }}
        mt={{ xs: 2, md: 0 }}
      >
        <Box
          width={{ md: "45%" }}
          flexDirection={"column"}
          mx={{ xs: 1.5, md: 5.5 }}
          mt={3}
        >
          <Box mb={3} mx={{ xs: 1.5, md: 0 }}>
            {/* md:0をつけないとxs:1.5がPCの画面の時にも効いてしまう */}
            {workContents.map((content) => (
              <ContentsTypography key={content}>{content}</ContentsTypography>
            ))}
          </Box>
          <Box
            maxWidth={{ xs: 290, md: "inherit" }} // md:0 や md:null だと灰色部分の width が狭くなってしまうため"inherit"を指定して親要素の値を継承するようにしている
            px={{ xs: 3, md: 4 }}
            pt={{ xs: 3, md: 4 }}
            pb={{ xs: 2, md: 3 }}
            bgcolor={"#EFEFEF"}
          >
            {WorkDetailItems.map((item, index) => (
              <Box key={index} display={"flex"} mb={{ xs: 0.3, md: 0.8 }}>
                <Typography minWidth={83} sx={commonTextStyle}>
                  {item.label}
                </Typography>
                :　
                {/* ここから三項演算子 */}
                {item.label === "URL" || item.label === "GitHub" ? (
                  <Link
                    href={item.content}
                    target="_blank" // 別タブで開く
                    rel="noopener noreferrer" // セキュリティ対策
                    color="primary" // デフォルトのリンク色を使用
                    underline="hover"
                    sx={commonTextStyle}
                  >
                    {item.content}
                  </Link>
                ) : (
                  <Typography sx={commonTextStyle}>{item.content}</Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <Box width={{ xs: "85%", md: "55%" }}>
          {/* ImageをStyledコンポーネントでまとめてもcss量が変わらなかった */}
          <Image
            width={580}
            height={400}
            src={workFirstImage}
            alt={"制作物のスクリーンショット"}
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </Box>
      </Box>

      {/* こだわったところ */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ xs: "column-reverse", md: "row" }}
        mt={{ xs: 10, md: 15 }}
        pb={{ xs: 7 }}
      >
        <Box width={{ xs: "85%", md: "55%" }}>
          {/* 上の<Image/>とほとんど同じ */}
          <Image
            width={580}
            height={400}
            src={workSecondImage}
            alt={"制作物のスクリーンショット"}
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </Box>
        <Box
          width={{ md: "45%" }}
          flexDirection={"column"}
          mx={{ xs: 2, md: 5 }}
          mt={{ xs: 0, md: 2 }}
        >
          <Typography
            pb={0.5}
            fontSize={{ xs: 17, md: 20 }}
            letterSpacing={{ xs: 1, md: 2 }}
            borderBottom={1.5}
            borderColor={"#C4C4C4"}
          >
            こだわったところ
          </Typography>
          <Box mt={{ xs: 3, md: 4 }} mb={{ xs: 3, md: 0 }} ml={1}>
            {workPointContents.map((point) => (
              <PointTypography key={point}>{point}</PointTypography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ContentsTypography = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  marginTop: 3,
  letterSpacing: 1,
  [theme.breakpoints.down("md")]: {
    fontSize: 15,
  },
}));

const PointTypography = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  marginTop: 15,
  letterSpacing: 1,
  [theme.breakpoints.down("md")]: {
    fontSize: 15,
    marginTop: 13,
  },
}));

const commonTextStyle = {
  letterSpacing: 1.5,
  fontSize: { xs: 12, md: 15 },
  fontFamily: "sans-serif",
};

export default WorksDetail;
