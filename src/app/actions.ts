type Article = {
  id: number;
  title: string;
};

export const getContents = async (): Promise<Article[]> => {
  "use server";
  const res = await fetch("http://localhost:3000/content/");
  if (res.status !== 200) {
    console.log("エラーが発生しました");
    throw new Error("エラーが発生しました");
  }
  const articleList = await res.json();
  return articleList;
};
