import { IdRefMap } from './relations';

export interface Event {
  name: string;
  private: boolean;
  courseRef: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
  userRefs: IdRefMap;
  groupRefs?: IdRefMap;
  createdBy: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
  createdAt: FirebaseFirestore.Timestamp;
}

export interface EventMetaData {
  numberOfHoles: number;
  maxBet: number;
  tees: string;
}
