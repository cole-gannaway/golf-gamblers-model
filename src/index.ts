// this import cascades to the rest of the files
import * as FirebaseFirestore from '@google-cloud/firestore';

export { Bet, BetType } from './bet';
export { Course, Location } from './course';
export { Event, EventMetaData } from './event';
export { Group, Team } from './group';
export { IdRefMap } from './relations';
export { ScoreCard } from './scorecard';
export { UserPrivateData, UserPublicData, SubscriptionState } from './user';
