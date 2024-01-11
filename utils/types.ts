export interface IProject {
  title: string;
  projectPeriod: string;
  headCount: number;
  techStacks: string[];
  link: {
    gitHub: string;
    website: string;
  };
  summary: string;
  images: string[];
  mainFunction: string[];
  myFunction: {
    title: string[];
  }[];
  description: string;
}
