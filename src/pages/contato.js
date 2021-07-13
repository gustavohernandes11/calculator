import { Title, Text } from '../components/TextComponents'
import ContactContainer from '../components/ContactContainer'
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { SiGmail, SiDiscord } from 'react-icons/si'

export default function Contato() {
    return (
        <>
    <Title>Contato</Title>
    <div className="contaccontainer">
    <ContactContainer icon={<FaWhatsapp/>} content={'zap zap zap'} />
    <ContactContainer icon={<SiGmail/>} content={'gustavo.hernandes.s11@gmail.com'} />
    <ContactContainer icon={<SiDiscord/>} content={'=3'} />
    <ContactContainer icon={<FaTelegramPlane/>} content={'tem nao po kkk'} />


    </div>
    
    <Text>Phasellus gravida rutrum leo, et consequat urna. Sed efficitur, magna sed cursus condimentum, lacus nunc suscipit leo, a dapibus ante orci id erat. Nunc velit eros, lacinia nec leo eget, varius blandit ligula. Fusce ex elit, pellentesque vitae augue sit amet, consequat volutpat libero. Nulla semper cursus fringilla. Suspendisse lobortis rhoncus tortor, sit amet ultrices est tincidunt at. Aenean scelerisque elit at dignissim luctus. Donec euismod, nisi vel auctor tincidunt, ante ipsum blandit orci, dignissim vehicula velit urna vitae metus.
    </Text>
    </>
    )
}