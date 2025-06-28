import { AboutCard } from "./components/organisms/side/AboutCard";
import { CategoryCard } from "./components/organisms/side/CategoryCard";
import { ArticleList } from "./components/pages/ArticleList";

const Home = () => {
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList />
      </section>
      <aside className="w-full md:w-1/3 flex flex-col itemscenter px-3 md:pl-6 ">
        <AboutCard />
        <CategoryCard />
      </aside>
    </div>
  );
};
export default Home;
