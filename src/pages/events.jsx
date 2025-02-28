/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

import eventOne1 from "@/assets/events/16Sept2024/img1.jpg";
import eventOne2 from "@/assets/events/16Sept2024/img2.jpg";
import eventOne3 from "@/assets/events/16Sept2024/img3.jpg";
import eventOne4 from "@/assets/events/16Sept2024/img4.jpg";
import eventTwo1 from "@/assets/events/13Sept2024/img1.jpg";
import eventTwo2 from "@/assets/events/13Sept2024/img2.jpg";
import eventTwo3 from "@/assets/events/13Sept2024/img3.jpg";
import eventThree1 from "@/assets/events/10Sept2024/img1.jpg";
import eventThree2 from "@/assets/events/10Sept2024/img2.jpg";
import eventThree3 from "@/assets/events/10Sept2024/img3.jpg";
import eventThree4 from "@/assets/events/10Sept2024/img4.jpg";
import eventThree5 from "@/assets/events/10Sept2024/img5.jpg";
import eventThree6 from "@/assets/events/10Sept2024/img6.jpg";
import eventThree7 from "@/assets/events/10Sept2024/img7.jpg";
import eventFour1 from "@/assets/events/8Spet2024/img1.jpg";
import eventFour2 from "@/assets/events/8Spet2024/img2.jpg";
import eventFour3 from "@/assets/events/8Spet2024/img3.jpg";
import eventFour4 from "@/assets/events/8Spet2024/img4.jpg";
import eventFive1 from "@/assets/events/5Spet2024/img1.jpg";
import eventFive2 from "@/assets/events/5Spet2024/img2.jpg";
import eventFive3 from "@/assets/events/5Spet2024/img3.jpg";
import eventFive4 from "@/assets/events/5Spet2024/img4.jpg";
import eventFive5 from "@/assets/events/5Spet2024/img5.jpg";
import eventFive6 from "@/assets/events/5Spet2024/img6.jpg";
import eventFive7 from "@/assets/events/5Spet2024/img7.jpg";
import eventFive8 from "@/assets/events/5Spet2024/img8.jpg";
import eventSix1 from "@/assets/events/29Aug2024/img1.jpg";
import eventSix2 from "@/assets/events/29Aug2024/img2.jpg";
import eventSix3 from "@/assets/events/29Aug2024/img3.jpg";
import eventSix4 from "@/assets/events/29Aug2024/img4.jpg";
import eventSeven1 from "@/assets/events/29Aug2024_2/img1.jpg";
import eventSeven2 from "@/assets/events/29Aug2024_2/img2.jpg";
import eventSeven3 from "@/assets/events/29Aug2024_2/img3.jpg";
import eventSeven4 from "@/assets/events/29Aug2024_2/img4.jpg";
import eventSeven5 from "@/assets/events/29Aug2024_2/img5.jpg";
import eventEight1 from "@/assets/events/28Aug2024/img1.jpg";
import eventEight2 from "@/assets/events/28Aug2024/img2.jpg";
import eventEight3 from "@/assets/events/28Aug2024/img3.jpg";
import eventEight4 from "@/assets/events/28Aug2024/img4.jpg";
import eventEight5 from "@/assets/events/28Aug2024/img5.jpg";
import eventEight6 from "@/assets/events/28Aug2024/img6.jpg";
import eventEight7 from "@/assets/events/28Aug2024/img7.jpg";
import eventNine1 from "@/assets/events/15Aug2024/img1.jpg";
import eventNine2 from "@/assets/events/15Aug2024/img2.jpg";
import eventNine3 from "@/assets/events/15Aug2024/img3.jpg";
import eventNine4 from "@/assets/events/15Aug2024/img4.jpg";
import eventNine5 from "@/assets/events/15Aug2024/img5.jpg";
import eventNine6 from "@/assets/events/15Aug2024/img6.jpg";
import eventTen1 from "@/assets/events/10Aug2024/img1.jpg";
import eventTen2 from "@/assets/events/10Aug2024/img2.jpg";
import eventTen3 from "@/assets/events/10Aug2024/img3.jpg";
import eventTen4 from "@/assets/events/10Aug2024/img4.jpg";
import eventEleven1 from "@/assets/events/2Aug2024/img1.jpg";
import eventEleven2 from "@/assets/events/2Aug2024/img2.jpg";
import eventEleven3 from "@/assets/events/2Aug2024/img3.jpg";
import eventEleven4 from "@/assets/events/2Aug2024/img4.jpg";
import eventTwelve1 from "@/assets/events/30Jul2024/img1.jpg";
import eventTwelve2 from "@/assets/events/30Jul2024/img2.jpg";
import eventTwelve3 from "@/assets/events/30Jul2024/img3.jpg";
import eventTwelve4 from "@/assets/events/30Jul2024/img4.jpg";
import eventTwelve5 from "@/assets/events/30Jul2024/img5.jpg";
import eventThirteen1 from "@/assets/events/29Jul2024/img1.jpg";
import eventThirteen2 from "@/assets/events/29Jul2024/img2.jpg";
import eventThirteen3 from "@/assets/events/29Jul2024/img3.jpg";
import eventThirteen4 from "@/assets/events/29Jul2024/img4.jpg";
import eventFourteen1 from "@/assets/events/29July2024/img1.jpg";
import eventFourteen2 from "@/assets/events/29July2024/img2.jpg";
import eventFourteen3 from "@/assets/events/29July2024/img3.jpg";
import eventFourteen4 from "@/assets/events/29July2024/img4.jpg";
import eventFifteen1 from "@/assets/events/26Jul2024/img1.jpg";
import eventFifteen2 from "@/assets/events/26Jul2024/img2.jpg";
import eventFifteen3 from "@/assets/events/26Jul2024/img3.jpg";
import eventFifteen4 from "@/assets/events/26Jul2024/img4.jpg";
import eventSixteen1 from "@/assets/events/24Jul2024/img1.jpg";
import eventSixteen2 from "@/assets/events/24Jul2024/img2.jpg";
import eventSixteen3 from "@/assets/events/24Jul2024/img3.jpg";
import eventSixteen4 from "@/assets/events/24Jul2024/img4.jpg";
import eventSeventeen1 from "@/assets/events/19Jul2024/img1.jpg";
import eventSeventeen2 from "@/assets/events/19Jul2024/img2.jpg";
import eventSeventeen3 from "@/assets/events/19Jul2024/img3.jpg";
import eventSeventeen4 from "@/assets/events/19Jul2024/img4.jpg";
import eventEighteen1 from "@/assets/events/9Jul2024/img1.jpg";
import eventEighteen2 from "@/assets/events/9Jul2024/img2.jpg";
import eventEighteen3 from "@/assets/events/9Jul2024/img3.jpg";
import eventNineteen1 from "@/assets/events/8Jul2024/img1.jpg";
import eventNineteen2 from "@/assets/events/8Jul2024/img2.jpg";
import eventNineteen3 from "@/assets/events/8Jul2024/img3.jpg";
import eventNineteen4 from "@/assets/events/8Jul2024/img4.jpg";
import eventNineteen5 from "@/assets/events/8Jul2024/img5.jpg";
import eventTwenty1 from "@/assets/events/5Jul2024/img1.jpg";
import eventTwenty2 from "@/assets/events/5Jul2024/img2.jpg";
import eventTwenty3 from "@/assets/events/5Jul2024/img3.jpg";
import eventTwenty4 from "@/assets/events/5Jul2024/img4.jpg";
import eventTwenty5 from "@/assets/events/5Jul2024/img5.jpg";
import eventTwentyOne1 from "@/assets/events/27Jun2024/img1.jpg";
import eventTwentyOne2 from "@/assets/events/27Jun2024/img2.jpg";
import eventTwentyOne3 from "@/assets/events/27Jun2024/img3.jpg";
import eventTwentyOne4 from "@/assets/events/27Jun2024/img4.jpg";
import eventTwentyOne5 from "@/assets/events/27Jun2024/img5.jpg";
import eventTwentyTwo1 from "@/assets/events/21Jun2024/img1.jpg";
import eventTwentyTwo2 from "@/assets/events/21Jun2024/img2.jpg";
import eventTwentyTwo3 from "@/assets/events/21Jun2024/img3.jpg";
import eventTwentyTwo4 from "@/assets/events/21Jun2024/img4.jpg";
import eventTwentyTwo5 from "@/assets/events/21Jun2024/img5.jpg";
import eventTwentyThree1 from "@/assets/events/3Jun2024/img1.jpg";
import eventTwentyThree2 from "@/assets/events/3Jun2024/img2.jpg";
import eventTwentyThree3 from "@/assets/events/3Jun2024/img3.jpg";
import eventTwentyThree4 from "@/assets/events/3Jun2024/img4.jpg";
import eventTwentyFour1 from "@/assets/events/20May2024/img1.jpg";
import eventTwentyFour2 from "@/assets/events/20May2024/img2.jpg";
import eventTwentyFour3 from "@/assets/events/20May2024/img3.jpg";
import eventTwentyFour4 from "@/assets/events/20May2024/img4.jpg";
import eventTwentyFour5 from "@/assets/events/20May2024/img5.jpg";
import eventTwentyFive1 from "@/assets/events/18May2024/img1.jpg";
import eventTwentyFive2 from "@/assets/events/18May2024/img2.jpg";
import eventTwentyFive3 from "@/assets/events/18May2024/img3.jpg";
import eventTwentyFive4 from "@/assets/events/18May2024/img4.jpg";
import eventTwentyFive5 from "@/assets/events/18May2024/img5.jpg";
import eventTwentySix1 from "@/assets/events/17May2024/img1.jpg";
import eventTwentySix2 from "@/assets/events/17May2024/img2.jpg";
import eventTwentySix3 from "@/assets/events/17May2024/img3.jpg";
import eventTwentySix4 from "@/assets/events/17May2024/img4.jpg";
import eventTwentySix5 from "@/assets/events/17May2024/img5.jpg";

