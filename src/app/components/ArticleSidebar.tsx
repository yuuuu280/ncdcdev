import Image from "next/image";
import Link from "next/link";
import SideEditButton from "./SideEditButton";
import DeleteButton from "./DeleteButton";
import { revalidatePath } from "next/cache";

type ArticleNavigationProps = { id: string };

const ArticleNavigation = async ({ id }: ArticleNavigationProps) => {
  type Article = {
    id: number;
    title: string;
  };

  const res = await fetch("http://localhost:3000/content");
  if (res.status !== 200) {
    console.log("エラーが発生しました");
  }
  const articleList = (await res.json()) as Article[];

  const deleteArticle = async (id: string) => {
    "use server";

    try {
      await fetch(`http://localhost:3000/content/${id}`, {
        method: "DELETE",
      });
      revalidatePath("/[id]", "layout");
      revalidatePath("/");
    } catch (error) {
      console.log("エラーが発生しました");
    }
  };

  const createArticle = async () => {
    "use server";

    try {
      await fetch("http://localhost:3000/content/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "タイトル", body: "コンテンツ" }),
      });
      revalidatePath("/[id]", "layout");
      revalidatePath("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative h-screen w-72 pt-5 border-r">
      <div className="pl-10">
        <div className="flex">
          <Image
            src={"/logo.svg"}
            width={32}
            height={32}
            alt="logo"
            className="max-w-none"
          ></Image>
          <h1 className="ml-1 text-2xl font-bold">ServiceName</h1>
        </div>
        <nav className="mt-5">
          <ul className="text-base">
            {articleList.map((article, index) => (
              <li
                key={index}
                className={`flex justify-between p-2.5 ${
                  Number(id) == article.id &&
                  "rounded font-bold bg-gray-100 text-blue-500"
                } `}
              >
                <Link href={`/${article.id}`}>{article.title}</Link>
                <DeleteButton
                  articleId={article.id.toString()}
                  deleteCallBack={deleteArticle}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="absolute bottom-0 py-2.5 pl-10 w-full bg-gray-100">
        <SideEditButton newPageCallBack={createArticle} />
      </div>
    </div>
  );
};
export default ArticleNavigation;
