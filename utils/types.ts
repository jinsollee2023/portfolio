export interface IProject {
  id: string;
  title: string;
  projectPeriod: string;
  headCount: string;
  techStacks: string[];
  link: {
    gitHub: string;
    website: string;
  };
  summary: string;
  images: string[];
  mainFunction: string[];
  myFunctions: {
    title: string;
    desc: string[];
  }[];
  description: string;
}
