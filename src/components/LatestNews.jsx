import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
          laboriosam blanditiis repudiandae reprehenderit molestiae iusto, sit
          dolorem magnam et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloribus explicabo dolor ipsam nihil, perferendis eaque id hic aperiam illo aliquid quaerat nesciunt vel, itaque provident dolorem? Facere, incidunt asperiores! Voluptas, deserunt impedit aperiam alias quos pariatur consequuntur. Adipisci maiores magnam facere alias totam! In cumque commodi praesentium labore dolores.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
