import React from "react"
import gsap from "gsap"
import TextPlugin from "gsap/TextPlugin"

class Header extends React.Component{
    render(){
        return (
            <header id="header" className="relative overflow-hidden flex items-center" style={{minHeight:"75vh"}}>
                <span className="mask bg-gradient-primary"></span>
                <div className="absolute w-full bottom-0">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                        </defs>
                        <g className="moving-waves">
                            <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)"></use>
                            <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.95"></use>
                        </g>
                    </svg>
                </div>
                <div className="mx-auto md:container px-4 z-10 text-center">
                    <h1 className="text-white sm:text-3xl md:text-7xl text-2xl uppercase mb-4">Xin chào, Tôi là <span className="myname relative"></span></h1>
                    <h2 className="text-white text-2xl uppercase mytitle opacity-0">Fullstack Web Developer</h2>
                </div>
            </header>
        )
    }

    componentDidMount(){
        gsap.registerPlugin(TextPlugin)
        var tl = gsap.timeline({repeat:-1, repeatDelay:1, yoyo:true});
        tl.to(".myname", {duration: 2, text:" Phan Văn Bình"}).to(".mytitle", {opacity:1})
    }
}

export default Header