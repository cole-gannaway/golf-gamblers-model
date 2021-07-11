// TODO work on this one and see how you should store it
export interface Bet {
  betId: string;
  wager: number;
  betType: BetType;
  betResults: SkinsBetResults | MatchPlayBetResults;
  eventId: string;
  /** Users involved in the bet */
  userIds: string[];
  scorecardIds: string[];
  /** Teams involved in the bet */
  teamIds: string[];
  createdTime: number;
  /** Accepted requests */
  betRequestId: string;
}

export type BetType = 'MatchPlay' | '1-2-3-Ball' | 'Box' | 'Skins' | 'Quota';

/** This enumeration is designed to be a quick representation of what is going on under the hood */
export type BetState = 'PENDING' | 'ACTIVE' | 'COMPLETE' | 'CANCELED';

export interface BetRequest {
  betId: string;
  eventId: string;
  userIds: string[];
}

//////////////// BET RESULTS ////////////////
export interface SkinsBetResults {
  resultsPerHole: {
    [holeNumber: number]: {
      scorecardId: string;
    };
  };
  scorecardIdToTotalSkins: {
    [scorecardId: string]: number;
  };
}
export interface MatchPlayBetResults {
  resultsPerHole: {
    [holeNumber: number]: {
      scorecardId: string;
    };
  };
  scorecardIdToTotalHolesWon: {
    [scorecardId: string]: number;
  };
}
