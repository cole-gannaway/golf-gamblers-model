export interface UserPublicData {
  name?: string;
  nickname?: string;
  handicap?: number;
}

export interface UserPrivateData {
  email?: string;
  phoneNumber?: string;
  subscriptionState: SubscriptionState;
  createdAt: FirebaseFirestore.Timestamp;
}

export type SubscriptionState = 'None' | 'Basic';
