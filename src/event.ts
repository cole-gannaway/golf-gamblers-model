import { IdRefMap } from './relations';

export interface Event {
  name: string;
  createdTime: FirebaseFirestore.Timestamp;
  creatorRef: IdRefMap;
}

export interface EventConfiguration {
  private: boolean;
  courseRef: IdRefMap;
  numberOfHoles: number;
  maxBet: number;
  tees: string;
  status: EventStatus;
}

export interface EventPrivateData {
  // TODO add information regarding the event results and leaderboard
  betRefs?: IdRefMap;
  scoreRefs?: IdRefMap;
}

export interface EventAdmins {
  userRefs: IdRefMap;
}

export interface EventUsers {
  userRefs: IdRefMap;
  groupRefs?: IdRefMap;
}

export type EventStatus = 'created' | 'complete';
