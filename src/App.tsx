import { useEffect, useState } from "react"
import { Layout } from "./components/Layout"
import { Pilares } from "./components/sections/Atuacao"
import { Hero } from "./components/sections/Hero"
import { Objetivo } from "./components/sections/Objetivo"
import { SobreNos } from "./components/sections/SobreNos"
import { Valores } from "./components/sections/Valores"
import { LoadingScreen } from './components/shared/LoadingScreen';


import heroImage from './assets/inicio.svg';
import navbarLogo from './assets/logos/logo_1.svg';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
        // Função que pré-carrega uma imagem e retorna uma Promise
        const preloadImage = (src: string) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;  // Resolve quando a imagem carregar
                img.onerror = reject; // Rejeita se der erro
            });
        };

        // Lista de imagens que *precisam* ser carregadas
        const imagesToPreload = [
            heroImage,
            navbarLogo
            // Adicione outras imagens críticas aqui
        ];

        // Usa Promise.all para esperar TODAS as imagens carregarem
        Promise.all(imagesToPreload.map(preloadImage))
            .then(() => {
                // Todas as imagens carregaram!
                // (Opcional) Espera um tempinho extra para a animação ficar bonita
                setTimeout(() => {
                    setIsLoading(false);
                }, 500); // Meio segundo de "respiro"
            })
            .catch((err) => {
                console.error("Falha ao pré-carregar imagens", err);
                setIsLoading(false); // Tira o loading mesmo se der erro
            });

    }, []); // O array vazio [] garante que isso rode só uma vez

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Layout title="CIC Quarta Colônia">
        <Hero />
        <SobreNos />
        <Pilares />
        <Valores />
        <Objetivo />
      </Layout>
    </>
  )
}

export default App
