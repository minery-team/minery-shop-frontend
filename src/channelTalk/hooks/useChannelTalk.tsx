import { useEffect } from 'react';

import ChannelService from '@/channelTalk/utils/ChannelService';

const useChannelTalk = () => {
  useEffect(() => {
    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_KEY,
      // 더 많은 옵션들이 있고, 각자 고유의 키를 사용하면 됩니다.
    });
  }, []);
};

export default useChannelTalk;
