import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  // console.log(data, id, news);

  useEffect(() => {
    const NewsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(NewsDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 py-10 gap-10">
        <section className="col-span-9">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
