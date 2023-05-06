import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/input";
import { Box, Stack } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import { GrAdd } from "react-icons/gr";
import PasswordInput from "./PasswordInput";

function ChakraDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button variant="link" onClick={onOpen} className="linkButton">
        Registre-se
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        //   initialFocusRef={firstField}
        onClose={onClose}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Criar uma conta</DrawerHeader>

          <DrawerBody>
            <form
              id="registerUserForm"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submitted");
              }}
            >
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="registration-username">Nome</FormLabel>
                  <Input id="username" isRequired placeholder="Nome Completo" />
                </Box>

                <Box>
                  <FormLabel htmlFor="registration-email">Email</FormLabel>
                  <Input
                    id="email"
                    isRequired
                    placeholder="Ex.: exemplo@exemplo.com"
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="registration-cellphone">
                    Telefone
                  </FormLabel>
                  <Input
                    id="email"
                    isRequired
                    placeholder="Ex.: (88) 9 1234-5678"
                  />
                </Box>

                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Box flexGrow={1}>
                    <FormLabel htmlFor="registration-city">Cidade</FormLabel>
                    <Input id="email" isRequired placeholder="Ex.: Fortaleza" />
                  </Box>

                  <Box flexGrow={1}>
                    <FormLabel htmlFor="registration-address">
                      Endereço
                    </FormLabel>
                    <Input
                      id="email"
                      isRequired
                      placeholder="Ex.: Rua Joaquim Chagas Filho"
                    />
                  </Box>
                </Stack>

                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Box flexGrow={1}>
                    <FormLabel htmlFor="registration-password">Senha</FormLabel>
                    <PasswordInput placeholder="Senha" />
                  </Box>

                  <Box flexGrow={1}>
                    <FormLabel htmlFor="registration-confirm-password">
                      Confirmar Senha
                    </FormLabel>
                    <PasswordInput placeholder="Confirmar Senha" />
                  </Box>
                </Stack>
              </Stack>
            </form>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue" type="submit" form="registerUserForm">
              Cadastrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ChakraDrawer;
