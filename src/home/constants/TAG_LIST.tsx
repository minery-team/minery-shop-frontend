import { colors } from 'common/constants/colors';
import { WineType } from 'common/models';
import { TagInfo } from '../types/TagInfo';

export const TAG_LIST: TagInfo[] = [
  {
    key: WineType.RED,
    text: '레드',
    spotColor: `${colors.primary700Default}`,
  },
  {
    key: WineType.WHITE,
    text: '화이트',
    spotColor: `${colors.subIvory100}`,
  },
  {
    key: WineType.ROSE,
    text: '로제',
    spotColor: `${colors.primary300}`,
  },
  {
    key: WineType.SPARKLING,
    text: '스파클링',
    spotColor: `${colors.subBlue100}`,
  },
  {
    key: WineType.ETC,
    text: '기타',
    spotColor: `${colors.gray400}`,
  },
];
