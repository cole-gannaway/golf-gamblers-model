export interface Course {
  name: string;
  clubName?: string;
  public: boolean;
  location: Location;
  createdTime: number;
}

export interface Location {
  city: string;
  state?: string;
  country: string;
}
