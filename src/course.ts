export interface Course {
  name: string;
  clubName?: string;
  public: boolean;
  location: Location;
  createdAt: FirebaseFirestore.Timestamp;
}

export interface Location {
  city: string;
  state?: string;
  country: string;
}
