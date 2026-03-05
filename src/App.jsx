import CardList from "./components/CardList.jsx";
import { people } from "./data/people.js";
function App() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">ID Card Generator</h1>
      <p className="text-gray-600 mb-6">Simple employee ID cards using React props.</p>
      <CardList people={people} />
    </main>
  );
}

export default App;
