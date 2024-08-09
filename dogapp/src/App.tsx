import { Container, Description } from "./styles/styled"


const App = () => {
  return (
    <Container>
   <Description>
    <ul>
      This is a Dog App created with react js, using the Dog API.
      The app uses:
      <li>React js && Typescript</li>
      <li>Redux for state management</li>
      <li>Axios for fetching data</li>
      <li>Styled components</li>
      <li>Unit tests with jest and React Testing Library</li>
    </ul>

   </Description>
    </Container>
  )
}

export default App