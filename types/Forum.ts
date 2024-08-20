export type Forum = {
  id: string;
  color: string;
  translations: ForumTranslation[];
  createdAt: string;
  updatedAt: string;
};

export type ForumTranslation = {
  code: string;
  title: string;
  description: string;
  enabled: boolean;
};
