import React from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import { AspectRatio, Box, Flex, Image } from "@chakra-ui/react";
import Manicure from "../../imagens/unha.png";
import Follow from "../../imagens/follow.png";
import "./Contato.css";

function Contato() {
  return (
    <div className="contato-container">
      <Header />
      <Flex>
            <Box w="80vw" m="2">
              <AspectRatio maxW= '100vw' ratio={90 / 30}>
                <Image src={Follow} />
              </AspectRatio>
            </Box>
        </Flex>
      <Flex className="contato-loc" justifyContent="center" alignItems="center" height="60vh" font-family= "Montserrat', sans-serif">
        <Flex  direction="column" align="center" gap="50px">
          <Flex>
            <Box className="img" w="40vw" m="2">
              <AspectRatio ratio={16 / 9}>
                <Image src={Manicure} />
              </AspectRatio>
            </Box>
            <Box className= "contate" w="45vw" h="100px" m="1" display="flex" flexDirection="column" justifyContent="center">
              <h2>CONTATE NOSSO SALÃO</h2>
              <h3> Entre em contato e marque um horário <br />(011)97481-0911</h3>
            </Box>
          </Flex>
          <Flex>
            <Box className="img" w="40vw" m="2" >
              <AspectRatio ratio={16 / 9}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
              </AspectRatio>
            </Box>
            <Box className="localizacao" w="45vw" h="100px" m="1"  display="flex" flexDirection="column" justifyContent="center">
              <h2>LOCALIZAÇÃO</h2>
              <h3> Rua Brenardino de Sena, 107 <br />Casa Verde - SP</h3>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </div>
  );
}
export default Contato;