import eventTwentySeven1 from "@/assets/events/Nov2024/img1.jpg";
import eventTwentySeven2 from "@/assets/events/Nov2024/img2.jpg";
import eventTwentySeven3 from "@/assets/events/Nov2024/img3.jpg";
import eventTwentySeven4 from "@/assets/events/Nov2024/img4.jpg";

import eventTwentyEight1 from "@/assets/events/29Nov2024/img1.jpg";
import eventTwentyEight2 from "@/assets/events/29Nov2024/img2.jpg";
import eventTwentyEight3 from "@/assets/events/29Nov2024/img3.jpg";
import eventTwentyEight4 from "@/assets/events/29Nov2024/img4.jpg";
import eventTwentyEight5 from "@/assets/events/29Nov2024/img5.jpg";

import eventTwentyNine1 from "@/assets/events/4Dec2024/img1.jpg";
import eventTwentyNine2 from "@/assets/events/4Dec2024/img2.jpg";
import eventTwentyNine3 from "@/assets/events/4Dec2024/img3.jpg";
import eventTwentyNine4 from "@/assets/events/4Dec2024/img4.jpg";

import eventThirty1 from "@/assets/events/5Dec2024/img1.jpg";
import eventThirty2 from "@/assets/events/5Dec2024/img2.jpg";
import eventThirty3 from "@/assets/events/5Dec2024/img3.jpg";
import eventThirty4 from "@/assets/events/5Dec2024/img4.jpg";
import eventThirty5 from "@/assets/events/5Dec2024/img5.jpg";

