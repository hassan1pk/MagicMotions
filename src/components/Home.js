import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import Latest from "./Latest";
import Exclusive from "./Exclusive";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs } from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const getMovies = async () => {
    let recommends = [];
    let latests = [];
    let exclusives = [];
    let trending = [];

    await getDocs(collection(db, "movies")).then((querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends.push({ id: doc.id, ...doc.data() });
            break;

          case "new":
            latests.push({ id: doc.id, ...doc.data() });
            break;

          case "original":
            exclusives.push({ id: doc.id, ...doc.data() });
            break;

          case "trending":
            trending.push({ id: doc.id, ...doc.data() });
            break;

          default:
            break;
        }

        return doc;
      });
    });

    dispatch(
      setMovies({
        recommend: recommends,
        latest: latests,
        exclusive: exclusives,
        trending: trending,
      })
    );
  };

  useEffect(() => {
    getMovies();
    /*let recommends = [];
    let latests = [];
    let exclusives = [];
    let trending = [];

    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends.push({ id: doc.id, ...doc.data() });
            break;

          case "new":
            latests.push({ id: doc.id, ...doc.data() });
            break;

          case "original":
            exclusives.push({ id: doc.id, ...doc.data() });
            break;

          case "trending":
            trending.push({ id: doc.id, ...doc.data() });
            break;

          default:
            break;
        }

        return doc;
      });
    });*/
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <Latest />
      <Exclusive />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
