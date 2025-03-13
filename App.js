import { View, Text,Image} from "react-native";
function App() {
  return(
    <View> 
      <Logo/>
  <Titulo/> 
  <Conteudo/>

  </View>
  )
}
export default App;
function Logo() {
  return(
    <View>
      <Image 
  source={require('./assets/Lobo.png')}
  style={{
    width: 50,
    height: 50
  }}
/>


    </View>
  )
} 
function Titulo() {
  let title 
  return(
    <View>
<Text style={{ marginTop: 50,fontSize: 30, fontWeight: 'bold',color: 'gray', padding: 10}}>AAAAAAAAAH Titulão Grandão </Text>
    </View>
  )
} 

function Conteudo() {
  return(
    <View>
<Text style={{fontSize: 30, fontWeight: 'bold',color: 'gray', padding: 10}}>Aquele que habita no esconderijo do autissimo e descansa a sombra do onipotente diz ao senhor. Meu refugio </Text>
    </View>
  )
} 