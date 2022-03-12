import React,{Component} from 'react'
import ContentMid from './content_mid';
class Content extends Component{
  
  render(){
      var products = [
          {
              id: 1,
              name:'Nhà 1',
              priceOld:120000,
              priceNew:100000,
              image:'https://thoitrangwiki.com/wp-content/uploads/2019/05/mau-nha-dep-8x14m-3.jpg',
              type:'Biệt Thự',

          },
          {
            id: 2,
            name:'Nhà 2',
            priceOld:120000,
            priceNew:100000,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XcqMphVX_gmO4T2FYBT5BLgPpoiqRl4I4b8gijjqxfVqoKy6MPGEVqq45e1kcGJHNJw&usqp=CAU',
            type:'Biệt Thự',

        },
        {
            id: 3,
            name:'Nhà 3',
            priceOld:120000,
            priceNew:100000,
            image:'https://kientrucgiangnam.com/wp-content/uploads/2021/05/1574750053-Mau-nha-dep-2-tang-120m2.jpg',
            type:'Biệt Thự',

        },
        
        {
            id: 4,
            name:'Nhà 4',
            priceOld:120000,
            priceNew:100000,
            image:'https://noithattrevietnam.com/uploaded/Kien-thuc-nha-dep/hinh-anh-nha-mai-thai-cap-4/1-nha-mai-thai-cap-4.jpg',
            type:'Biệt Thự',

        },
        
        {
            id: 5,
            name:'Nhà 5',
            priceOld:120000,
            priceNew:100000,
            image:'https://nld.mediacdn.vn/2018/10/3/1-15385362159031190880188.jpg',
            type:'Biệt Thự',

        },
        
        {
            id: 6,
            name:'Nhà 6',
            priceOld:120000,
            priceNew:100000,
            image:'https://angialam.vn/wp-content/uploads/2018/03/hinh-ngoi-nha-dep-cty-an-gia-lam.jpg',
            type:'Biệt Thự',

        },
        {
            id: 7,
            name:'Nhà 7',
            priceOld:120000,
            priceNew:100000,
            image:'https://i.pinimg.com/originals/44/16/93/441693e841e68a0069fe3222b9a50630.jpg',
            type:'Biệt Thự',

        },
        {
            id: 8,
            name:'Nhà 8',
            priceOld:120000,
            priceNew:100000,
            image:'https://vietnamembassy-thailand.org/wp-content/uploads/2019/05/hinh-anh-nha-mai-thai-dep.jpg',
            type:'Biệt Thự',

        },
        
        
        
        


      ];
      let element=products.map((product,index)=>{
          return <ContentMid
                    key={product.id}
                    name={product.name}
                    priceNew={product.priceNew}
                    priceOld={product.priceOld}
                    image={product.image}
                    type={product.type}
          ></ContentMid>
      });
    return(
        <div class="content">
        <div class="container">
            <div class="content-top">
                <div class="col-md-6 col-md">
                    <div class="col-1">
                     <a href="/" class="b-link-stroke b-animate-go  thickbox">
       <img src="https://maunhadephp.com/wp-content/uploads/2020/12/mau-nha-1-tang-dep-gia-re.jpg" class="img-responsive2" alt=""/><div class="b-wrapper1 long-img"><p class="b-animate b-from-right    b-delay03 ">AAAA</p><label class="b-animate b-from-right    b-delay03 "></label><h3 class="b-animate b-from-left    b-delay03 ">Thịnh hành</h3></div></a>

                    </div>
                    <div class="col-2">
                        <span>Ưu đãi lớn</span>
                        <h2><a href="/">Sang trọng &amp; Hợp thời trang</a></h2>
                        <p>Trái với suy nghĩ của nhiều người, Fashion Sport không chỉ đơn giản là văn bản ngẫu nhiên. Nó có nguồn gốc từ một tác phẩm văn học Latinh cổ điển từ năm 45 trước Công nguyên, đã tồn tại hơn 2000 năm</p>
                        <a href="/" class="buy-now">Mua ngay</a>
                        
                       
      
      
                    </div>
                    <div class="col-3">
                    <img src="https://imgs.vietnamnet.vn/Images/2017/01/10/15/20170110153106-nha-cap-4-1.jpg" class="img-responsive2" alt=""/>
      
                    </div>
                </div>
                <div class="col-md-6 col-md1">
                    <div class="col-3">
                        <a href="/"><img src="https://noithattrevietnam.com/uploaded/Kien-thuc-nha-dep/hinh-anh-nha-2-tang-mai-thai/19-images-about-houses-casas-on-pinterest-house-design-luxury-beautiful-home-design-1024x619.jpg" class="img-responsive2" alt=""/>
                        <div class="col-pic">
                            <p>AAAA</p>
                            <label></label>
                            <h5>Biệt thự</h5>
                        </div></a>
                    </div>
                    <div class="col-3">
                        <a href="/"><img src="https://i.pinimg.com/originals/70/5c/24/705c248800445e4d2c6e9aec772cb7c6.jpg" class="img-responsive2" alt=""/>
                        <div class="col-pic">
                            <p>AAAA</p>
                            <label></label>
                            <h5>Biệt Thự</h5>
                        </div></a>
                    </div>
                    <div class="col-3">
                        <a href="/"><img src="http://duythinh.net/wp-content/uploads/2021/04/06c2b8abc5e82cb675f9.jpeg" class="img-responsive2" alt=""/>
                        <div class="col-pic">
                            <p>AAAA</p>
                            <label></label>
                            <h5>Biệt thự</h5>
                        </div></a>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
          
        </div>
        <div class="content-mid">
        <h3>Trending Items</h3>
        <label class="line"></label>
        <div class="mid-popular">
            {element}
            
            <div class="clearfix"></div>
        </div>
       
    </div>
    </div>
      );
  }
}
export default Content;