import eventThirtyOne1 from "@/assets/events/10_11thDec2024/img1.JPG";
import eventThirtyOne2 from "@/assets/events/10_11thDec2024/img2.JPG";
import eventThirtyOne3 from "@/assets/events/10_11thDec2024/img3.JPG";
import eventThirtyOne4 from "@/assets/events/10_11thDec2024/img4.JPG";
import eventThirtyOne5 from "@/assets/events/10_11thDec2024/img5.JPG";
import eventThirtyOne6 from "@/assets/events/10_11thDec2024/img6.JPG";
import eventThirtyOne7 from "@/assets/events/10_11thDec2024/img7.JPG";
import eventThirtyOne8 from "@/assets/events/10_11thDec2024/img8.JPG";
import eventThirtyOne9 from "@/assets/events/10_11thDec2024/img9.JPG";
import eventThirtyOne10 from "@/assets/events/10_11thDec2024/img10.JPG";
import eventThirtyOne11 from "@/assets/events/10_11thDec2024/img11.JPG";
import eventThirtyOne12 from "@/assets/events/10_11thDec2024/img12.JPG";
import eventThirtyOne13 from "@/assets/events/10_11thDec2024/img13.JPG";
import eventThirtyOne14 from "@/assets/events/10_11thDec2024/img14.JPG";
import eventThirtyOne15 from "@/assets/events/10_11thDec2024/img15.JPG";

import eventThirtyTwo1 from "@/assets/events/19Dec2024/img1.jpg";
import eventThirtyTwo2 from "@/assets/events/19Dec2024/img2.jpg";
import eventThirtyTwo3 from "@/assets/events/19Dec2024/img3.jpg";
import eventThirtyTwo4 from "@/assets/events/19Dec2024/img4.jpg";
import eventThirtyTwo5 from "@/assets/events/19Dec2024/img5.jpg";
import eventThirtyTwo6 from "@/assets/events/19Dec2024/img6.jpg";
import eventThirtyTwo7 from "@/assets/events/19Dec2024/img7.jpg";

import eventThirtyThree1 from "@/assets/events/23Dec2024/img1.jpg";
import eventThirtyThree2 from "@/assets/events/23Dec2024/img2.jpg";
import eventThirtyThree3 from "@/assets/events/23Dec2024/img3.jpg";
import eventThirtyThree4 from "@/assets/events/23Dec2024/img4.jpg";
import eventThirtyThree5 from "@/assets/events/23Dec2024/img5.jpg";

import eventThirtyFour1 from "@/assets/events/8Jan2025/img1.jpg";
import eventThirtyFour2 from "@/assets/events/8Jan2025/img2.jpg";
import eventThirtyFour3 from "@/assets/events/8Jan2025/img3.jpg";
import eventThirtyFour4 from "@/assets/events/8Jan2025/img4.jpg";
import eventThirtyFour5 from "@/assets/events/8Jan2025/img5.jpg";
import eventThirtyFour6 from "@/assets/events/8Jan2025/img6.jpg";
import eventThirtyFour7 from "@/assets/events/8Jan2025/img7.jpg";

import eventThirtyFive1 from "@/assets/events/11Jan2025/img1.jpg";
import eventThirtyFive2 from "@/assets/events/11Jan2025/img2.jpg";
import eventThirtyFive3 from "@/assets/events/11Jan2025/img3.jpg";
import eventThirtyFive4 from "@/assets/events/11Jan2025/img4.jpg";
import eventThirtyFive5 from "@/assets/events/11Jan2025/img5.jpg";
import eventThirtyFive6 from "@/assets/events/11Jan2025/img6.jpg";

import eventThirtySix1 from "@/assets/events/25Jan2025/img1.jpg";
import eventThirtySix2 from "@/assets/events/25Jan2025/img2.jpg";
import eventThirtySix3 from "@/assets/events/25Jan2025/img3.jpg";
import eventThirtySix4 from "@/assets/events/25Jan2025/img4.jpg";
import eventThirtySix5 from "@/assets/events/25Jan2025/img5.jpg";
import eventThirtySix6 from "@/assets/events/25Jan2025/img6.jpg";

