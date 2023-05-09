import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import "../index.css";
import { IconContext } from "react-icons";

function PasswordInput(props: IPasswordInputProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        isRequired={props.required}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        // _placeholder={{ opacity: 1, color: "gray.500" }}
      />
      <InputRightElement width="3.5rem">
        <Button
          className="linkButton"
          h="1.75rem"
          size="lg"
          onClick={handleClick}
          backgroundColor={"transparent"}
          id={props.id}
          name={props.name}
          leftIcon={
            show ? (
              <IconContext.Provider
                value={{ className: "linkButton", color: "white" }}
              >
                <GrFormView />
              </IconContext.Provider>
            ) : (
              <GrFormViewHide color="white" />
            )
          }
        >
          {/* {show ? "Esconder" : "Exibir"} */}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
