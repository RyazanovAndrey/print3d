import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlogCard from '../components/BlogCard';
import { Autoplay } from 'swiper/modules';
import { blogList } from '../data';

const Blog = () => {
  return (
    <section className="py-30 bg-hero" id='blog'>
      <div className="container">
        <div className="flex justify-center mb-10">
          <div className="text-center max-w-1/2 space-y-5">
            <p className='desc'>BLog & news</p>
            <h2 className="title">3D Printing in the News</h2>
            <p className='text-bd-item text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni doloremque deserunt architecto! Minima iste molestias a, corrupti et, numquam eveniet rerum amet id reiciendis ipsam voluptatibus nisi placeat rem quo!</p>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          loop
          grabCursor
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          speed={500}
          breakpoints={{
            400: {
              slidesPerView: 1
            },
            576: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 3
            },
            1200: {
              slidesPerView: 4
            }
          }}
        >
          {blogList.map(item => (
            <SwiperSlide>
              <BlogCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog