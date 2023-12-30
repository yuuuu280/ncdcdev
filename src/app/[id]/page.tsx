import ArticleSideber from "../components/ArticleSidebar";
import ArticleDetail from "../components/ArticleDetail";

export default async function Home({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="flex max-w-screen-2xl mx-auto">
        {/* @ts-expect-error Server Component */}
        <ArticleSideber id={params.id} />
        {/* @ts-expect-error Server Component */}
        <ArticleDetail id={params.id} />
      </div>
    </>
  );
}
