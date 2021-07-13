import { Title, SubTitle, Text } from '../components/TextComponents'
// import ImageContainer from '../components/Image'
// import Praia from '../assets/imgs/praia.jpg'
import Calculadora from '../assets/imgs/calc.png'
import ProjectContainer from '../components/ProjectContainer'


export default function Projetos() {
  return (
    <>
      <Title>Projetos</Title>
      <SubTitle>Nunc velit eros, lacinia nec leo</SubTitle>
      <Text>
        Nullam vehicula porta odio sed maximus. Phasellus gravida rutrum leo, et consequat urna. Sed efficitur, magna sed cursus condimentum, lacus nunc suscipit leo, a dapibus ante orci id erat. Nunc velit eros, lacinia nec leo eget, varius blandit ligula. Fusce ex elit, pellentesque vitae augue sit amet, consequat volutpat libero. Nulla semper cursus fringilla. Suspendisse lobortis rhoncus tortor, sit amet ultrices est tincidunt at. Aenean scelerisque elit at dignissim luctus. Donec euismod, nisi vel auctor tincidunt, ante ipsum blandit orci, dignissim vehicula velit urna vitae metus. Vestibulum tortor metus, sagittis at fermentum at, pellentesque eget mauris.
      </Text>
      <Text>
      Phasellus gravida rutrum leo, et consequat urna. Sed efficitur, magna sed cursus condimentum, lacus nunc suscipit leo, a dapibus ante orci id erat. Nunc velit eros, lacinia nec leo eget, varius blandit ligula. Fusce ex elit, pellentesque vitae augue sit amet, consequat volutpat libero. Nulla semper cursus fringilla. Suspendisse lobortis rhoncus tortor, sit amet ultrices est tincidunt at.
      </Text>
      <ProjectContainer 
      title="Calculadora" 
      info="Projeto simples que reutiliza vários de seus componentes react" 
      footer="React Native e Styled Components"
      src={Calculadora}
      alt="Calculadora"
      githublink="/"
      />
    </>
  )
}