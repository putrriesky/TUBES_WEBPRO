import './ProjectDetail.css';
import coins from '../../assets/stacks-of-coins.png'

const ProjectDetail = () => {

    return(
        <>
            <div className="container-fluid ">

                <div className="row set-row-project-detail ">

                    <div className="col-4  mt-project-detail ">
                        project detail
                    </div>

                    <div className="col-4  text-center title-header-pd">
                        <h1>Robotic Hand</h1>
                        <small>AI Impact</small>
                    </div>
                    <div className="col-4">
                
                    </div>
                </div>
                <div className="row set-row-project-detail justify-content-between mt-5 ">
                    <div className="col set-gambar-kiri-pd me-4">
                        
                    </div>

                    <div className="col-5  ">
                        <div className="row">
                            <div className="col-12 set-gambar-kanan-pd">
                                
                            </div>
                            <div className="col-12 set-gambar-kanan-pd mt-3">
                                
                            </div>
                        </div>
                    </div>



                </div>

                <div className="row set-row-project-detail justify-content-between mt-5 ">
                    <div className="col-6">
                        <div className="box-text-about-project">
                            <h3>About The Project</h3>
                            <p>
                                Robotic hands are artificial hands that are able to perform tasks similar to a human hand. They are used in a variety of applications, including prosthetics, manufacturing, and research.
                                This project aims to build a simple robotic hand using basic materials and tools. The hand will be able to move its fingers to grasp and release objects.
                            </p>
                        </div>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#2AB26E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>High Precision.</p>
                            </li>
                            
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#2AB26E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Remote Operation and Telepresence</p>
                            </li>
                            
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#2AB26E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Adaptability and Versatility.</p>
                            </li>
                            
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#2AB26E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Safety and Reliability.</p>
                            </li>
                        </ul>

                        <div className="bars-pd-outer">
                            <div className="bars-pd-inner">
                                
                            </div>
                        </div>

                        <div className="detail-pd-tl mt-5">
                            <div className="row justify-content-between">
                                <div className="col-4 ">
                                    <div className="ic-dolars d-flex">
                                        <img src={coins} alt=""/>
                                        <h3 className="ms-3">
                                            $ 65,235
                                        </h3>
                                    </div>
                                    <p className="ms-5">Total Raised</p>
                                    
                                </div>
                                <div className="col-4 ">
                                    <div className="row">
                                        <div className="col-12 d-flex bagian-bawaaaaaah-aaaaaa">

                                            <div className="profile-pd-datail me-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                                                    <rect y="0.25" width="36.75" height="37.625" rx="18.375" fill="#C4C4C4"/>
                                                </svg>
                                                
                                            </div>
                                            AI Impact


                                        </div>
                                        <div className="col-12 mt-2 d-flex text-detail-project-bawaaah">
                                            <div className="count-project">
                                                1 Project
                                            </div>
                                            <ul>
                                                <li> .  jakarta,Indonesia</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="col-5 set-cover-box-invets">
                        <div className="box-start-invest ">

                            <div className="box-start-invest-inner mb-3">
                                <h2 className="mt-4"> Start Invest</h2>
                                <input type="text" placeholder="xxxxx$"/>
                            </div>


                            <div className="box-provit-return-inner mb-3">

                                <h3 htmlFor="">Profit Return</h3>
                                <div className="input-profit-returnmt-4">
                                    <div className="row justify-content-center">
                                        <div className="col-2 set-years-min">
                                            -
                                        </div>
                                        <div className="col-7 set-years"> 4 Years</div>
                                        <div className="col-2 set-years-plus">
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="input-invest-type mt-">
                                <h3 htmlFor="">invest type</h3>
                                <div className="row">
                                    <div className="col-2">
                                        <div className="box-icon-calendar">
                                            
                                        </div>
                                    </div>
                                    <div className="col-10 set-inves-type-text">
                                        <p>Bagi Hasil</p>
                                    </div>
                                </div>
                            </div>


                            <div className="cover-y-w-r">
                                <p className="you-will-recive mt-4">
                                    You will Receive <span> $10.000 USD  </span> 
                                </p>
                            </div>

                            <div className="cover-btn-invest text-center">
                                <button className ="btn-find-ap">Get Started</button>
                            </div>


                        </div>
                    </div>



                </div>


                <div className="row set-row-project-detail justify-content-between mt-5 ">
                    <div className="col-4">
                        <h2>
                            We have done <br/>
                            many crowdfunding projects 
                        </h2>
                    </div>
                    <div className="col-4 setbutton-content-bawah text-end ">
                        <button>
                            <div className="d-flex justify-content-between pe-3 ps-3 pt-2">
                                <h5>
                                    View More
                                </h5>   
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                                    <g clipPath="url(#clip0_154_229)">
                                    <path d="M11.0185 2.40002L9.76829 4.08002L14.7692 10.8H0.302246V13.2H14.7692L9.76829 19.92L11.0185 21.6L18.1627 12L11.0185 2.40002Z" fill="#3252DF"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_154_229">
                                        <rect width="17.8605" height="24" fill="white" transform="translate(0.302246)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="row set-row-project-detail justify-content-between mt-5 ">
                    

                        <div className ="col-12 col-md-3 mt-5 ">

                            <div className ="box-content-features">
                                <div className ="image-content-features">

                                    <div className ="text-image-content ">
                                        test test test
                                    </div>
                                </div>
                                <div className ="row ps-2">
                                    
                                    <div className ="col-12 mt-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam.
                                    </div>

                                    <div className ="col-12  mt-3">
                                        <div className ="outer-bar-features">
                                            <div className ="inner-bar-features"></div>
                                        </div>
                                    </div>

                                    <div className ="col-11 mt-2">
                                        <div className ="row justify-content-between set-data-per-features">
                                            <div className ="col-2 text-start set-pecents"> 75% </div>
                                            <div className ="col-2 text-end set-price"> $1000.000</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        
                        <div className ="col-12 col-md-3 mt-5">
                            <div className ="box-content-features">
                                <div className ="image-content-features">
                                    <div className ="text-image-content ">
                                        test test test
                                    </div>
                                    </div>
                                    <div className ="row ps-2">

                                        <div className ="col-12 mt-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam.
                                        </div>

                                        <div className ="col-12  mt-3">
                                            <div className ="outer-bar-features">
                                                <div className ="inner-bar-features"></div>
                                            </div>
                                        </div>

                                        <div className ="col-11 mt-2">
                                            <div className ="row justify-content-between set-data-per-features">
                                                <div className ="col-2 text-start set-pecents"> 75% </div>
                                                <div className ="col-2 text-end set-price"> $1000.000</div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className ="col-12 col-md-3 mt-5">
                            <div className ="box-content-features">
                                <div className ="image-content-features">
                                    <div className ="text-image-content ">
                                        test test test
                                    </div>
                                </div>
                                <div className ="row ps-2">

                                    <div className ="col-12 mt-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam.
                                    </div>

                                    <div className ="col-12  mt-3">
                                        <div className ="outer-bar-features">
                                            <div className ="inner-bar-features"></div>
                                        </div>
                                    </div>

                                    <div className ="col-11 mt-2">
                                        <div className ="row justify-content-between set-data-per-features">
                                            <div className ="col-2 text-start set-pecents"> 75% </div>
                                            <div className ="col-2 text-end set-price"> $1000.000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
};

export default ProjectDetail;
