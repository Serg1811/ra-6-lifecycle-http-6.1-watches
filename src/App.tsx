import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import WatchesList from './components/WatchesList';
import AddWatchForm from './components/AddWatchForm';
import initialWatches from  './data/initialWatches.json'
import WatchName from './type/WatchName';

function App() {

    const [watches, setWatches] = useState(initialWatches);

    const addWatch = (watch: WatchName) => {
        setWatches([...watches, { ...watch }]);
    };

    const handleRemoveWatch = (id: string) => {
        setWatches(watches.filter((item) => item.id !== id));
    };

    return (
        <Container>
            <AddWatchForm onAddWatch={addWatch} />
            <WatchesList watches={watches} onRemoveWatch={handleRemoveWatch} />
  
        </Container>
    )
}

export default App;
