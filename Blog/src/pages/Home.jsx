import Card from "../components/Card";

export default function Home() {
  const articles = [
    {
      image:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/544c5374609d46cc8d4baf33010cd714_9366/always-original-trench-coat.jpg",
      title: "Adidas Trench Coat",
    },
    {
      image:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/169fa60ea6084bf4b5b7af4000e79e82_9366/ultraboost-1.0.jpg",
      title: "Ultraboost shoes",
    },
    {
      image:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/42eb5b497c0545fda889af5e014faf9b_faec/adidas-basketball-hoodie.jpg",
      title: "Adidas Basketball Hoodie",
    },
    {
      image:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/13e456c9145d455e8d3daf4600e4e767_9366/puremotion-2.0-shoes.jpg",
      title: "Adidas Puremotion 2.0 shoes",
    },
  ];
  return (
    <main>
      <div className="container">
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-3 col-sm-6 col-12" key={index}>
              <Card title={article.title} image={article.image} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
