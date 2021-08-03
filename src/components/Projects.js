function Projects(){
    return (
        <section id="projects" className="my-12 overflow-hidden">
            <div className="md:container mx-auto relative p-4">
                <svg className="absolute top-0 w-96 right-0 object-fill" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1137.5 979.2">
                    <path fill="#F9FBFF" d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
                    c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"></path>
                </svg>
                <h1 className="text-3xl text-gray-700 font-medium mb-8"><span className="p-1 bg-gradient-text text-white rounded-lg">Dự án</span> của tôi</h1>
                <div className="lg:flex z-20">
                    <div className="lg:px-2 mr-4">
                        <img className="w-32 object-fill transform lg:rotate-0 rotate-90" src={require('../asset/img/swirly-arrow.svg').default} alt="" />
                    </div>
                    <div className="lg:px-2 flex-1 relative font-medium lg:mt-10">    
                        <div className="lg:p-2 w-full">
                            <div className="lg:p-4 lg:flex">
                                <div className="flex-1 lg:px-2">
                                    <h2 className="text-gray-700 text-3xl font-medium mb-4">JobForest</h2>
                                    <div className="flex space-x-2 mb-4">
                                        <img className="w-8 h-8" src={require('../asset/img/laravel.svg').default} alt="" />
                                        <img className="w-8 h-8" src={require('../asset/img/nuxt.svg').default} alt="" />
                                    </div>
                                    <p className="text-gray-500 mb-4">Ứng dụng việc freelance kết nối nhà tuyển dụng với freelancer. Hiện tại jobforest cung cấp một số tính năng chính sau : đăng nhập, đăng ký, đăng việc, gửi chào giá, chat realtime giữa nhà tuyển dụng và freelancer.</p>
                                    <div className="flex space-x-2 items-center mb-4">
                                        <img className="w-6 h-6" src={require('../asset/img/coding.svg').default} alt="" /> 
                                        <a style={{width:"fit-content",}} className="block text-gray-500" href="http://jobforest.me/">Frontend</a>
                                        <a style={{width:"fit-content",}} className="block text-gray-500" href="http://jobforest.me/">Backend</a>
                                    </div>
                                    <a style={{width:"fit-content",}} className="block mb-4 underline text-blue-400 text-xl" href="http://jobforest.me/">Demo</a>
                                </div>
                                <img draggable="false" className="lg:w-1/2 lg:px-2 object-cover rounded-xl shadow-lg" src={require('../asset/img/jobforest.png').default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects