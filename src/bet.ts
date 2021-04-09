import { IdRefMap } from './relations';

// TODO work on this one and see how you should store it
export interface Bet {
  betType: BetType;
  eventRef: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
  /** Users involved in the bet */
  userRefs: IdRefMap;
  scorecardRefs: IdRefMap;
  /** Teams involved in the bet */
  teamRefs: IdRefMap;
  createdAt: FirebaseFirestore.Timestamp;
}

export type BetType = 'TeamVsTeam' | '1-2-3-Ball' | 'Box' | 'Skins' | 'Quota';
