export interface IPull {
  name: string;
  banner?: string;
  pity: number;
  fiftyWon: boolean;
  date: string;
  image: string;
}

export interface IRollHistory {
  characters: IPull[];
  weapons: IPull[];
  standard: IPull[];
}
