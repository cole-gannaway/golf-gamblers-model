// TODO work on this one and see how you should store it
export interface Bet {
  betType: BetType;
  eventId: string;
  /** Users involved in the bet */
  userIds: string[];
  scorecardIds: string[];
  /** Teams involved in the bet */
  teamIds: string[];
  createdTime: number;
}

export type BetType = 'TeamVsTeam' | '1-2-3-Ball' | 'Box' | 'Skins' | 'Quota';
