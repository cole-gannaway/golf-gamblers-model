import { IdRefMap } from './relations';

/**
 * Groups are used to add all group members to an event
 */
export interface Group {
  name: string;
  userRefs: IdRefMap;
  createdTime: FirebaseFirestore.Timestamp;
}

/**
 * Team members can edit each other's scorecards
 */
export interface Team {
  name: string;
  userRefs: IdRefMap;
  createdTime: FirebaseFirestore.Timestamp;
}