import eventThirtySeven1 from "@/assets/events/30Jan2025/img1.jpg";
import eventThirtySeven2 from "@/assets/events/30Jan2025/img2.jpg";
import eventThirtySeven3 from "@/assets/events/30Jan2025/img3.jpg";
import eventThirtySeven4 from "@/assets/events/30Jan2025/img4.jpg";
import eventThirtySeven5 from "@/assets/events/30Jan2025/img5.jpg";
import eventThirtySeven6 from "@/assets/events/30Jan2025/img6.jpg";
import eventThirtySeven7 from "@/assets/events/30Jan2025/img7.jpg";

import eventThirtyEight1 from "@/assets/events/3May2024/img1.jpg";
import eventThirtyEight2 from "@/assets/events/3May2024/img2.jpg";
import eventThirtyEight3 from "@/assets/events/3May2024/img3.jpg";
import eventThirtyEight4 from "@/assets/events/3May2024/img4.jpg";
import eventThirtyEight5 from "@/assets/events/3May2024/img5.jpg";

import eventThirtyNine1 from "@/assets/events/28Apr2024/img1.jpg";
import eventThirtyNine2 from "@/assets/events/28Apr2024/img2.jpg";
import eventThirtyNine3 from "@/assets/events/28Apr2024/img3.jpg";
import eventThirtyNine4 from "@/assets/events/28Apr2024/img4.jpg";    

import eventForty1 from "@/assets/events/26Apr2024/img1.jpg";
import eventForty2 from "@/assets/events/26Apr2024/img2.jpg";
import eventForty3 from "@/assets/events/26Apr2024/img3.jpg";
import eventForty4 from "@/assets/events/26Apr2024/img4.jpg";

import eventFortyFive1 from "@/assets/events/23Apr2024/img1.jpg";
import eventFortyFive2 from "@/assets/events/23Apr2024/img2.jpg";
import eventFortyFive3 from "@/assets/events/23Apr2024/img3.jpg";
import eventFortyFive4 from "@/assets/events/23Apr2024/img4.jpg";
import eventFortyFive5 from "@/assets/events/23Apr2024/img5.jpg";
import eventFortyFive6 from "@/assets/events/23Apr2024/img6.jpg";

import eventFortySix1 from "@/assets/events/12Apr2024/img1.jpg";
import eventFortySix2 from "@/assets/events/12Apr2024/img2.jpg";
import eventFortySix3 from "@/assets/events/12Apr2024/img3.jpg";
import eventFortySix4 from "@/assets/events/12Apr2024/img4.jpg";
import eventFortySix5 from "@/assets/events/12Apr2024/img5.jpg";

import eventFortySeven1 from "@/assets/events/23Feb2024/img1.jpg";
import eventFortySeven2 from "@/assets/events/23Feb2024/img2.jpg";
import eventFortySeven3 from "@/assets/events/23Feb2024/img3.jpg";
import eventFortySeven4 from "@/assets/events/23Feb2024/img4.jpg";
import eventFortySeven5 from "@/assets/events/23Feb2024/img5.jpg";

import eventFortyEight1 from "@/assets/events/10Feb2024/img1.jpg";
import eventFortyEight2 from "@/assets/events/10Feb2024/img2.jpg";
import eventFortyEight3 from "@/assets/events/10Feb2024/img3.jpg";
import eventFortyEight4 from "@/assets/events/10Feb2024/img4.jpg";
import eventFortyEight5 from "@/assets/events/10Feb2024/img5.jpg";
import eventFortyEight6 from "@/assets/events/10Feb2024/img6.jpg";
import eventFortyEight7 from "@/assets/events/10Feb2024/img7.jpg";
import eventFortyEight8 from "@/assets/events/10Feb2024/img8.jpg";
import eventFortyEight9 from "@/assets/events/10Feb2024/img9.jpg";

import eventFortyNine1 from "@/assets/events/9Feb2024/img1.jpg";
import eventFortyNine2 from "@/assets/events/9Feb2024/img2.jpg";
import eventFortyNine3 from "@/assets/events/9Feb2024/img3.jpg";
import eventFortyNine4 from "@/assets/events/9Feb2024/img4.jpg";
import eventFortyNine5 from "@/assets/events/9Feb2024/img5.jpg";
import eventFortyNine6 from "@/assets/events/9Feb2024/img6.jpg";
import eventFortyNine7 from "@/assets/events/9Feb2024/img7.jpg";
import eventFortyNine8 from "@/assets/events/9Feb2024/img8.jpg";
import eventFortyNine9 from "@/assets/events/9Feb2024/img9.jpg";

import eventFifty1 from "@/assets/events/24Jan2024/img1.jpg";
import eventFifty2 from "@/assets/events/24Jan2024/img2.jpg";
import eventFifty3 from "@/assets/events/24Jan2024/img3.jpg";
import eventFifty4 from "@/assets/events/24Jan2024/img4.jpg";

import eventFiftyFive1 from "@/assets/events/Award/img1.jpg";

import eventFiftySix1 from "@/assets/events/23Jan2024/img1.jpg";
import eventFiftySix2 from "@/assets/events/23Jan2024/img2.jpg";

