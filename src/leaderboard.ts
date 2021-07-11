/**
 * Defines a bet leaderboard per event
 */
export interface BetsLeaderBoard {
  eventId: string;
  betSummary: BetSummary;
}

export interface BetSummary {
  [userId: string]: {
    betsAndResults: { [betId: string]: number };
  };
}

/**
 * Defines a scoreboard leaderboard per event
 */
export interface ScorecardLeaderBoard {
  eventId: string;
  scorecardSummary: ScorecardSummary;
}

export interface ScorecardSummary {
  [scorecardId: string]: {
    userId: string;
    totalScore: number;
    overUnder: number;
  };
}
