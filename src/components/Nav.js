function Nav(){
    return (
        <nav className="fixed left-0 right-0 top-0 z-50 p-4">
            <div className="md:container mx-auto blur px-4 rounded-full flex items-center justify-between py-2 font-medium shadow-md" style={{background:"#AED6F1",color:"#154360"}}>
                <a href="/" className="font-medium">CV Phan Văn Bình</a>
                <ul className="md:flex hidden justify-between space-x-4">
                    <li className="py-2"><a className="" href="#header">Liên lạc</a></li>
                    <li className="py-2"><a className="" href="#intro">Giới thiệu</a></li>
                    <li className="py-2"><a className="" href="#skill">Kỹ năng</a></li>
                    <li className="py-2"><a className="" href="#projects">Dự án</a></li>
                </ul>
                <a href="/" className="p-2 bg-blue-100 rounded-full">Tải bản PDF</a>
            </div>
        </nav>
    )
}

export default Nav