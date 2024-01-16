export enum Part {
  Wings = "Wings",
  Drumsticks = "Drumsticks",
  Breast = "Breast",
  Back = "Back",
  Hip = "Hip",
  Leg = "Leg",
  Thigh = "Thigh",
}

export enum Category {
  Fried = "Fried",
  PepperChicken = "Pepper Chicken",
  SouthernFried = "Southern Fried",
}

export interface Menu {
  fried: CartItem[];
  "pepper chicken": CartItem[];
  "southern fried": CartItem[];
}

export interface MenuItem {
  id: Number;
  part: Part;
  price: Number;
  description: String;
  category: Category;
  availability: number;
}

export interface CartItem {
  id: Number;
  part: Part;
  price: Number;
  description: String;
  category: Category;
  availability: number;
  number: Number;
}
