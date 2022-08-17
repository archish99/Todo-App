import { ImageSourcePropType } from "react-native";
import IllustrationOne from "../../../assets/images/Illustration-one.png";
import IllustrationTwo from "../../../assets/images/Illustration-two.png";
import IllustrationThree from "../../../assets/images/Illustration-three.png";

export interface dataType {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export default [
  {
    id: "1",
    title: "Stay productive everyday",
    description: "Ability to connect reminders, set of competent schedule",
    image: IllustrationOne,
  },
  {
    id: "2",
    title: "Never miss a task",
    description: "Always stay ahead of your tasks",
    image: IllustrationTwo,
  },
  {
    id: "3",
    title: "Keep everything organized",
    description: "Everything in one place",
    image: IllustrationThree,
  },
];
