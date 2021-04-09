import { IdRefMap } from './relations';

export interface ScoreCard {
  userRef: IdRefMap;
  createdTime: FirebaseFirestore.Timestamp;
}
