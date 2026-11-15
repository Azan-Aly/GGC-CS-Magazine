export type CategoryId =
  | 'ai-machine-learning'
  | 'web-development'
  | 'final-year-projects'
  | 'cloud-devops'
  | 'cybersecurity'
  | 'student-life';

export interface Author {
  id: string;
  name: string;
  title: string;
  role: 'Faculty Member' | 'Student Researcher' | 'BS CS Scholar' | 'Alumni Lead' | 'Chief Editor' | 'HOD & Associate Professor';
  initials: string;
  bio: string;
  department: string;
  batchOrDesignation?: string;
}

export interface CodeSnippet {
  language: string;
  filename?: string;
  code: string;
  highlightLines?: number[];
  description?: string;
}

export interface ArticleContentSection {
  type: 'paragraph' | 'heading-2' | 'heading-3' | 'code' | 'pull-quote' | 'callout' | 'list' | 'image-figure';
  text?: string;
  items?: string[];
  codeSnippet?: CodeSnippet;
  caption?: string;
  imageUrl?: string;
  authorQuote?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: CategoryId;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTimeMinutes: number;
  featured?: boolean;
  coverImage: string;
  coverImageAlt: string;
  sections: ArticleContentSection[];
  relatedSlugs: string[];
  stats: {
    views: number;
    saves: number;
    citations: number;
  };
}

export interface Category {
  id: CategoryId;
  slug: string;
  name: string;
  shortName: string;
  description: string;
}

export interface DepartmentNotice {
  id: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  urgent?: boolean;
}

export interface EditorialBoardMember {
  name: string;
  initials: string;
  role: string;
  academicTitle: string;
  specialization: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  initials: string;
  designation: string;
  roleTitle: string;
  department: string;
  focus: string;
  isHod?: boolean;
}
