function Introduction(){
    return (
        <section id="intro" className="my-12 overflow-hidden">
            <div className="md:container mx-auto relative px-4">
                <svg style={{zIndex:"-1",}} className="absolute top-0 w-96 right-0 object-fill" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1137.5 979.2">
                    <path fill="#F9FBFF" d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
                    c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"></path>
                </svg>
                <svg style={{zIndex:"-1",}} className="absolute transform rotate-90 scale-150 bottom-0 w-60 left-1/3 object-fill z-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1137.5 979.2">
                    <path fill="#F9FBFF" d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
                    c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"></path>
                </svg>
                <h1 className="text-3xl text-gray-700 font-medium mb-8"><span className="p-1 bg-gradient-text text-white rounded-md">Giới thiệu</span> bản thân</h1>
                <div className="md:flex">
                    <div className="md:px-2 mr-4">
                        <img className="w-32 transform md:rotate-0 rotate-90 object-fill" src={require('../asset/img/swirly-arrow.svg').default} alt="" />
                    </div>
                    <div className="flex-1 flex flex-wrap md:px-2 relative font-medium md:mt-20">    
                        <div className="p-2 md:w-1/2 w-full">
                            <div className="flex flex-col items-center p-4 rounded-md shadow-md">
                                <h2 className="text-center text-gray-700 text-3xl font-medium mb-4">Giới thiệu chung</h2>
                                <p className="text-gray-600 leading-7">Xin chào, Tôi là Phan Văn Bình, sinh viên năm 4 Học Viện Công Nghệ Bưu Chính Viễn Thông, khoa Phát Triển Ứng Dụng Đa Phương Tiện.Tôi có kiến thức tốt về PHP/Laravel, Vue.js, Nuxt, React. Tôi cũng từng làm game bằng Cocos Creator sử dụng ngôn ngữ Javascript. Bên cạnh đó tôi cũng có kiến thức cơ bản về thiết kế, biết sử dụng một số công cụ như Adobe Photoshop, Adobe Illustrator, Figma,...v.v.</p>
                            </div>
                        </div>
                        <div className="p-2 md:w-1/2 w-full">
                            <div className="flex flex-col items-center p-2 rounded-md shadow-md">
                                <h2 className="text-center text-gray-700 text-3xl font-medium mb-4">Ưu điểm</h2>
                                <p className="text-gray-600 leading-7">Ưu điểm lớn nhất của tôi là khả năng tự học và tìm hiểu,kiên trì và nhẫn nại cao. Mong muốn của tôi là trở thành fullstack web developer.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction