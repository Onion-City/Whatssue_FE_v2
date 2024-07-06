export interface signUpInfo {
  userName: string;
  userPhone: string;
  userEmail: string;
}

export interface userInfo extends signUpInfo {
  userId: number;
  oauth2Id: string;
}

export interface certificationRes {
  
}