import { Layout } from "./components/Layout"
import { Pilares } from "./components/sections/Atuacao"
import { Hero } from "./components/sections/Hero"
import { Objetivo } from "./components/sections/Objetivo"
import { SobreNos } from "./components/sections/SobreNos"
import { Valores } from "./components/sections/Valores"


function App() {
  return (
    <Layout title="CIC Quarta Colônia">
      <Hero />
      <SobreNos />
      <Pilares />
      <Valores />
      <Objetivo />
    </Layout>
  )
}

export default App