import eventFiftySeven1 from "@/assets/events/SportsDay/img1.jpg";
import eventFiftySeven2 from "@/assets/events/SportsDay/img2.jpg";
import eventFiftySeven3 from "@/assets/events/SportsDay/img3.jpg";
import eventFiftySeven4 from "@/assets/events/SportsDay/img4.jpg";
import eventFiftySeven5 from "@/assets/events/SportsDay/img5.jpg";
import eventFiftySeven6 from "@/assets/events/SportsDay/img6.jpg";
import eventFiftySeven7 from "@/assets/events/SportsDay/img7.jpg";
import eventFiftySeven8 from "@/assets/events/SportsDay/img8.jpg";
import eventFiftySeven9 from "@/assets/events/SportsDay/img9.jpg";
import eventFiftySeven10 from "@/assets/events/SportsDay/img10.jpg";
import eventFiftySeven11 from "@/assets/events/SportsDay/img11.jpg";
import eventFiftySeven12 from "@/assets/events/SportsDay/img12.jpg";

import eventFiftyEight1 from "@/assets/events/25Nov2023/img1.jpg";
import eventFiftyEight2 from "@/assets/events/25Nov2023/img2.jpg";
import eventFiftyEight3 from "@/assets/events/25Nov2023/img3.jpg";
import eventFiftyEight4 from "@/assets/events/25Nov2023/img4.jpg";

import eventFiftyNine1 from "@/assets/events/Nov2023/img1.jpg";
import eventFiftyNine2 from "@/assets/events/Nov2023/img2.jpg";
import eventFiftyNine3 from "@/assets/events/Nov2023/img3.jpg";
import eventFiftyNine4 from "@/assets/events/Nov2023/img4.jpg";

import eventSixty1 from "@/assets/events/10Nov2023/img1.jpg";
import eventSixty2 from "@/assets/events/10Nov2023/img2.jpg";
import eventSixty3 from "@/assets/events/10Nov2023/img3.jpg";
import eventSixty4 from "@/assets/events/10Nov2023/img4.jpg";
import eventSixty5 from "@/assets/events/10Nov2023/img5.jpg";
import eventSixty6 from "@/assets/events/10Nov2023/img6.jpg";

import eventSixtyOne1 from "@/assets/events/4Nov2023/img1.jpg";
import eventSixtyOne2 from "@/assets/events/4Nov2023/img2.jpg";
import eventSixtyOne3 from "@/assets/events/4Nov2023/img3.jpg";
import eventSixtyOne4 from "@/assets/events/4Nov2023/img4.jpg";
import eventSixtyOne5 from "@/assets/events/4Nov2023/img5.jpg";
import eventSixtyOne6 from "@/assets/events/4Nov2023/img6.jpg";
import eventSixtyOne7 from "@/assets/events/4Nov2023/img7.jpg";
import eventSixtyOne8 from "@/assets/events/4Nov2023/img8.jpg";
import eventSixtyOne9 from "@/assets/events/4Nov2023/img9.jpg";
import eventSixtyOne10 from "@/assets/events/4Nov2023/img10.jpg";
import eventSixtyOne11 from "@/assets/events/4Nov2023/img11.jpg";

