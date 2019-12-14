import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import Swiper, {ReactIdSwiperProps} from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../../../statics/css/home/BookSwiper.css'




class BookSwiperComponent extends React.Component {
    sliderParams: ReactIdSwiperProps = {
        spaceBetween: 30,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        direction: "horizontal",
        effect: "slide",
        slidesPerGroup: 5,
        slidesPerView: 5,
        loop: true,
        containerClass: "swiper-container"
    };


    render() {
        return (
            <section>
                <div className="container">
                    <div className="sectionHeader">
                        <h5>未読の本<span className="ml-2">(20冊)</span></h5>
                        <div className="checkAll float-right"><a href="#">もっと見る</a></div>
                    </div>
                    <hr className="mt-2 mb-4"/>

                    <Swiper {...this.sliderParams} >
                        <div>
                            <a href="#">
                                <img className="img-fluid img-thumbnail"
                                     src="https://images-fe.ssl-images-amazon.com/images/I/518RUvpRFlL._SX338_QL80_TTH_.jpg"/>
                            </a>
                            <div>
                                <div className="bookTitle text-nowrap text-truncate">寄宿学校のジュリエット</div>
                                <div className="bookAuthor text-nowrap text-truncate">金田陽介</div>
                            </div>
                        </div>

                        <div>
                            <a href="#">
                                <img className="img-fluid img-thumbnail"
                                     src="https://images-fe.ssl-images-amazon.com/images/I/41omYg1m1LL._SX338_QL80_TTH_.jpg"/>
                            </a>
                            <div>
                                <div className="bookTitle text-nowrap text-truncate">寄宿学校のジュリエット</div>
                                <div className="bookAuthor text-nowrap text-truncate">金田陽介</div>
                            </div>
                        </div>
                        <div>
                            <a href="#">
                                <img className="img-fluid img-thumbnail"
                                     src="https://images-fe.ssl-images-amazon.com/images/I/518gv2v+E-L._SX338_QL80_TTH_.jpg"/>
                            </a>
                            <div>
                                <div className="bookTitle text-nowrap text-truncate">寄宿学校のジュリエット</div>
                                <div className="bookAuthor text-nowrap text-truncate">金田陽介</div>
                            </div>
                        </div>
                        <div>
                            <a href="#">
                                <img className="img-fluid img-thumbnail"
                                     src="https://images-fe.ssl-images-amazon.com/images/I/51MEICU3woL._SX338_QL80_TTH_.jpg"/>
                            </a>
                            <div>
                                <div className="bookTitle text-nowrap text-truncate">寄宿学校のジュリエット</div>
                                <div className="bookAuthor text-nowrap text-truncate">金田陽介</div>
                            </div>
                        </div>
                        <div>
                            <a href="#">
                                <img className="img-fluid img-thumbnail"
                                     src="https://images-fe.ssl-images-amazon.com/images/I/519qpH8BYxL._SX338_QL80_TTH_.jpg"/>
                            </a>
                            <div>
                                <div className="bookTitle text-nowrap text-truncate">寄宿学校のジュリエット</div>
                                <div className="bookAuthor text-nowrap text-truncate">金田陽介</div>
                            </div>
                        </div>
                        <div>
                            <a href="#">
                                <img className="img-fluid img-thumbnail"
                                     src="https://images-fe.ssl-images-amazon.com/images/I/51S3S7BEJ4L._SX338_QL80_TTH_.jpg"/>
                            </a>
                            <div>
                                <div className="bookTitle text-nowrap text-truncate">寄宿学校のジュリエット</div>
                                <div className="bookAuthor text-nowrap text-truncate">金田陽介</div>
                            </div>
                        </div>
                    </Swiper>
                </div>
                <br/>
                <br/>
                <br/>
            </section>
        )
    }
}

export default BookSwiperComponent;