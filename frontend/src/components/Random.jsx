// import { useState } from "react";
// import DisplayComponent from "./DisplayComponent";
// import axios from "axios";

// function randomMovie(list) {
//   return list[Math.floor(Math.random() * list.length)];
// }
// list([28, 35, 878, 16, 99, 53, 10402, 36]);

// const RandomMovie = () => {
//   const [getRandom, setRandom] = useState();
//   const randomizer = (list) => {
//     axios
//       // Appel de l'api avec un url dynamique
//       .get(
//         `https://api.themoviedb.org/3/discover/movie?api_key=442e533a3f611fdf2ce32b99e46a8d6b&with_genres=${list}`
//       )

//       // suite d'appel normal axios
//       .then((res) => {
//         return res.data;
//       })
//       // On actualise le state avec les nouvelles valeurs récupérés
//       .then((data) => {
//         setRandom(data.results);
//         console.log(data.results);
//       });
//   };
//   useEffect(() => {
//     randomizer(list);
//   }, []);
//   return (
//     <div>
//       {getRandom.map((rando) => (
//         <DisplayComponent key={rando} />
//       ))}
//     </div>
//   );
// };

// export default RandomMovie;
