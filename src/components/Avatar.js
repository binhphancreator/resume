function Avatar(){
    return (
        <section id="info" className="pt-3 pb-4">
            <div className="max-w-screen-md mx-auto p-4 -mt-40 z-20">
                <div className="row blur p-2 rounded-md shadow-md">
                <div className="flex md:flex-row flex-col items-center max-w-screen-md">
                    <div className="px-1 md:mr-4">
                        <img className="object-cover w-40 h-40 rounded-full" src={require('../asset/img/avatar.jpg').default} alt="" />
                    </div>
                    <div className="flex-1 px-1">
                        <h1 className="text-gray-700 text-2xl mb-2 md:text-left text-center">Phan Văn Bình (03/04/2000)</h1>
                        <div className="flex flex-wrap justify-center">
                            <div className="flex space-x-2 md:w-1/2 p-1 items-center">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                        <path style={{fill:"rgba(107, 114, 128, 1)"}} d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                        <path style={{fill:"rgba(107, 114, 128, 1)"}} d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero"></path>
                                    </g>
                                </svg>
                                <p className="text-gray-500">Web Developer</p>
                            </div>
                            <div className="flex space-x-2 md:w-1/2 p-1 items-center">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <path style={{fill:"rgba(107, 114, 128, 1)"}} d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fillRule="nonzero"></path>
                                    </g>
                                </svg>
                                <p className="text-gray-500">Hà Đông, Hà Nội</p>
                            </div>
                            <div className="flex space-x-2 md:w-1/2 p-1 items-center">
                                <svg style={{fill:"rgba(107, 114, 128, 1)"}} className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"/></svg>
                                <a rel="noreferrer" target="_blank"href="https://www.facebook.com/binhpv2000/" className="text-gray-500">fb.com/binhpv2000</a>
                            </div>
                            <div className="flex space-x-2 md:w-1/2 p-1 items-center">
                                <svg style={{fill:"rgba(107, 114, 128, 1)"}} className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 513.64 513.64" xmlSpace="preserve">
                                    <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72    c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68    c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44    l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"/>
                                </svg>
                                <a rel="noreferrer" target="_blank"href="https://www.facebook.com/binhpv2000/" className="text-gray-500">0376591677</a>
                            </div>
                            <div className="flex space-x-2 md:w-1/2 p-1 items-center">
                                <svg style={{fill:"rgba(107, 114, 128, 1)"}} className="w-5 h-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                                    <polygon points="339.392,258.624 512,367.744 512,144.896 "/>                            
                                    <polygon points="0,144.896 0,367.744 172.608,258.624 "/>
                                    <path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z"/>
                                    <path d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856
                                        L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z"/>
                                </svg>
                                <a rel="noreferrer" target="_blank"href="mailto:tienkhach19@gmail.com" className="text-gray-500">tienkhach19@gmail.com</a>
                            </div>
                            <div className="flex space-x-2 md:w-1/2 p-1 items-center">
                                <svg style={{fill:"rgba(107, 114, 128, 1)"}} className="w-5 h-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve"><g><g><path d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
                                    c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
                                    c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
                                    c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
                                    c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
                                    c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
                                    c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
                                    c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
                                    c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"></path></g></g>
                                </svg>
                                <a rel="noreferrer" target="_blank"href="https://github.com/binhphancreator" className="text-gray-500">github.com/binhphancreator</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Avatar