const events = [
  {
    id: 1,
    name: "SALAD MAKING ACTIVITY  30 Jan 2025",
    thumbnail: eventThirtySeven1,
    images: [
      eventThirtySeven1,
      eventThirtySeven2,
      eventThirtySeven3,
      eventThirtySeven4,
      eventThirtySeven5,
      eventThirtySeven6,
      eventThirtySeven7,
    ],
  },
  {
    id: 2,
    name: "Republic Day Celebration 25th Jan 2025",
    thumbnail: eventThirtySix1,
    images: [
      eventThirtySix1,
      eventThirtySix2,
      eventThirtySix3,
      eventThirtySix4,
      eventThirtySix5,
      eventThirtySix6,
    ],
  },
  {
    id: 3,
    name: "Lohri celebration 11 Jan 2025",
    thumbnail: eventThirtyFive4,
    images: [
      eventThirtyFive1,
      eventThirtyFive2,
      eventThirtyFive3,
      eventThirtyFive4,
      eventThirtyFive5,
      eventThirtyFive6,
    ],
  },
  {
    id: 4,
    name: "INCLUSION WORKSHOP 8 Jan 2025",
    thumbnail: eventThirtyFour2,
    images: [
      eventThirtyFour1,
      eventThirtyFour2,
      eventThirtyFour3,
      eventThirtyFour4,
      eventThirtyFour5,
      eventThirtyFour6,
      eventThirtyFour7,
    ],
  },
  {
    id: 5,
    name: "CHRISTMAS CELEBRATION  23 Dec 2024",
    thumbnail: eventThirtyThree1,
    images: [
      eventThirtyThree1,
      eventThirtyThree2,
      eventThirtyThree3,
      eventThirtyThree4,
      eventThirtyThree5,
    ],
  },
  {
    id: 6,
    name: "POSTAL DRILL 19 Dec 2024",
    thumbnail: eventThirtyTwo2,
    images: [
      eventThirtyTwo1,
      eventThirtyTwo2,
      eventThirtyTwo3,
      eventThirtyTwo4,
      eventThirtyTwo5,
      eventThirtyTwo6,
      eventThirtyTwo7,
    ],
  },
  {
    id: 7,
    name: "Esperanza 24 Annual Day Celebration 10 & 11th Dec 2024",
    thumbnail: eventThirtyOne7,
    images: [
      eventThirtyOne1,
      eventThirtyOne2,
      eventThirtyOne3,
      eventThirtyOne4,
      eventThirtyOne5,
      eventThirtyOne6,
      eventThirtyOne7,
      eventThirtyOne8,
      eventThirtyOne9,
      eventThirtyOne10,
      eventThirtyOne11,
      eventThirtyOne12,
      eventThirtyOne13,
      eventThirtyOne14,
      eventThirtyOne15,
    ],
  },
  {
    id: 8,
    name: "Soft skill & Career Guidance  5 Dec 2024",
    thumbnail: eventThirty5,
    images: [
      eventThirty1,
      eventThirty2,
      eventThirty3,
      eventThirty4,
      eventThirty5,
    ],
  },
  {
    id: 9,
    name: "NUTRITION WEEK 4 Dec 2024",
    thumbnail: eventTwentyNine4,
    images: [
      eventTwentyNine1,
      eventTwentyNine2,
      eventTwentyNine3,
      eventTwentyNine4,
    ],
  },
  {
    id: 10,
    name: "Story Eanctment 29 Nov 2024",
    thumbnail: eventTwentyEight5,
    images: [
      eventTwentyEight1,
      eventTwentyEight2,
      eventTwentyEight3,
      eventTwentyEight4,
      eventTwentyEight5,
    ],
  },
  {
    id: 11,
    name: "Sports Achievements",
    thumbnail: eventTwentySeven2,
    images: [
      eventTwentySeven1,
      eventTwentySeven2,
      eventTwentySeven3,
      eventTwentySeven4,
    ],
  },
  {
    id: 12,
    name: "STORY ENACTMENT KINDERGARTEN 16 Sept 2024",
    thumbnail: eventOne4,
    images: [eventOne1, eventOne2, eventOne3, eventOne4],
  },
  {
    id: 13,
    name: "CBSE Cluster Games 13 Sept 2024",
    thumbnail: eventTwo2,
    images: [eventTwo1, eventTwo2, eventTwo3],
  },
  {
    id: 14,
    name: "MEET THE COMMUNITY HELPERS 10 Sept 2024",
    thumbnail: eventThree1,
    images: [
      eventThree1,
      eventThree2,
      eventThree3,
      eventThree4,
      eventThree5,
      eventThree6,
      eventThree7,
    ],
  },
  {
    id: 15,
    name: "TOY DONATION-PRABH AASRA 8 Sept 2024",
    thumbnail: eventFour1,
    images: [eventFour1, eventFour2, eventFour3, eventFour4],
  },
  {
    id: 16,
    name: "Teacher's Day Celebration 5 Sept 2024",
    thumbnail: eventFive7,
    images: [
      eventFive1,
      eventFive2,
      eventFive3,
      eventFive4,
      eventFive5,
      eventFive6,
      eventFive7,
      eventFive8,
    ],
  },
  {
    id: 17,
    name: "National Sports Day 29 Aug 2024",
    thumbnail: eventSix1,
    images: [eventSix1, eventSix2, eventSix3, eventSix4],
  },
  {
    id: 18,
    name: "Mini Marathon 29 Aug 2024",
    thumbnail: eventSeven5,
    images: [eventSeven1, eventSeven2, eventSeven3, eventSeven4, eventSeven5],
  },
  {
    id: 19,
    name: "Krishna Janmashtami Festival 28 Aug 2024",
    thumbnail: eventEight3,
    images: [
      eventEight1,
      eventEight2,
      eventEight3,
      eventEight4,
      eventEight5,
      eventEight6,
      eventEight7,
    ],
  },
  {
    id: 20,
    name: "Independence Day Celebration 15 Aug 2024",
    thumbnail: eventNine5,
    images: [
      eventNine1,
      eventNine2,
      eventNine3,
      eventNine4,
      eventNine5,
      eventNine6,
    ],
  },
  {
    id: 21,
    name: "Blood Donation Camp 10 Aug 2024",
    thumbnail: eventTen4,
    images: [eventTen1, eventTen2, eventTen3, eventTen4],
  },
  {
    id: 22,
    name: "Traffic Awareness Workshop 2 Aug 2024",
    thumbnail: eventEleven3,
    images: [eventEleven1, eventEleven2, eventEleven3, eventEleven4],
  },
  {
    id: 23,
    name: "Environment Awareness 30 July 2024",
    thumbnail: eventTwelve2,
    images: [
      eventTwelve1,
      eventTwelve2,
      eventTwelve3,
      eventTwelve4,
      eventTwelve5,
    ],
  },
  {
    id: 24,
    name: "Plantation Drive 29 July 2024",
    thumbnail: eventThirteen3,
    images: [eventThirteen1, eventThirteen2, eventThirteen3, eventThirteen4],
  },
  {
    id: 25,
    name: "International Tiger Day 29 July 2024",
    thumbnail: eventFourteen4,
    images: [eventFourteen1, eventFourteen2, eventFourteen3, eventFourteen4],
  },
  {
    id: 26,
    name: "Educational Trip Traffic Park Visit 26 Jul 2024",
    thumbnail: eventFifteen4,
    images: [eventFifteen1, eventFifteen2, eventFifteen3, eventFifteen4],
  },
  {
    id: 27,
    name: "Medical Camp organized by Homi Bhabha Cancer and Research Centre 24 July 2024",
    thumbnail: eventSixteen4,
    images: [eventSixteen1, eventSixteen2, eventSixteen3, eventSixteen4],
  },
  {
    id: 28,
    name: "Monsoon Mania 19 July 2024",
    thumbnail: eventSeventeen1,
    images: [
      eventSeventeen1,
      eventSeventeen2,
      eventSeventeen3,
      eventSeventeen4,
    ],
  },
  {
    id: 29,
    name: "Seminar on Cancer Awareness 9 July 2024",
    thumbnail: eventEighteen2,
    images: [eventEighteen1, eventEighteen2, eventEighteen3],
  },
  {
    id: 30,
    name: "Seed Germination 8 July 2024",
    thumbnail: eventNineteen1,
    images: [
      eventNineteen1,
      eventNineteen2,
      eventNineteen3,
      eventNineteen4,
      eventNineteen5,
    ],
  },
  {
    id: 31,
    name: "Investiture Ceremony 5 July 2024",
    thumbnail: eventTwenty5,
    images: [
      eventTwenty1,
      eventTwenty2,
      eventTwenty3,
      eventTwenty4,
      eventTwenty5,
    ],
  },
  {
    id: 32,
    name: "CBSE Workshop 27 Jun 2024",
    thumbnail: eventTwentyOne1,
    images: [
      eventTwentyOne1,
      eventTwentyOne2,
      eventTwentyOne3,
      eventTwentyOne4,
      eventTwentyOne5,
    ],
  },
  {
    id: 33,
    name: "INTERNATIONAL YOGA DAY 21 Jun 2024",
    thumbnail: eventTwentyTwo5,
    images: [
      eventTwentyTwo1,
      eventTwentyTwo2,
      eventTwentyTwo3,
      eventTwentyTwo4,
      eventTwentyTwo5,
    ],
  },
  {
    id: 34,
    name: "GRADE 10-TREKKING & CAMPING 3 Jun 2024",
    thumbnail: eventTwentyThree1,
    images: [
      eventTwentyThree1,
      eventTwentyThree2,
      eventTwentyThree3,
      eventTwentyThree4,
    ],
  },
  {
    id: 35,
    name: "DENTAL HYGIENE DRILL 20 May 2024",
    thumbnail: eventTwentyFour5,
    images: [
      eventTwentyFour1,
      eventTwentyFour2,
      eventTwentyFour3,
      eventTwentyFour4,
      eventTwentyFour5,
    ],
  },
  {
    id: 36,
    name: "Teachers Workshop 18 May 2024",
    thumbnail: eventTwentyFive4,
    images: [
      eventTwentyFive1,
      eventTwentyFive2,
      eventTwentyFive3,
      eventTwentyFive4,
      eventTwentyFive5,
    ],
  },
  {
    id: 37,
    name: "CURIOSITY KIDS KINDERGARTEN 17 May 2024",
    thumbnail: eventTwentySix5,
    images: [
      eventTwentySix1,
      eventTwentySix2,
      eventTwentySix3,
      eventTwentySix4,
      eventTwentySix5,
    ],
  },
  {
    id: 38,
    name: "POTTER'S WHEEL KINDERGARTEN  3May 2024",
    thumbnail: eventThirtyEight1,
    images: [eventThirtyEight1, eventThirtyEight2, eventThirtyEight3, eventThirtyEight4, eventThirtyEight5],
  },
  {
    id: 39,
    name: "KHEERGANGA TREK 28 April 2024",
    thumbnail: eventThirtyNine4,
    images: [eventThirtyNine1, eventThirtyNine2, eventThirtyNine3, eventThirtyNine4],
  },
  {
    id: 40,
    name: "collaboration with four esteemed foreign universities 26 April 2024",
    thumbnail: eventForty4,
    images: [eventForty1, eventForty2, eventForty3, eventForty4],
  },
  {
    id: 41,
    name: "collaboration with four esteemed foreign universities 23 April 2024",
    thumbnail: eventFortyFive3,
    images: [eventFortyFive1, eventFortyFive2, eventFortyFive3, eventFortyFive4, eventFortyFive5, eventFortyFive6],
  },
  {
    id: 42,
    name: "INTERACT CLUB INSTALLATION 12 April 2024",
    thumbnail: eventFortySix3,
    images: [eventFortySix1, eventFortySix2, eventFortySix3, eventFortySix4, eventFortySix5],
  },
  {
    id: 43,
    name: "Music & Dance Practice 23 Feb 2024",
    thumbnail: eventFortySeven1,
    images: [eventFortySeven1, eventFortySeven2, eventFortySeven3, eventFortySeven4, eventFortySeven5],
  },
  {
    id: 44,
    name: "Grade 12 Farewell 10 Feb 2024",
    thumbnail: eventFortyEight8,
    images: [eventFortyEight1, eventFortyEight2, eventFortyEight3, eventFortyEight4, eventFortyEight5, eventFortyEight6, eventFortyEight7, eventFortyEight8, eventFortyEight9],
  },
  {
    id: 45,
    name: "Robotics Lab Inauguration 9 Feb 2024",
    thumbnail: eventFortyNine4,
    images: [eventFortyNine1, eventFortyNine2, eventFortyNine3, eventFortyNine4, eventFortyNine5, eventFortyNine6, eventFortyNine7, eventFortyNine8, eventFortyNine9],
  },
  {
    id: 46,
    name: "MoU Signing Ceremony 24 Jan 24",
    thumbnail: eventFifty1,
    images: [eventFifty1, eventFifty2, eventFifty3, eventFifty4],
  },
  {
    id: 47,
    name: "Best Infrastructure School Award",
    thumbnail: eventFiftyFive1,
    images: [eventFiftyFive1],
  },
  {
    id: 48,
    name: "New International Faculty 23 Jan 24",
    thumbnail: eventFiftySix1,
    images: [eventFiftySix1, eventFiftySix2],
  },
  {
    id: 49,
    name: "Sportsperanza 12-14 Dec 2023",
    thumbnail: eventFiftySeven3,
    images: [eventFiftySeven1, eventFiftySeven2, eventFiftySeven3, eventFiftySeven4, eventFiftySeven5, eventFiftySeven6, eventFiftySeven7, eventFiftySeven8, eventFiftySeven9, eventFiftySeven10, eventFiftySeven11, eventFiftySeven12],
  },
  {
    id: 50,
    name: "Gurupurab Celebration 25 Nov 2023",
    thumbnail: eventFiftyEight3,
    images: [eventFiftyEight1, eventFiftyEight2, eventFiftyEight3, eventFiftyEight4],
  },
  {
    id: 51,
    name: "Roller Skating Competition winners Nov 2023",
    thumbnail: eventFiftyNine3,
    images: [eventFiftyNine1, eventFiftyNine2, eventFiftyNine3, eventFiftyNine4],
  },
  {
    id: 52,
    name: "Diwali Celebration 10 Nov 2023",
    thumbnail: eventSixty1,
    images: [eventSixty1, eventSixty2, eventSixty3, eventSixty4, eventSixty5, eventSixty6],
  },
  {
    id: 53,
    name: "Opinionator 04 Nov 2023",
    thumbnail: eventSixtyOne8,
    images: [eventSixtyOne1, eventSixtyOne2, eventSixtyOne3, eventSixtyOne4, eventSixtyOne5, eventSixtyOne6, eventSixtyOne7, eventSixtyOne8, eventSixtyOne9, eventSixtyOne10, eventSixtyOne11],
  },
  // Additional events as required
];

