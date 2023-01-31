export const routePaths = {
  MagicLink: "/*",
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  FriendInfo: "/recommend/friendInfo",
  Keyword: "/recommend/charm",
  ChooseFirstQuestion: "/recommend/question/1",
  FirstRecommend: "/recommend/answer/1",
  ChooseSecondQuestion: "/recommend/question/2",
  SecondRecommend: "/recommend/answer/2",
  AppealDetail: "/recommend/appealDetail",
  DontGo: "/recommend/dontGo",
  RecommenderInfo: "/recommender/info",
  ChooseWork: "/recommender/chooseWork",
  Edu: "/recommender/education",
  Job: "/recommender/job",
  EduCertified: "/recommender/education/certified",
  JobCertified: "/recommender/job/certified",
  Finish: "/finish",
  RecommenderLanding: "/recommender",
  RecommendLanding: "/recommend",
  JobEdit: "/edit/job",
  EduEdit: "/edit/edu",
  Pending: "/pending",
  Arrive: "/arrive",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
