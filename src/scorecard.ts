export interface Scorecard {
  scorecardId: string;
  userId: string;
  eventId?: string;
  createdTime: number;
  holes: Holes;
}

export interface Holes {
  [holeNumber: number]: Hole;
}
export interface Hole {
  strokes: number;
  holeScoreInfo?: HoleScoreInfo;
  holeInfo?: HoleInfo;
}

/** This information is filled in from the course */
export interface HoleInfo {
  par: number;
  handicap?: number;
}

export interface HoleScoreInfo {
  /** Gettting a par from the sand */
  sandy: boolean;
}
