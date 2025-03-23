export interface MainService {
  id: number;
  name: string;
  description: string;
  img: string;
  subServices?: SubService[];
  services?: Service[];
}

export interface SubService {
  id: number;
  name: string;
  description?: string;
  scope?: string;
  dataSheet?: string;
  img?: string;
  details?: serviceDetails[];
  applications?: serviceApplication[];
  components?: serviceComponent[];
  types?: serviceType[];
  services?: Service[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  scope?: string;
  dataSheet?: string;
  img: string;
}

export interface serviceDetails {
  title: string;
  content: string;
}
export interface serviceType {
  name: string;
  description: string;
}
export interface serviceApplication {
  description: string;
}
export interface serviceComponent {
  name: string;
  description?: string;
  images?: string[];
}
