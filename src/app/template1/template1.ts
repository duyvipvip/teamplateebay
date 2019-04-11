import { Injectable } from '@angular/core';
import { interteamplate } from '../share/share';

@Injectable()
export class template1Service {

    constructor() { }

    public tempalte1(model: interteamplate){
        let stringimage1 ='';
        let stringimage2 ='';
        for(let i=0; i< model.arrHinhanh.length; i++){
            if(i==0){
                stringimage1 += `<input type="radio" name="pic" id="pic${i+1}" class="pics" checked="">
                <span class="p${i+1} big-img">
                    <img class="large" src="${model.arrHinhanh[i].name}" alt="">
                </span>
            `;
            }else{
                stringimage1 += `<input type="radio" name="pic" id="pic${i+1}" class="pics"=""="">
                <span class="p${i+1} big-img">
                    <img class="large" src="${model.arrHinhanh[i].name}" alt="">
                </span>
            `;
            }
            
            stringimage2 += `<label for="pic${i+1}" class="lab${i+1} thumb"><img
            src="${model.arrHinhanh[i].name}" alt=""></label>`
        } 
        let result= `<html lang="en" class="gr__addtowatchlist_com" style="cursor: auto;"><head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"
        content="${model.title}">
        <meta name="author" content="">
        <link href="https://fonts.googleapis.com/css?family=Abel|Open+Sans:300,400,600,700" rel="stylesheet"><link href="https://addtowatchlist.com/238/style-16.css" rel="stylesheet"><link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"><link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Lato"></head><style>
        .footer{
        padding: 0px;
        }.header, .footer{
        background: url('https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/56295404_829949757368407_731176379227308032_o.jpg?_nc_cat=103&_nc_oc=AQnfMMDTZO7YBL7Zjl4Y8wOvsLygklWfMfltzIZ8Dab_Lj4hATHx63E-12tNBF1VmSQ&_nc_ht=scontent.fsgn2-2.fna&oh=5aeb4cb7f9cef8d3c0a055a53484bfc2&oe=5D42C070') !important;}</style>
        <title>${model.title}</title>
        </head>
        <body data-gr-c-s-loaded="true">
        <div class="header">
        <div class="container">
        <div class="header-inner">
        <div class="header-top">
        <div class="header-left">Feel Free to Contact Us</div><div class="header-right">Hours Mon- Sat | 7.00 AM - 6.00 PM</div><div class="header-logo">
        <a>
        <img width="146px" style="position: relative;top: -40px;" height="100px" src="${model.logo}" alt=""></a>
        </div>
        </div>
        <div class="menu-container">
        <div class="switch">
        <label for="menu-switcher"></label>
        </div>
        <input type="checkbox" id="menu-switcher" class="menu-switcher"></div>
        </div>
        </div>
        </div>
        <div class="content">
        <div class="container">
        <div class="content-inner">
        <div class="desc-right">
        <div class="product-info">
        <div class="price">
        <h4>Price</h4>
        <span class="sale-price">$${model.price}</span></div>
        </div>
        <div class="description">
        <div class="desc-inner">
        <p>We offer the best prices around on high-quality products. Our E-store includes electronics, toys, sporting apparel, clothing, tools, general home, garden items and more. </p></div>
        </div>
        </div>
        <div class="product-slider">
        <div class="frame">
        <input type="radio" name="push" id="push1" class="push"><input type="radio" name="push" id="push2" class="push"><input type="radio" name="push" id="push3" class="push"><input type="radio" name="push" id="push4" class="push"><input type="radio" name="push" id="push5" class="push"><input type="radio" name="push" id="push6" class="push"><input type="radio" name="push" id="push7" class="push"><input type="radio" name="push" id="push8" class="push"><input type="radio" name="push" id="push9" class="push"><input type="radio" name="push" id="push10" class="push"><input type="radio" name="push" id="push11" class="push"><input type="radio" name="push" id="push12" class="push" checked="checked"><label for="push1" class="left one"><img src="https://addtowatchlist.com/238/images/prev.png"
        alt=""></label>
        <label for="push2" class="right one"><img src="https://addtowatchlist.com/238/images/next.png"
        alt=""></label>
        <label for="push3" class="left two"><img src="https://addtowatchlist.com/238/images/prev.png"
        alt=""></label>
        <label for="push4" class="right two"><img src="https://addtowatchlist.com/238/images/next.png"
        alt=""></label>
        <label for="push5" class="left three"><img src="https://addtowatchlist.com/238/images/prev.png"
        alt=""></label>
        <label for="push6" class="right three"><img src="https://addtowatchlist.com/238/images/next.png"
        alt=""></label>
        <label for="push7" class="left four"><img src="https://addtowatchlist.com/238/images/prev.png"
        alt=""></label>
        <label for="push8" class="right four"><img src="https://addtowatchlist.com/238/images/next.png"
        alt=""></label>
        <label for="push9" class="left five"><img src="https://addtowatchlist.com/238/images/prev.png"
        alt=""></label>
        <label for="push10" class="right five"><img src="https://addtowatchlist.com/238/images/next.png"
        alt=""></label>
        <label for="push11" class="left six"><img src="https://addtowatchlist.com/238/images/prev.png"
        alt=""> </label>
        <label for="push12" class="right six"><img src="https://addtowatchlist.com/238/images/next.png"
        alt=""></label>
        <div>
        ${stringimage1}
        ${stringimage2}
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <!-- enc content -->
        <div class="tab-outer">
        <div class="container">
        <div class="tab-block tabs">
        <input id="tab-1" type="radio" name="radio-set" class="tab-selector-1" checked="checked"><input id="tab-2" type="radio" name="radio-set" class="tab-selector-2"><input id="tab-3" type="radio" name="radio-set" class="tab-selector-3"><input id="tab-4" type="radio" name="radio-set" class="tab-selector-4"><div class="label-block">
        <label for="tab-1" class="tab-label-1">Description</label><label for="tab-2" class="tab-label-2">Shipping</label><label for="tab-3" class="tab-label-3">Return</label><label for="tab-4" class="tab-label-4">Customer</label>
        </div>
        <div class="tab-content">
        <div id="menu1" class="tab-pane">
        <p>${model.description}</p>
        </div>
        <div id="menu2" class="tab-pane fade">
        <p>We are always working hard to ensure your package arrives as soon as possible. Please understand that some factors like weather, high postal traffic, and the performance of shipping companies are outside of our control. </p><p>We only ship to the confirmed Paypal address. We reserve the right to cancel any order for any reason at any time. We offer free expedited shipping to the lower 48 states. The shipping time is 1-3 business days depending on your location. Our standard handling time is 1-3 business days which means we ship items within 3 business days of payment received, usually sooner. We do not accept P.O. Boxes. Please provide a physical address. </p><p>For shipping outside of the continental USA, we only use eBay's Global Shipping Program. The item is shipped to eBay's warehouse in KY, inspected by eBay there and then sent to the rest of the world. International customers are responsible for all duties and taxes. Continue to check out to calculate costs for shipping the item to your country. Messages regarding eBay's Global Shipping Program MUST be directed at eBay EXCLUSIVELY. </p><p>No returns are available for items shipped outside of the USA through eBay's Global Shipping Program. The reason for that is that we are no longer responsible for the item once it reaches the eBay's warehouse in KY. Ebay inspects the item, repackages it and actually handles its shipping to the customer. Should you have any quality problems with the item you receive, please contact eBay DIRECTLY to get some kind of reimbursement or resolution. </p></div>
        <div id="menu3" class="tab-pane fade">
        <p>We offer a 30-Day Return Policy for items which you are not completely satisfied with. You have the option of a full or an exchange of the item. If you return the item without a quality related problem, i.e. because you changed your mind/no longer need it/ordered by mistake, you will have to pay for the return shipping. Also, a restocking fee up to 20% may apply. </p></div>
        <div id="menu4" class="tab-pane fade in active"><div class="panel-left">
        <p>We try our very best to make sure every customer is completely satisfied. If you have a problem or question regarding your transaction please before leaving any type of feedback. We will work with you to resolve any problem you may have. </p></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <!-- end tab-outer -->
        <div class="service-wrapper">
        <div class="container">
        <ul class="service-list">
        <li>
        <div class="icon">
        <img src="https://addtowatchlist.com/238/images/s1.png" alt=""></div>
        <h3>Fast Shipping</h3>
        <p>${model.fastshipping}</p>
        </li>
        <li>
        <div class="icon">
        <img src="https://addtowatchlist.com/238/images/s2.png" alt=""></div>
        <h3>Customer Support</h3>
        <p>${model.customersupport}</p>
        </li>
        <li>
        <div class="icon">
        <img src="https://addtowatchlist.com/238/images/s3.png" alt=""></div>
        <h3>30 Day Guarantee</h3>
        <p>${model.day30}</p>
        </li>
        </ul>
        </div>
        </div>
        <div class="footer">
        <div class="container">
        <div class="footer-top">
        <div class="footer-logo"><a><img width="146px" height="100px" src="${model.logo}"></a></div><ul>
        <li><a href="${model.linkebay_listting}" target="_blank">Listings</a></li>
        <li><a href="${model.linkebay_about}" target="_blank">About Us</a></li><li><a href="${model.linkebay_feedback}"
        target="_blank">Feedback</a></li>
        <li><a href="${model.linkebay_contact}"
        target="_blank">Contact Us</a></li>
        </ul>
        </div>
        </div>
        </div>
        <div id="eJOY__extension_root" style="all: unset;"></div></body>
        </html>
        `;
        return result;
    }
}