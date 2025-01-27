// tanguy-morvan/src/types/project.ts
export interface Project {
    title: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    year: string;
    images: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    }[];
  }