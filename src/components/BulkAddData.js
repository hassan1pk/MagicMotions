import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const handleAddDataClick = async () => {
  /*let docRef = await addDoc(collection(db, "movies"), {
    backgroundImg:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09A0617D43282F1A4FA1A97DF6159B4263A8DEB9679A007B61D5E5D6E5D0A2DD/scale?width=1440&aspectRatio=1.78&format=jpeg",
    cardImg:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg",
    description:
      "Watch with Premier Access at the same time it's in open theaters and before it's available to all Disney+ subscribers on June 4, 2021.",
    subTitle: "2021 • 1h 52m • Family, Fantasy, Animation, Action-Adventure",
    title: "Raya",
    titleImg:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7D8EFFDD30B2A0E205DDD9929207439B21E7595709769F2A23C50457664FFB2/scale?width=1440&aspectRatio=1.78",
    type: "new",
  });
  console.log("Document written with ID: ", docRef.id);*/
};

const BulkAddData = (props) => {
  return (
    <button
      style={{ marginTop: "100px" }}
      onClick={handleAddDataClick}
      value={"Add data"}
    >
      Add Data
    </button>
  );
};

export default BulkAddData;
