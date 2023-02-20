export interface IPostFriendInfo {
  phone?: string;
  name: string;
  period: string;
  meet: string;
}

export interface IPatchFriendDetail {
  appealDetail: string | null;
  appeals: string[] | null;
  dontGo: string | null;
}

export interface IPostRecommendElement {
  recommendQuestion: string;
  recommendAnswer: string;
}

export interface IPostRecommend {
  recommendQuestions: IPostRecommendElement[];
}

export interface IPostRecommendQuestion {
  id: number;
  icon: string;
  title1: string;
  title2?: string;
  question1: string;
  question2: string;
  placeholder: string;
  checked: boolean;
  disabled: boolean;
}

export interface IUuid {
  uuid: string;
}
