import { WaveSVG } from "./styles";

const Wave = () => {
  return (
    <WaveSVG viewBox="0 0 500 150" fill='white' className='wave' preserveAspectRatio="none">
      <path d="M-1.13,149.51 C209.36,14.31 309.25,287.67 500.00,-0.48 L500.00,150.00 L0.00,150.50 Z"></path>
    </WaveSVG>
  )
}

export default Wave;