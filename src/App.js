import { useState } from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [selectedPetId, setSelectedPetId] = useState(0);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-mono">
        <Navbar />
        <Home />
        <PetList setPetId={setSelectedPetId} />
        <PetDetail petId={selectedPetId} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
