import ArticleSideber from "../components/ArticleSidebar";
import ArticleDetail from "../components/ArticleDetail";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="flex max-w-screen-2xl mx-auto">
        <ArticleSideber id={params.id} />
        <ArticleDetail id={params.id} />
      </div>
    </>
  );
}
