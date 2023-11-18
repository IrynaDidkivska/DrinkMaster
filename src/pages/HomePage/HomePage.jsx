import { HomeImage } from "./HomePage.styled";
import Image from "./img/Found.png";

const HomePage = () => {
  return (
    <>
      <h2>Craft Your Perfect Drink with Drink Master</h2>
      <div>
        Unlock your inner mixologist with Drink Master, your one-stop
        destination for exploring, crafting, and mastering the world's finest
        beverages.
      </div>
      <button>Add drink</button>
      <HomeImage src={Image} alt="Coctail's name" />
    </>
  );
};

export default HomePage;
