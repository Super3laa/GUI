import {FaRegAngry,FaRegSadTear,FaRegSurprise,FaRegDizzy,FaRegGrin,FaRegMeh} from "react-icons/fa";
import React from 'react'
const emotion = new Map();

emotion.set("neutral", <FaRegMeh />)
emotion.set("happy",<FaRegGrin />)
emotion.set("disgusted",<FaRegDizzy />)
emotion.set("surprised",<FaRegSurprise />)
emotion.set("angry",<FaRegAngry />)
emotion.set("sad",<FaRegSadTear />)

export default emotion;