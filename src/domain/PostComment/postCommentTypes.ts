export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  createdAtRelative: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; //101,
  message: string; //"Decerno eveniet caries ut cotidie vel ventosus audio.",
  user_id: number; //2,
  post_id: number; //1,
  created_at: string; //"2025-08-11T03:51:22.000-03:00",
  updated_at: string; //"2025-08-11T19:51:19.988-03:00",
  user: {
    id: number; //2,
    first_name: string; //"Tamires",
    last_name: string; //"Silva",
    username: string; //"tami_silva",
    email: string; //"tsilva@coffstack.com",
    profile_url: string; //"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/4-tamires.png",
    is_online: boolean; //false,
    full_name: string; //"Tamires Silva"
  };
  meta: any; //{}
}
