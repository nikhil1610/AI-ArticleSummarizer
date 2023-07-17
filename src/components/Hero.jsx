import { logo } from '../assets';
const Hero = () => {
  return (
    <header className="w-full flex flex-col
    justify-center items-center">
      <nav className="w-full flex flex-row justify-between
      items-center mb-10 pt-3">
        <img src={logo} alt="sumz_logo"
        className="w-28 object-contain"/>
        <button type="button"
        onClick={()=> window.open('https://github.com/nikhil1610',"_blank")}
        className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">
          OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        TLDR; no worries we got you covered. 
        Summarize your articles into clear and concise
        summaries with Summz now.
      </h2>
    </header>
  )
}

export default Hero