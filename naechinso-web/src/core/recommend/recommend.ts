export type relationTypeProps = {
  id: number;
  relation: string;
  checked: boolean;
};

export const relationTypeList: relationTypeProps[] = [
  { id: 0, relation: "친족", checked: false },
  { id: 1, relation: "초/중/고 친구", checked: false },
  { id: 2, relation: "대학교 친구", checked: false },
  { id: 3, relation: "회사 친구", checked: false },
  { id: 4, relation: "기타", checked: false },
];

export const relationDurationList: relationTypeProps[] = [
  { id: 0, relation: "1년 이하", checked: false },
  { id: 1, relation: "1-3년", checked: false },
  { id: 2, relation: "3-5년", checked: false },
  { id: 3, relation: "5년 이상", checked: false },
];

export type keywordProps = {
  id: number;
  keyword: string;
  checked: boolean;
};

export const keywordList: keywordProps[] = [
  {
    id: 0,
    keyword: "사랑꾼💗",
    checked: false,
  },
  {
    id: 1,
    keyword: "유머러스😜",
    checked: false,
  },
  {
    id: 2,
    keyword: "활발해🤗",
    checked: false,
  },
  {
    id: 3,
    keyword: "차분해🍵",
    checked: false,
  },
  {
    id: 4,
    keyword: "귀여워🐹",
    checked: false,
  },
  {
    id: 5,
    keyword: "다정해🍭",
    checked: false,
  },
  {
    id: 6,
    keyword: "섬세해💐",
    checked: false,
  },
  {
    id: 7,
    keyword: "천사야😇",
    checked: false,
  },
  {
    id: 8,
    keyword: "똑똑해🧠",
    checked: false,
  },
  {
    id: 9,
    keyword: "일잘러🤓",
    checked: false,
  },
  {
    id: 10,
    keyword: "꿀성대🍯",
    checked: false,
  },
  {
    id: 11,
    keyword: "실물파👀",
    checked: false,
  },
  {
    id: 12,
    keyword: "패션센스🧥",
    checked: false,
  },
  {
    id: 13,
    keyword: "핫바디💪🏻",
    checked: false,
  },
  {
    id: 14,
    keyword: "차가 있어🚗",
    checked: false,
  },
  {
    id: 15,
    keyword: "자기관리🏊🏻‍",
    checked: false,
  },
  {
    id: 16,
    keyword: "화목한가정‍👩‍👦",
    checked: false,
  },
  {
    id: 17,
    keyword: "여유있지💰",
    checked: false,
  },
  {
    id: 18,
    keyword: "요리왕👨‍🍳",
    checked: false,
  },
  {
    id: 19,
    keyword: "다독왕📚",
    checked: false,
  },
  {
    id: 20,
    keyword: "꿀피부🥚",
    checked: false,
  },
  {
    id: 21,
    keyword: "리더십👍",
    checked: false,
  },
  {
    id: 22,
    keyword: "바른 인성⚖",
    checked: false,
  },
  {
    id: 23,
    keyword: "재주왕🤸‍♀️",
    checked: false,
  },
  {
    id: 24,
    keyword: "애교쟁이😘",
    checked: false,
  },
  {
    id: 25,
    keyword: "외모출중✨",
    checked: false,
  },
  {
    id: 26,
    keyword: "배려심🌊",
    checked: false,
  },
  {
    id: 27,
    keyword: "긍정적🐥",
    checked: false,
  },
  {
    id: 28,
    keyword: "예의바름🙇🏻‍♀️",
    checked: false,
  },
  {
    id: 29,
    keyword: "배울점많아👏🏻",
    checked: false,
  },
];

export type appealDetailProps = {
  id: number;
  keyword: string;
  checked: boolean;
};

