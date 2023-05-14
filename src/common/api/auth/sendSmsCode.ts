import { requester } from '@/common/api/requester';

export async function sendSmsCode(phoneNumber: string) {
  await requester.post('/auth/sms', { phoneNumber });
}
