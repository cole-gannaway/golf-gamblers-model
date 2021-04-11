/**
 * Event information should be uneditable once created
 */
export interface Event {
  name: string;
  createdTime: number;
  creatorId: string;
}

/**
 * Event configuration only editable by event admins
 */
export interface EventConfiguration {
  private: boolean;
  courseId: string;
  numberOfHoles: number;
  maxBet: number;
  tees: string;
  state: EventState;
}

/**
 * Event data that firebase functions will write to
 */
export interface EventPrivateData {
  // TODO add information regarding the event results and leaderboard
  betIds?: string[];
  scoreIds?: string[];
}

/**
 * Event relationships with users giving them permissions
 */
export interface EventUser {
  userId: string;
  eventId: string;
  isAdmin: boolean;
}

export type EventState = 'IN_PROGRESS' | 'COMPLETE';
