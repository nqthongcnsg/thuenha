import React,{Component} from 'react'
class ContentMid extends Component{
  
  render(){
    return(
        
       <div class="col-md-3 item-grid simpleCart_shelfItem">
       <div class=" mid-pop">
       <div class="pro-img">
           <img src={this.props.image} class="img-responsive" alt={this.props.name}/>
           <div class="zoom-icon ">
           <a class="picture" href={this.props.image} rel="title" className="b-link-stripe b-animate-go  thickbox"><i class="glyphicon glyphicon-search icon "></i></a>
           <a href="single.html"><i class="glyphicon glyphicon-menu-right icon"></i></a>
           </div>
           </div>
           <div class="mid-1">
           <div class="women">
           <div class="women-top">
               <span>{this.props.type}</span>
               <h6><a href="single.html">{this.props.name}</a></h6>
               </div>
               <div class="img item_add">
                   <a href="/detail"><img src="images/ca.png" alt=""/></a>
               </div>
               <div class="clearfix"></div>
               </div>
               <div class="mid-2">
                   <p ><label>{this.props.priceOld} vnd</label><em class="item_price">{this.props.priceNew} vnd</em></p>
                     <div class="block">
                       <div class="starbox small ghosting"> </div>
                   </div>
                   
                   <div class="clearfix"></div>
               </div>
               
           </div>
       </div>
       </div>
      );
  }
}
export default ContentMid;