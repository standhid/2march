import React from "react";

const artworks = [
  { title: "Ancient Vase", img: "https://via.placeholder.com/200", period: "Greek" },
  { title: "Medieval Sword", img: "https://via.placeholder.com/200", period: "Medieval" },
  { title: "Oil Portrait", img: "https://via.placeholder.com/200", period: "18th Century" },
];

const CollectionPreview = () => (
  <section className="collection">
    <h3>Featured Artworks</h3>
    <div className="art-grid">
      {artworks.map((art, i) => (
        <div key={i} className="art-card">
          <img src={art.img} alt={art.title} />
          <h4>{art.title}</h4>
          <p>{art.period}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CollectionPreview;
