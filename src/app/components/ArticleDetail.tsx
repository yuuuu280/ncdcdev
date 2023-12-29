import { revalidatePath } from "next/cache";
import ArticleBody from "./ArticleBody";
import ArticleTitle from "./ArticleTitle";

type ArticleDetailProps = { id: string };

const ArticleDetail = async ({ id }: ArticleDetailProps) => {
  type Article = {
    id: number;
    title: string;
    body: string;
  };

  const res = await fetch(`http://localhost:3000/content/${id}`);
  if (res.status !== 200) {
    console.log("エラーが発生しました");
  }
  const article = (await res.json()) as Article;

  const changeContent = async (newTitle: string, newBody: string) => {
    "use server";

    try {
      await fetch(`http://localhost:3000/content/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, body: newBody }),
      });
      revalidatePath("/[id]", "layout");
      revalidatePath("/");
    } catch (error) {
      console.log("エラーが発生しました");
    }
  };

  return (
    <div className="mx-7 mt-5">
      <div className="flex p-7 rounded-lg bg-gray-100">
        <div>
          <ArticleTitle
            title={article.title}
            body={article.body}
            changeCallBack={changeContent}
          />
          <ArticleBody
            title={article.title}
            body={article.body}
            changeCallBack={changeContent}
          />
        </div>
      </div>
      <div className="flex justify-between my-5">
        <p>Copyright © 2021 Sample</p>
        <p>運営会社</p>
      </div>
    </div>
  );
};
export default ArticleDetail;
