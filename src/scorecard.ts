export interface ScoreCard {
  userId: string;
  createdTime: number;
  holes: Hole[];
}

export interface Hole {
  strokes: number;
  holeInfo: HoleInfo;
}

export interface HoleInfo {
  par: number;
  handicap?: number;
}
