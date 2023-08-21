import { IMP_KEY } from '../constants';
import { CertificationResponse } from '../types';

export namespace IMP {
  let isInitialized = false;

  export function init() {
    if (isInitialized) {
      return;
    }
    window.IMP.init(IMP_KEY);
    isInitialized = true;
  }

  export async function requestCertification(id: string) {
    init();
    return new Promise<CertificationResponse>((resolve) => {
      window.IMP.certification(
        {
          pg: 'A010002002',
          merchant_uid: id,
          popup: false,
          m_redirect_url: window.location.href,
        },
        resolve
      );
    });
  }
}
