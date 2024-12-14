export type HeaderEachViewLinkType = {
  name: string;
  href: string;
};

export type AboutMeType = {
  title: string[];
  contents: string[];
};

export type SkillsCardDataType = {
  skillsImage: string;
  skillsName: string;
};

export type WorksContentsDataType = {
  worksImage: string;
  worksName: string;
  worksDetail: string;
};

export type ProfileDataType = {
  profileDate: string;
  profileTitle: string;
  profileDescription: string;
};

export type WorksDetailProps = {
  workTitle: string;
  workContents: string[];
  workDetail: string[]; //ここにworkDetailLabelを入れようとしたが、works-datail-dataに同じデータを重複して書いてしまいそうなため却下
  workFirstImage: string;
  workSecondImage: string;
  workPointContents: string[];
};

export type WorkDetailItem = {
  label: string;
  content: string;
};
