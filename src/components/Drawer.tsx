import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
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
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IUserData, setUser } from "../reducers/userReducer";

function ChakraDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let user: IUserData = {};

  const createUser = () => {
    dispatch(setUser(user));
    navigate("/home");
  };

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
                  <Input
                    id="username"
                    isRequired
                    placeholder="Nome Completo"
                    onChange={(e) => (user.fullName = e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="registration-email">Email</FormLabel>
                  <Input
                    id="email"
                    isRequired
                    placeholder="Ex.: exemplo@exemplo.com"
                    onChange={(e) => (user.email = e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="registration-cellphone">
                    Telefone
                  </FormLabel>
                  <Input
                    id="cellphone"
                    isRequired
                    placeholder="Ex.: (88) 9 1234-5678"
                    onChange={(e) => (user.phoneNumber = e.target.value)}
                  />
                </Box>

                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Box flexGrow={1}>
                    <FormLabel htmlFor="registration-city">Cidade</FormLabel>
                    <Input
                      id="city"
                      isRequired
                      placeholder="Ex.: Fortaleza"
                      onChange={(e) => (user.city = e.target.value)}
                    />
                  </Box>

                  <Box flexGrow={1}>
                    <FormLabel htmlFor="registration-address">
                      Endereço
                    </FormLabel>
                    <Input
                      id="address"
                      isRequired
                      placeholder="Ex.: Rua Joaquim Chagas Filho"
                      onChange={(e) => (user.address = e.target.value)}
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
            <Button colorScheme="blue" onClick={() => createUser()}>
              Cadastrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ChakraDrawer;
