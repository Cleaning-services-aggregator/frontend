export type RequestType = {
  id: string;
  deadline: string;
  rooms: number;
  bathrooms: number;
  kitchens: number;
  serviceType: string;
  serviceFreq: string;
  propertyType: string;
  propertySize: number;
  propertyCondition: string;
  address: string;
  createdAt: string;
  bids: BidType[];
  attachedVideo: string;
};

export type BidType = {
  id: string;
  amount: string;
  duration: string;
  pitchOffer: string;
  requestId: string;
  createdAt: Date;
};
