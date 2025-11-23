/**
 * Root React component that renders a simple greeting.
 *
 * @returns A React fragment containing the text "Hello world".
 */
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);
  return <>Hello world</>;
}

export default App;