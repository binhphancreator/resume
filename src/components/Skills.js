function Skills(){
    return (
        <section id="skill" className="my-12 overflow-hidden">
            <div className="md:container mx-auto relative p-4">
                <svg className="absolute transform rotate-180 scale-150 bottom-0 w-60 left-0 object-fill z-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1137.5 979.2">
                    <path fill="#F9FBFF" d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
                    c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"></path>
                </svg>
                <h1 className="text-3xl block w-full text-gray-700 font-medium text-left md:text-right mb-8"><span className="p-1 bg-gradient-text text-white rounded-md">Kỹ năng</span> cá nhân</h1>
                <div className="flex md:flex-row flex-col-reverse z-20">
                    <div className="flex-1 md:justify-center flex flex-wrap px-2 relative font-medium md:mt-20 mt-4 md:space-y-0 space-y-4">    
                        <div className="md:p-2">
                            <div className="p-4 rounded-md shadow-md h-full">
                                <h2 className="text-center text-gray-700 text-3xl font-medium mb-4">Ngôn ngữ lập trình</h2>
                                <div className="md:w-auto w-full flex flex-wrap justify-center">
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/java.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">Java</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/c.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">C++</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/html.png').default} alt="" />
                                        <p className="text-gray-700 font-medium">HTML</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/CSS3.png').default} alt="" />
                                        <p className="text-gray-700 font-medium">CSS</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/js.png').default} alt="" />
                                        <p className="text-gray-700 font-medium">Javascript</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/php-logo.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">PHP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-2">
                            <div className="p-4 rounded-md shadow-md">
                                <h2 className="text-center text-gray-700 text-3xl font-medium mb-4">Framework</h2>
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/vue.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">Vue.js</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/react.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">React</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/nuxt.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">Nuxt</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/laravel.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">Laravel</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/java.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">JavaFx</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8 object-cover" src={require('../asset/img/cocos.png').default} alt="" />
                                        <p className="text-gray-700 font-medium">Cocos Creator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-2">
                            <div className="p-4 rounded-md shadow-md">
                                <h2 className="text-center text-gray-700 text-3xl font-medium mb-4">Công cụ khác</h2>
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/photoshop.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">Photoshop</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/illustrator.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">Illustrator</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/figma.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">Figma</p>
                                    </div>
                                    <div className="flex p-2 flex-col items-center rounded-full">
                                        <img className="w-8 h-8" src={require('../asset/img/github.svg').default} alt="" />
                                        <p className="text-gray-700 font-medium">GitHub</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2 md:ml-4 ">
                        <img className="w-32 object-fill transform md:rotate-0 -rotate-90" src={require('../asset/img/turn-right-arrow.svg').default} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills