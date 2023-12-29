"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default async function Home() {
  type Article = {
    id: number;
  };

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/content/");
        if (res.status !== 200) {
          console.log("エラーが発生しました");
          return;
        }
        const articleList = await res.json();
        router.push(`/${articleList[0].id}`);
      } catch (error) {
        console.error("データの取得中にエラーが発生しました:", error);
      }
    };
    fetchData();
  }, []);
  return <></>;
}
