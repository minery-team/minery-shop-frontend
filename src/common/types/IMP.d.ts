export declare global {
  interface Window {
    IMP: IMP;
  }
}

export interface IMP {
  init: (key: string) => void;
  certification: (
    params: CertificationParams,
    response?: CertificationCallback
  ) => void;
}

type CertificationParams = {
  pg?: string; // 본인인증 설정이 2개이상 되어 있는 경우 필수
  merchant_uid: string;
} & (
  | { popup: true } // PC환경에서는 popup 파라미터가 무시되고 항상 true 로 적용됨;
  | { m_redirect_url: string; popup: false }
);

type CertificationCallback = (response: CertificationResponse) => void;

export interface CertificationResponse {
  success: boolean;
  imp_uid: string;
}
