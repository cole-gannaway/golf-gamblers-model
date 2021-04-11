/**
 * Groups are used to add all group members to an event
 */
export interface Group {
  name: string;
  userIds: string[];
  createdTime: number;
}

/**
 * Team members can edit each other's scorecards
 */
export interface Team {
  name: string;
  userIds: string[];
  createdTime: number;
}
