interface ProjectType {
  _id: string;
  title: string;
  description: string;
  previewImage: string;
  previewUrl: string | undefined;
  sourceUrl: string | undefined;
}

export { ProjectType };
