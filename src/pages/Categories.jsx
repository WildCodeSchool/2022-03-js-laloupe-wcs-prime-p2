import Category from "@components/Category";
import { Link } from "react-router-dom";

const genresData = [
  {
    id: 28,
    name: "Action",
    image:
      "https://www.programme-tv.net/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ftel.2F2019.2F04.2F19.2F3b0b6d2b-1cb3-4e9d-aa17-3c7774bd4411.2Ejpeg/1200x600/crop-from/top/quality/80/netflix-notre-top-10-des-meilleurs-films-d-action-disponibles-sur-la-plateforme-svod.jpg",
  },
  {
    id: 35,
    name: "Comedy",
    image:
      "https://i0.wp.com/cinedweller.com/wp-content/uploads/2020/05/le-diner-de-cons-cinedweller.jpg?resize=1040%2C550&ssl=1",
  },
  {
    id: 18,
    name: "Drama",
    image:
      "https://fr.web.img4.acsta.net/medias/nmedia/18/66/15/78/19254683.jpg",
  },
  {
    id: 878,
    name: "Sci-Fi",
    image:
      "https://ledrenche.ouest-france.fr/wp-content/uploads/interstellar-the-movie-475.jpg",
  },
  {
    id: 27,
    name: "Horror",
    image:
      "https://www.urban-fusions.fr/wp-content/uploads/2021/06/ca-le-realisateur-evoque-une-version-longue-avec-les-deux-filmsm-1.jpg",
  },
  {
    id: 16,
    name: "Animated",
    image: "https://commstudentako.files.wordpress.com/2015/08/wall-e.jpg",
  },
  {
    id: 99,
    name: "Documentary",
    image:
      "https://images.radio-canada.ca/q_auto,w_960/v1/ici-info/16x9/hold-up-documentaire.jpg",
  },
  {
    id: 53,
    name: "Thriller",
    image:
      "https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/8/2/5/0886978043528/tsp20120921091226/Black-swan.jpg",
  },
  {
    id: 10749,
    name: "Romance",
    image: "https://static1.refinery29.com/bin/entry/163/x,80/1166113/1.jpg",
  },
  {
    id: 36,
    name: "History/Biopics",
    image: "https://www.ballecourbe.ca/wp-content/uploads/2020/11/film-Ali.jpg",
  },
  {
    id: 10402,
    name: "Musical",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhGhgATiYQiSGVZ4XEg4HPgZW0n3pd0fAS3FtwvnTqcFR4yGuizi2kB5HDBfLovESgxc&usqp=CAU",
  },
];

function Categories() {
  return (
    <div>
      {genresData.map((genreInfos) => (
        <Link to={`/Categories/${genreInfos.id}`}>
          <Category
            key={genreInfos.id}
            id={genreInfos.id}
            name={genreInfos.name}
            image={genreInfos.image}
          />
        </Link>
      ))}
    </div>
  );
}

export default Categories;
