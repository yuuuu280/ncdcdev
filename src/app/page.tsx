import { redirect } from "next/navigation";
import { getContents } from "./actions";

export default async function Home() {
  let id;
  try {
    const articleList = await getContents();
    id = articleList[0].id;
  } catch (error) {
    console.error("データの取得中にエラーが発生しました:", error);
    throw new Error();
  }
  return redirect(`/${id}`);
}
