import Cards from "./components/Cards";
import Data from "./data";
import Header from "./components/Header";
function App() {
  // const cards = Data.map((item) => {
  //   return <Cards key={item.id} {...item} />;
  // });
  const cards = Data.map((item) => <Cards key={item.id} {...item} />);
  return (
    <>
      <Header />
      {cards}
    </>
  );
}

export default App;
