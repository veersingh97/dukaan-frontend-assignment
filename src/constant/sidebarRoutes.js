import { GrHomeRounded } from "react-icons/gr";
import { LuClipboardList } from "react-icons/lu";
import { PiSquaresFour } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";
import { PiSpeakerHigh } from "react-icons/pi";
import { SiSimpleanalytics } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { MdOutlineColorLens } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

export const routes = [
  {
    id: "1",
    name: "Home",
    icon: <GrHomeRounded />,
  },
  {
    id: "2",
    name: "Orders",
    icon: <LuClipboardList />,
  },
  {
    id: "3",
    name: "Products",
    icon: <PiSquaresFour />,
  },
  {
    id: "4",
    name: "Delivery",
    icon: <BsTruck />,
  },
  {
    id: "5",
    name: "Marketing",
    icon: <PiSpeakerHigh />,
  },
  {
    id: "6",
    name: "Analytics",
    icon: <SiSimpleanalytics />,
  },
  {
    id: "7",
    name: "Payments",
    icon: <MdPayments />,
    active: true,
  },
  {
    id: "8",
    name: "Tools",
    icon: <CiLocationArrow1 />,
  },
  {
    id: "9",
    name: "Discounts",
    icon: <CiDiscount1 />,
  },
  {
    id: "10",
    name: "Audience",
    icon: <RiGroupLine />,
  },
  {
    id: "11",
    name: "Appearance",
    icon: <MdOutlineColorLens />,
  },
  {
    id: "12",
    name: "Plugins",
    icon: <AiOutlineThunderbolt />,
  },
];
