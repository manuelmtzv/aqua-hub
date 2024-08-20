export type Topic = {
  id: string;
  translations: TopicTranslation[];
  color: string;
  createdAt: string;
  updatedAt: string;
};

export type TopicTranslation = {
  code: string;
  title: string;
  description: string;
  enabled: boolean;
};