export const appealDetailList: appealDetailProps[] = [
  { id: 0, keyword: "감동을 주는💦", checked: false },
  {
    id: 1,
    keyword: "가장 오래된👵",
    checked: false,
  },
  {
    id: 2,
    keyword: "제일 잘맞는🙌",
    checked: false,
  },
  {
    id: 3,
    keyword: "무인도에 떨어져도 잘 살거 같은🏝",
    checked: false,
  },
  {
    id: 4,
    keyword: "일을 잘하는💼",
    checked: false,
  },
  {
    id: 5,
    keyword: "고민을 제일 잘 들어주는👂",
    checked: false,
  },
  {
    id: 6,
    keyword: "리액션이 좋은🎉",
    checked: false,
  },
  {
    id: 7,
    keyword: "자기계발 열심히 하는💪",
    checked: false,
  },
  {
    id: 8,
    keyword: "알잘딱깔센 적극적인😉",
    checked: false,
  },
  {
    id: 9,
    keyword: "도전과 성장을 즐기는🚀",
    checked: false,
  },
  {
    id: 10,
    keyword: "리더십이 뛰어난📢",
    checked: false,
  },
  {
    id: 11,
    keyword: "가장 생각이 깊은✨",
    checked: false,
  },
  {
    id: 12,
    keyword: "아이디어가 풍부한🎁",
    checked: false,
  },
  {
    id: 13,
    keyword: "애교가 많은🐹",
    checked: false,
  },
  {
    id: 14,
    keyword: "웃음을 많이 주는😄",
    checked: false,
  },
];

export type TipProps = {
  id: number;
  desc1: string;
  highlight: string;
  desc2: string;
};

export const TipList: TipProps[] = [
  { id: 0, desc1: "실명 언급은 안돼!", highlight: "[내 친구]", desc2: "로 작성 부탁할게" },
  { id: 1, desc1: "", highlight: "[반말]", desc2: "로 친근하게 적어줘" },
  { id: 2, desc1: "", highlight: "[구체적인 에피소드]", desc2: "와 함께 적어주면 더 좋아" },
  { id: 3, desc1: "", highlight: "", desc2: "추천사는 친구의 매칭률에 중요한 영향을 미쳐!" },
];

export type RecommendLandingProps = {
  id: number;
  comment1: string;
  comment2: string;
  comment3: string;
  highlight?: string;
  desc1: string;
  desc2: string;
  desc3?: string;
};

export const RecommendLandingList: RecommendLandingProps[] = [
  {
    id: 0,
    comment1: "네 친구라면...",
    comment2: "분명 멋있겠지? 😘",
    comment3: "너무 기대된다!",
    highlight: "85~04년도생만",
    desc1: "지금은 수도권에 거주하는",
    desc2: "내친소를 이용할 수 있어!",
    desc3: "추천하는 사람의 나이는 상관 없으니 걱정하지 마",
  },
  {
    id: 1,
    comment1: "안녕!",
    comment2: "우리는 지인기반 소개앱 내친소야😎",
    comment3: "너의 추천사는 친구가 좋은 친구를 만나는 데 분명 큰 도움이 될거야! ",

    desc1: "잠깐만 시간을 내서 친구에 대해서",
    desc2: "소개해줄 수 있을까?",
  },
];

export type RecommendStepMessageProps = {
  id: number;
  questionChoiceMessage: string;
  recommendStepMessage: string;
};

export const RecommendStepMessage: RecommendStepMessageProps[] = [
  { id: 0, questionChoiceMessage: "첫 번째 질문을 선택해줘", recommendStepMessage: "질문 1" },
  { id: 1, questionChoiceMessage: "두 번째 질문을 선택해줘", recommendStepMessage: "질문 2" },
];

export type RecommenderInfoProps = {
  id: number;
  title1: string;
  title2: string;
  title3?: string;
};

export const RecommenderInfoList: RecommenderInfoProps[] = [
  {
    id: 0,
    title1: "👀",
    title2: "간단히 너를 소개해줘!",
  },
  {
    id: 1,
    title1: "😆",
    title2: "너에 대해 소개해줄래?",
  },
];