const ITEMS_PER_PAGE = 6;

// Pagination component
const Pagination = ({ currentPage, totalPages, goToPage }) => {
  return (
    <ul className="flex items-center justify-center gap-3 mt-6">
      {/* Previous Button */}
      <li
        className={`w-8 h-8 flex justify-center items-center rounded-full text-lg cursor-pointer transition-colors ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-600 hover:text-white"
        }`}
        onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
      >
        <FaAngleLeft />
      </li>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <li
          key={index}
          className={`w-8 h-8 flex justify-center items-center rounded-full text-lg font-semibold cursor-pointer transition-colors ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "text-blue-600 hover:bg-blue-600 hover:text-white"
          }`}
          onClick={() => goToPage(index + 1)}
        >
          {index + 1}
        </li>
      ))}

      {/* Next Button */}
      <li
        className={`w-8 h-8 flex justify-center items-center rounded-full text-lg cursor-pointer transition-colors ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-600 hover:text-white"
        }`}
        onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
      >
        <FaAngleRight />
      </li>
    </ul>
  );
};

export default function EventsGallery() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);
  const currentEvents = events.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLightboxIndex(null);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNextImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex < selectedEvent.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const showPrevImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedEvent.images.length - 1
    );
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Events Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: isEven ? -50 : 50 }} // Animate from top or bottom
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Card
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                onClick={() => openModal(event)}
              >
                <CardContent className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <img
                      src={event.thumbnail}
                      alt={event.name}
                      className="w-full h-48 object-cover rounded-md mb-2"
                    />
                    <h2 className="text-lg font-semibold">{event.name}</h2>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />

      {/* Modal for Event Images */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedEvent.name}</h2>
              <Button variant="ghost" size="icon" onClick={closeModal}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedEvent.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedEvent.name} - Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md cursor-pointer"
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Popup with Navigation */}
      {lightboxIndex !== null && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-3xl font-bold cursor-pointer"
            >
              &times;
            </button>
            <button
              onClick={showPrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-3xl font-bold rounded-full h-10 w-10 flex items-center justify-center cursor-pointer"
            >
              &#10094;
            </button>
            <img
              src={selectedEvent.images[lightboxIndex]}
              alt="Event Image"
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
            <button
              onClick={showNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-3xl font-bold rounded-full h-10 w-10 flex items-center justify-center cursor-pointer"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
