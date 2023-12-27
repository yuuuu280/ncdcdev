import ArticleNavigation from './components/ArticleNavigation';
import ArticleDetail from './components/ArticleDetail';

export default function Home() {
  return (
    <>
      <div className="flex max-w-screen-2xl mx-auto">
        <ArticleNavigation />
        <ArticleDetail />
      </div>
    </>
  );
}
