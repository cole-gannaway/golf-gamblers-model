export interface ScoreCard {
  userRef: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
  createdAt: FirebaseFirestore.Timestamp;
}
