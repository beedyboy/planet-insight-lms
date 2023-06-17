import AlertStyles from "./alertStyles";
import Button from "./buttonStyles";
import Heading from "./headingStyles";
import InputStyles from "./inputStyles";
import LinkStyles from "./linkStyles";
import ModalStyles from "./modalStyles";

export const customComponents = {
  Button,
  Heading,
  LinkStyles,
  ModalStyles,
  AlertStyles,
  InputStyles,
}

export type CustomComponentType = typeof customComponents;

export default customComponents;