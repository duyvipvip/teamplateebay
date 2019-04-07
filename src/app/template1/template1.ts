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
        return `<html lang="en" class="gr__addtowatchlist_com" style="cursor: auto;">

        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="description"
                content="${model.title}">
            <meta name="author" content="">
            <style>
            .footer{
                padding: 0px;
            }
            .header, .footer{
                background: url('https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/56295404_829949757368407_731176379227308032_o.jpg?_nc_cat=103&_nc_oc=AQnfMMDTZO7YBL7Zjl4Y8wOvsLygklWfMfltzIZ8Dab_Lj4hATHx63E-12tNBF1VmSQ&_nc_ht=scontent.fsgn2-2.fna&oh=5aeb4cb7f9cef8d3c0a055a53484bfc2&oe=5D42C070') !important;
            }
            </style>
            <title>${model.title}</title>
        </head>
        
        <body data-gr-c-s-loaded="true">
            <div class="header">
                <div class="container">
                    <div class="header-inner">
                        <div class="header-top">
                            <div class="header-left">Feel Free to Contact Us</div>
                            <div class="header-right">Hours Mon- Sat | 7.00 AM - 6.00 PM</div>
                            <div class="header-logo">
                                <a>
                                    <img width="146px" height="39px" src="${model.logo}" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="menu-container">
                            <div class="switch">
                                <label for="menu-switcher"></label>
                            </div>
                            <input type="checkbox" id="menu-switcher" class="menu-switcher">
                        </div>
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
                                    <span class="sale-price">$${model.price}</span>
                                </div>
                            </div>
                            <div class="description">
                                <div class="desc-inner">
                                   ${model.description}
                                </div>
                            </div>
                        </div>
                        <div class="product-slider">
                            <div class="frame">
                                <input type="radio" name="push" id="push1" class="push">
                                <input type="radio" name="push" id="push2" class="push">
                                <input type="radio" name="push" id="push3" class="push">
                                <input type="radio" name="push" id="push4" class="push">
                                <input type="radio" name="push" id="push5" class="push">
                                <input type="radio" name="push" id="push6" class="push">
                                <input type="radio" name="push" id="push7" class="push">
                                <input type="radio" name="push" id="push8" class="push">
                                <input type="radio" name="push" id="push9" class="push">
                                <input type="radio" name="push" id="push10" class="push">
                                <input type="radio" name="push" id="push11" class="push">
                                <input type="radio" name="push" id="push12" class="push" checked="checked">
                                <label for="push1" class="left one"><img src="https://addtowatchlist.com/238/images/prev.png"
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
                        <input id="tab-1" type="radio" name="radio-set" class="tab-selector-1" checked="checked">
                        <input id="tab-2" type="radio" name="radio-set" class="tab-selector-2">
                        <input id="tab-3" type="radio" name="radio-set" class="tab-selector-3">
                        <input id="tab-4" type="radio" name="radio-set" class="tab-selector-4">
                        <div class="label-block">
                            <label for="tab-1" class="tab-label-1">Description</label>
        
                            <label for="tab-2" class="tab-label-2">Shipping</label>
        
                            <label for="tab-3" class="tab-label-3">Return</label>
        
                            <label for="tab-4" class="tab-label-4">Video</label>
                        </div>
                        <div class="tab-content">
                            <div id="menu1" class="tab-pane">
                                <p>${model.description}</p>
                            </div>
                            <div id="menu2" class="tab-pane fade">
                                <p>We are always working hard to ensure your package arrives as soon as possible. Please understand that some factors like weather, high postal traffic, and the performance of shipping companies are outside of our control. </p>
                                <p>We only ship to the confirmed Paypal address. We reserve the right to cancel any order for any reason at any time. We offer free expedited shipping to the lower 48 states. The shipping time is 1-3 business days depending on your location. Our standard handling time is 1-3 business days which means we ship items within 3 business days of payment received, usually sooner. We do not accept P.O. Boxes. Please provide a physical address. </p>
                                <p>For shipping outside of the continental USA, we only use eBay's Global Shipping Program. The item is shipped to eBay's warehouse in KY, inspected by eBay there and then sent to the rest of the world. International customers are responsible for all duties and taxes. Continue to check out to calculate costs for shipping the item to your country. Messages regarding eBay's Global Shipping Program MUST be directed at eBay EXCLUSIVELY. </p>
                                <p>No returns are available for items shipped outside of the USA through eBay's Global Shipping Program. The reason for that is that we are no longer responsible for the item once it reaches the eBay's warehouse in KY. Ebay inspects the item, repackages it and actually handles its shipping to the customer. Should you have any quality problems with the item you receive, please contact eBay DIRECTLY to get some kind of reimbursement or resolution. </p>
                            </div>
                            <div id="menu3" class="tab-pane fade">
                                <p>We offer a 30-Day Return Policy for items which you are not completely satisfied with. You have the option of a full or an exchange of the item. If you return the item without a quality related problem, i.e. because you changed your mind/no longer need it/ordered by mistake, you will have to pay for the return shipping. Also, a restocking fee up to 20% may apply. </p>
                            </div>
                            <div id="menu4" class="tab-pane fade in active">
                                <div class="panel-left">
                                    <p>In this short video tutorial we are trying to show some of the concepts we have designed
                                        over the years explicitly for Ebay members. We understand that this technology could be
                                        used in other enviroments for a faster and safer web experience but our committment has
                                        always been with Ebay and its members.
                                        We hope you enjoy this video and if you have any questions or concerns please do not
                                        hesitate to contact us.</p>
                                </div>
                                <div class="video-block">
                                    <video class="responsive-video" controls="">
                                        <source src="https://addtowatchlist.com/156/video/hair_template.mp4" type="video/mp4">
                                    </video>
                                </div>
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
                                <img src="https://addtowatchlist.com/238/images/s1.png" alt="">
                            </div>
                            <h3>Fast Shipping</h3>
                            <p>${model.fastshipping}</p>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="https://addtowatchlist.com/238/images/s2.png" alt="">
                            </div>
                            <h3>Customer Support</h3>
                            <p>${model.customersupport}</p>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="https://addtowatchlist.com/238/images/s3.png" alt="">
                            </div>
                            <h3>30 Day Guarantee</h3>
                            <p>${model.day30}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer">
                <div class="container">
                    <div class="footer-top">
                        <div class="footer-logo"><a><img width="146px" height="100px" src="${model.logo}"></a></div>
                        <ul>
                            <li><a href="${model.linkebay_listting}" target="_blank">Listings</a>
                            </li>
                            <li><a href="${model.linkebay_about}" target="_blank">About Us</a></li>
                            <li><a href="${model.linkebay_feedback}"
                                    target="_blank">Feedback</a></li>
                            <li><a href="${model.linkebay_contact}"
                                    target="_blank">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <script type="text/javascript">
                document.addEventListener('contextmenu', event => event.preventDefault());
            </script>
        
        
            <div id="eJOY__extension_root" style="all: unset;"></div>
        </body>
        <style>
            /* latin */
        @font-face {
          font-family: 'Abel';
          font-style: normal;
          font-weight: 400;
          src: local('Abel Regular'), local('Abel-Regular'), url(https://fonts.gstatic.com/s/abel/v9/MwQ5bhbm2POE2V9BO7h5uGM.woff) format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 300;
          src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN_r8OX-hvKKSTj5PW.woff) format('woff');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 300;
          src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN_r8OVuhvKKSTj5PW.woff) format('woff');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 300;
          src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN_r8OXuhvKKSTj5PW.woff) format('woff');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 300;
          src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN_r8OUehvKKSTj5PW.woff) format('woff');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 300;
          src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN_r8OXehvKKSTj5PW.woff) format('woff');
          unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 300;
          src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN_r8OXOhvKKSTj5PW.woff) format('woff');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 300;
          src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN_r8OUuhvKKSTjw.woff) format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFWJ0df8pkAp6a.woff) format('woff');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFUZ0df8pkAp6a.woff) format('woff');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFWZ0df8pkAp6a.woff) format('woff');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFVp0df8pkAp6a.woff) format('woff');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFWp0df8pkAp6a.woff) format('woff');
          unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFW50df8pkAp6a.woff) format('woff');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFVZ0df8pkAg.woff) format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UNirkOX-hvKKSTj5PW.woff) format('woff');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UNirkOVuhvKKSTj5PW.woff) format('woff');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UNirkOXuhvKKSTj5PW.woff) format('woff');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UNirkOUehvKKSTj5PW.woff) format('woff');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UNirkOXehvKKSTj5PW.woff) format('woff');
          unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UNirkOXOhvKKSTj5PW.woff) format('woff');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UNirkOUuhvKKSTjw.woff) format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN7rgOX-hvKKSTj5PW.woff) format('woff');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN7rgOVuhvKKSTj5PW.woff) format('woff');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN7rgOXuhvKKSTj5PW.woff) format('woff');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN7rgOUehvKKSTj5PW.woff) format('woff');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN7rgOXehvKKSTj5PW.woff) format('woff');
          unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN7rgOXOhvKKSTj5PW.woff) format('woff');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN7rgOUuhvKKSTjw.woff) format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    font-family: 'Open Sans', sans-serif;
                    font-family: 'Abel', sans-serif;
                    font-size: 14px;
                    line-height: 24px;
                    color: #909090;
                    font-weight: 300;
                }
        
                img {
                    border: none;
                    outline: none;
                    max-width: 100%;
                }
        
                a,
                a:active,
                a:focus,
                a:hover {
                    outline: none;
                    text-decoration: none;
                }
        
                a {
                    -webkit-transition: all 0.25s ease-in-out;
                    -moz-transition: all 0.25s ease-in-out;
                    -ms-transition: all 0.25s ease-in-out;
                    transition: all 0.25s ease-in-out;
                }
        
                input:focus,
                textarea:focus,
                select:focus {
                    outline: none !important;
                    box-shadow: none;
                }
        
                ul {
                    margin: 0;
                    list-style-type: none;
                }
        
                .container {
                    width: 1195px;
                    margin: 0 auto;
                }
        
                .main-wrapper {
                    width: 100%;
                    float: left;
                    height: auto;
                }
        
                .one-third {
                    width: 33.33%;
                    float: left;
                    height: auto;
                }
        
                .pull-left {
                    float: left;
                }
        
                .pull-right {
                    float: right;
                }
        
                .half {
                    width: 50%;
                    float: left;
                    height: auto;
                }
        
                .text-center {
                    text-align: center;
                }
        
                /*======================= Header =====================*/
                .header {
                    width: 100%;
                    float: left;
                    height: auto;
                    position: relative;
                    padding: 10px 0;
                    background: url(https://addtowatchlist.com/238/images/header-bg.jpg) no-repeat center center;
                    -webkit-background-size: cover;
                    -ms-background-size: cover;
                    -moz-background-size: cover;
                    background-size: cover;
                }
        
                .header-inner {
                    width: 100%;
                    float: left;
                    height: auto;
                    background: rgba(55, 71, 79, 0.61);
                    border: 1px solid rgba(255, 255, 255, 0.61);
                }
        
                .header-top {
                    width: 100%;
                    float: left;
                    height: auto;
                    padding: 22px 0 0;
                    position: relative;
                }
        
                .header-left {
                    width: 408px;
                    float: left;
                    height: auto;
                    text-align: center;
                    font-size: 18px;
                    color: #fff;
                    font-family: 'Open Sans', sans-serif;
                    border: 1px solid rgba(255, 255, 255, 0.61);
                    border-left: none;
                    line-height: 37px;
                }
        
                .header-right {
                    width: 408px;
                    float: right;
                    height: auto;
                    text-align: center;
                    font-size: 18px;
                    color: #fff;
                    font-family: 'Open Sans', sans-serif;
                    border: 1px solid rgba(255, 255, 255, 0.61);
                    border-right: none;
                    line-height: 37px;
                }
        
                .header-logo {
                    position: absolute;
                    left: 50%;
                    top: 20px;
                    -webkit-transform: translateX(-50%);
                    -ms-transform: translateX(-50%);
                    -moz-transform: translateX(-50%);
                    transform: translateX(-50%);
                }
        
        
        
                /*======================== Menu Design ==================*/
                .menu-container {
                    width: 100%;
                    float: left;
                    height: auto;
                }
        
                #menu-switcher,
                .navbar-header>label,
                .switch {
                    display: none;
                }
        
                .menu-container label::before {
                    border-bottom: 2px solid #fff;
                    box-shadow: 0 5px 0 0 #fff, 0 0 0 0 inset, 0 -5px 0 0 #fff;
                    content: "";
                    height: 0;
                    left: 50%;
                    margin-left: -10px;
                    margin-top: -1px;
                    position: absolute;
                    top: 50%;
                    width: 20px;
                }
        
                .switch {
                    width: 100%;
                    float: left;
                    height: auto;
                    min-height: 45px;
                    position: relative;
                }
        
                .menu-container label {
                    background: rgba(0, 0, 0, 0) none repeat scroll 0 0 !important;
                    cursor: pointer;
                    display: none;
                    height: 35px;
                    padding: 0;
                    position: absolute !important;
                    right: 0;
                    top: 4px;
                    width: 40px;
                    z-index: 9999;
                    border: 1px solid #fff;
                }
        
                #navbar ul {
                    width: 100%;
                    text-align: center;
                    float: left;
                    padding: 6px 0 0;
                }
        
                #navbar ul li {
                    display: inline-block;
                    margin: 0 35px;
                }
        
                #navbar ul li a {
                    font-size: 18px;
                    color: #fff;
                    line-height: 24px;
                    display: inline-block;
                    padding: 8px 0;
                    overflow: hidden;
                    position: relative;
                    transition: 0.3s ease;
                    font-weight: 600;
                    position: relative;
                    font-family: 'Open Sans', sans-serif;
                }
        
                #navbar ul li a:hover {
                    color: #ce4646;
                }
        
                #navbar ul li a::before {
                    right: 0;
                    bottom: 0;
                    position: absolute;
                    content: '';
                    height: 2px;
                    background: #ce4646;
                    -webkit-transition: all 0.3s ease-in-out;
                    -moz-transition: all 0.3s ease-in-out;
                    -ms-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                    width: 0;
                }
        
                #navbar ul li a:hover::before {
                    width: 100%;
                }
        
        
        
        
                /*========================== Content =========================*/
                .content {
                    width: 100%;
                    float: left;
                    height: auto;
                    padding: 44px 0 65px;
                    position: relative;
                    background: #fffbf4;
                }
        
                .content-inner {
                    width: 100%;
                    float: left;
                    height: auto;
                }
        
                .product-slider {
                    width: 833px;
                    float: right;
                }
        
                /* slider*/
        
                .frame {
                    width: 100%;
                    float: left;
                    height: 620px;
                    margin: 0 auto;
                    overflow: hidden;
                    position: relative;
                }
        
                .frame div {
                    margin-left: 0;
                    -webkit-transition: 1s;
                    -moz-transition: 1s;
                    -ms-transition: 1s;
                    -o-transition: 1s;
                    transition: 1s;
                    width: 5220px;
                    overflow: hidden;
                    float: left;
                    margin-top: 490px;
                    padding-left: 37px;
                    padding-right: 37px;
                }
        
                .frame .big-img {
                    position: absolute;
                    width: 833px;
                    height: 460px;
                    top: 0px;
                    right: 0px;
                    opacity: 0;
                    background: #fff;
                    border: 1px solid #c8c8c8;
                }
        
                .frame .big-img img {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    max-width: 100%;
                    max-height: 100%;
                }
        
                .frame input {
                    position: relative;
                    left: 0;
                    display: none;
                }
        
                .frame label.thumb {
                    display: block;
                    float: left;
                    height: 129px;
                    width: 178px;
                    margin-right: 13px;
                    position: relative;
                    background: #fff;
                    cursor: pointer;
                    border: 1px solid #c7c7c7;
                }
        
                .frame label.thumb img {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    max-width: 100%;
                    max-height: 100%;
                    cursor: pointer;
                }
        
                .frame label.left {
                    position: absolute;
                    left: 0;
                    bottom: 0px;
                    margin: 0;
                    cursor: pointer;
                    width: 37px;
                    height: 130px;
                    text-align: left;
                    line-height: 20px;
                    padding-left: 2px;
                    background: #fffbf4
                }
        
                .frame label.right {
                    position: absolute;
                    right: 0;
                    bottom: 0px;
                    margin: 0;
                    cursor: pointer;
                    width: 37px;
                    text-align: right;
                    height: 130px;
                    line-height: 20px;
                    padding-right: 2px;
                    background: #fffbf4;
                }
        
                label.lab4.thumb,
                label.lab8.thumb,
                label.lab12.thumb,
                label.lab16.thumb {
                    margin-right: 56px;
                }
        
                .frame label.left img,
                .frame label.right img {
                    margin-top: 55px;
                }
        
                .frame label.one,
        
                .frame label.two,
        
                .frame label.three,
        
                .frame label.four,
        
                .frame label.five,
        
                .frame label.six {
        
                    z-index: 90;
        
                }
        
                .frame input#push1:checked~label.six,
        
                .frame input#push3:checked~label.one,
        
                .frame input#push5:checked~label.two,
        
                .frame input#push7:checked~label.three,
        
                .frame input#push9:checked~label.four,
        
                .frame input#push11:checked~label.five,
        
                .frame input#push2:checked~label.two,
        
                .frame input#push4:checked~label.three,
        
                .frame input#push6:checked~label.four,
        
                .frame input#push8:checked~label.five,
        
                .frame input#push10:checked~label.six,
        
                .frame input#push12:checked~label.one {
                    z-index: 100;
                }
        
                .frame input#push3:checked~div,
                .frame input#push12:checked~div {
                    margin-left: 0px;
                }
        
                .frame input#push11:checked~div,
                .frame input#push7:checked~div,
                .frame input#push4:checked~div,
                .frame input#push8:checked~div {
                    margin-left: -1606px;
                }
        
                .frame input#push2:checked~div,
                .frame input#push10:checked~div,
                .frame input#push1:checked~div,
                .frame input#push5:checked~div {
                    margin-left: -803px;
                }
        
                .frame input#push6:checked~div,
                .frame input#push9:checked~div {
                    margin-left: -2415px;
                }
        
        
                .frame input#push12:checked~div {
                    margin-left: 0;
                }
        
                .frame input#pic1:checked~.lab1,
                .frame input#pic2:checked~.lab2,
                .frame input#pic3:checked~.lab3,
                .frame input#pic4:checked~.lab4,
                .frame input#pic5:checked~.lab5,
                .frame input#pic6:checked~.lab6,
                .frame input#pic7:checked~.lab7,
                .frame input#pic8:checked~.lab8,
                .frame input#pic9:checked~.lab9,
                .frame input#pic10:checked~.lab10,
                .frame input#pic11:checked~.lab11,
                .frame input#pic12:checked~.lab12,
                .frame input#pic13:checked~.lab13,
                .frame input#pic14:checked~.lab14,
                .frame input#pic15:checked~.lab15,
                .frame input#pic16:checked~.lab16,
                .frame input#pic17:checked~.lab17,
                .frame input#pic18:checked~.lab18,
                .frame input#pic19:checked~.lab19,
                .frame input#pic20:checked~.lab20 {
                    opacity: 1;
                    pointer-events: none;
                }
        
                .frame input#pic1:checked~.big-img.p1,
                .frame input#pic2:checked~.big-img.p2,
                .frame input#pic3:checked~.big-img.p3,
                .frame input#pic4:checked~.big-img.p4,
                .frame input#pic5:checked~.big-img.p5,
                .frame input#pic6:checked~.big-img.p6,
                .frame input#pic7:checked~.big-img.p7,
                .frame input#pic8:checked~.big-img.p8,
                .frame input#pic9:checked~.big-img.p9,
                .frame input#pic10:checked~.big-img.p10,
                .frame input#pic11:checked~.big-img.p11,
                .frame input#pic12:checked~.big-img.p12,
                .frame input#pic13:checked~.big-img.p13,
                .frame input#pic14:checked~.big-img.p14,
                .frame input#pic15:checked~.big-img.p15,
                .frame input#pic16:checked~.big-img.p16,
                .frame input#pic17:checked~.big-img.p17,
                .frame input#pic18:checked~.big-img.p18,
                .frame input#pic19:checked~.big-img.p19,
                .frame input#pic20:checked~.big-img.p20 {
                    opacity: 1;
                    z-index: 100;
                }
        
                .content .container {
                    position: relative;
                    z-index: 8;
                }
        
                .desc-right {
                    width: 350px;
                    float: left;
                    height: auto;
                    background: #524556;
                    padding: 14px 15px 18px 20px;
                }
        
                .product-info {
                    width: 100%;
                    float: left;
                    height: auto;
                }
        
                .price {
                    width: 280px;
                    float: left;
                    height: auto;
                    position: relative;
                    padding-bottom: 18px;
                    background: url(https://addtowatchlist.com/238/images/price-bg.png) no-repeat right center;
                    -webkit-background-size: 100% auto;
                    -ms-background-size: 100% auto;
                    -moz-background-size: 100% auto;
                    background-size: 100% auto;
                    padding: 15px 10px 23px 40px;
                    margin: 0 0 20px;
                }
        
                .price h4 {
                    font-size: 24px;
                    color: #fff;
                    font-family: 'Open Sans', sans-serif;
                    margin: 0;
                }
        
                .price .sale-price {
                    font-size: 60px;
                    color: #ecb4b4;
                    font-weight: 600;
                    font-family: 'Open Sans', sans-serif;
                    line-height: 60px;
                }
        
                .description {
                    width: 100%;
                    float: left;
                    height: auto;
                    position: relative;
                    margin: 0 0 15px;
                }
        
                .description p {
                    font-size: 14px;
                    color: #fff;
                    opacity: 0.7;
                    font-weight: 300;
                    line-height: 24px;
                    margin: 0 0 23px;
                    font-family: 'Open Sans', sans-serif;
                }
        
                .description h3 {
                    font-size: 14px;
                    color: #777777;
                    font-weight: 500;
                    margin: 0 0 23px;
                }
        
                ul.list {
                    display: block;
                }
        
                ul.list li {
                    font-size: 12px;
                    line-height: 19px;
                    color: #fff;
                    font-weight: 300;
                    width: 50%;
                    float: left;
                    padding-left: 10px;
                    font-family: 'Open Sans', sans-serif;
                    margin: 0 0 15px;
                    padding-right: 10px;
                    position: relative;
                }
        
                ul.list li::before {
                    width: 1px;
                    height: 19px;
                    content: '';
                    background: #fff;
                    position: absolute;
                    left: 0;
                    top: 2px;
                }
        
        
                .service-wrapper {
                    width: 100%;
                    float: left;
                    height: auto;
                }
        
                .service-list {
                    width: 100%;
                    float: left;
                    padding: 60px 0 40px;
                }
        
                .service-list li {
                    width: 33.33%;
                    float: left;
                    text-align: center;
                    padding: 0 90px;
                    position: relative;
                    z-index: 9;
                }
        
                .service-list li .icon img {
                    display: inline-block;
                    vertical-align: middle;
                    margin: 0 0 20px;
                }
        
                .service-list h3 {
                    font-size: 18px;
                    color: #3e3e3e;
                    margin: 0 0 7px;
                    font-weight: normal;
                    font-family: 'Open Sans', sans-serif;
                }
        
                .service-list p {
                    font-size: 16px;
                    color: #909090;
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }
        
                /*========================= tab-outer =====================*/
                .tab-outer {
                    width: 100%;
                    float: left;
                    height: auto;
                    background: #ce4646;
                    padding: 22px 0;
                    position: relative;
                    border-top: 11px solid #504354;
                    border-bottom: 11px solid #504354;
                }
        
                .tab-block.tabs {
                    padding: 0;
                    float: left;
                    height: auto;
                    width: 100%;
                }
        
                .tab-outer .container {
                    position: relative;
                    z-index: 3;
                }
        
                .tab-content {
                    padding: 0;
                    position: relative;
                    float: right;
                    width: 953px;
                }
        
                .tab-content .half {
                    padding-right: 15px;
                }
        
                .tab-content p:last-child {
                    margin: 0;
                }
        
                .tab-block input[type="radio"] {
                    display: none;
                }
        
                .tabs .tab-selector-1:checked~.label-block .tab-label-1,
                .tabs .tab-selector-2:checked~.label-block .tab-label-2,
                .tabs .tab-selector-3:checked~.label-block .tab-label-3,
                .tabs .tab-selector-4:checked~.label-block .tab-label-4,
                .label-block label:hover {
                    color: #ce4646;
                }
        
                .tabs .tab-selector-1:checked~.tab-content #menu1,
                .tabs .tab-selector-2:checked~.tab-content #menu2,
                .tabs .tab-selector-3:checked~.tab-content #menu3,
                .tabs .tab-selector-4:checked~.tab-content #menu4 {
                    height: auto;
                    opacity: 1;
                    width: 100%;
                    z-index: 100;
                    visibility: visible;
                    padding: 0;
                }
        
                .tab-content>.tab-pane {
                    box-sizing: border-box;
                    height: 0;
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                    opacity: 0;
                }
        
                .label-block {
                    text-align: left;
                    display: block;
                    position: relative;
                    width: 202px;
                    float: left;
                    background: #fffbf4;
                    padding: 40px 20px 12px 40px;
                }
        
                .label-block label {
                    font-size: 18px;
                    color: #ce4646;
                    line-height: 18px;
                    font-weight: 400;
                    cursor: pointer;
                    display: inline-block;
                    -webkit-transition: all 0.3s ease-in-out;
                    -ms-transition: all 0.3s ease-in-out;
                    -moz-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                    width: 100%;
                    float: left;
                    position: relative;
                    padding-bottom: 16px;
                    margin: 0 0 18px;
                    font-family: 'Open Sans', sans-serif;
                }
        
                .label-block label::before {
                    left: 0;
                    bottom: 0;
                    position: absolute;
                    content: '';
                    height: 2px;
                    background: #ce4646;
                    -webkit-transition: all 0.3s ease-in-out;
                    -moz-transition: all 0.3s ease-in-out;
                    -ms-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                    width: 0;
                }
        
                .label-block label:hover::before {
                    width: 100px;
                }
        
                .tab-content p {
                    color: #fff;
                    margin: 0 0 20px;
                    font-weight: 300;
                    font-size: 14px;
                }
        
                .tab-content ul {
                    width: 100%;
                    float: left;
                    padding: 0 0 0px 45px;
                }
        
                .tab-content ul li {
                    width: 100%;
                    float: left;
                    list-style-type: none;
                    padding-left: 18px;
                    color: #b8b8b8;
                    background: url(https://addtowatchlist.com/238/images/bullet.png) no-repeat left 7px;
                    margin: 0 0 6px;
                }
        
                .video-block {
                    float: right;
                    height: auto;
                    width: 100%;
                }
        
                video.responsive-video {
                    width: 100%;
                }
        
                .panel-left {
                    width: 50%;
                    float: left;
                    padding-right: 15px;
                }
        
                .video-block {
                    width: 50%;
                    float: left;
                    padding-left: 15px;
                }
        
                /*========================== Footer ==============*/
                .footer {
                    width: 100%;
                    float: left;
                    height: auto;
                    background: url(https://addtowatchlist.com/238/images/footer-bg.jpg) no-repeat center top;
                    -webkit-background-size: cover;
                    -ms-background-size: cover;
                    -moz-background-size: cover;
                    background-size: cover;
                    padding: 32px 0 0;
                }
        
                .footer-top {
                    width: 100%;
                    float: left;
                    height: auto;
                }
        
                .footer-logo {
                    width: 100%;
                    float: left;
                    height: auto;
                    text-align: center;
                }
        
                .footer-logo a {
                    display: inline-block;
                }
        
                .copyright {
                    width: 100%;
                    height: auto;
                    display: block;
                    float: left;
                    line-height: 21px;
                    padding: 15px 0;
                    text-align: center;
                    font-weight: 300;
                    color: #eaeaea;
                    font-size: 14px;
                    border-top: 1px solid #ffffff;
                    font-family: 'Open Sans', sans-serif;
                }
        
                .footer ul {
                    width: 100%;
                    float: right;
                    margin-top: 20px;
                    text-align: center;
                    padding-bottom: 5px;
                }
        
                .footer ul li {
                    display: inline-block;
                    margin: 0 45px;
                }
        
                .footer ul li a {
                    font-size: 18px;
                    color: #eaeaea;
                    font-family: 'Open Sans', sans-serif;
                    line-height: 35px;
                    display: inline-block;
                    position: relative;
                }
        
                .footer ul li a:hover {
                    color: #fff;
                }
        
                .footer ul li a::before {
                    right: 0;
                    bottom: 0;
                    position: absolute;
                    content: '';
                    height: 2px;
                    background: #fff;
                    -webkit-transition: all 0.3s ease-in-out;
                    -moz-transition: all 0.3s ease-in-out;
                    -ms-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                    width: 0;
                }
        
                .footer ul li a:hover::before {
                    width: 100%;
                }
        
                /*======================================== Responsive Design =============================*/
                @media only screen and (max-width: 479px) {
                    .product-info .title {
                        font-size: 25px;
                    }
        
                    .label-block label {
                        width: 100% !important;
                        margin: 0 0 10px;
                        text-align: center;
                        padding-bottom: 10px;
                    }
        
                    .product-item li {
                        width: 100% !important;
                        margin: 0 0 30px !important;
                    }
        
                    .product-item {
                        margin: 0;
                    }
        
                    .quick-links li {
                        width: 100%;
                        margin: 0;
                        text-align: left;
                        display: block;
                    }
        
                    .product-slider {
                        width: 290px;
                    }
        
                    .frame {
                        width: 290px;
                        float: none;
                        margin: 0 auto;
                        height: 262px
                    }
        
                    .frame .big-img {
                        width: 290px;
                        height: 183px;
                        top: 0px;
                        right: 0px;
                    }
        
                    .frame label.thumb {
                        height: 45px;
                        width: 51px;
                    }
        
                    .frame div {
                        margin-top: 200px;
                    }
        
                    .frame input#push3:checked~div,
                    .frame input#push12:checked~div {
                        margin-left: 0px;
                    }
        
                    .frame input#push11:checked~div,
                    .frame input#push7:checked~div,
                    .frame input#push4:checked~div,
                    .frame input#push8:checked~div {
                        margin-left: -488px;
                    }
        
                    .frame input#push2:checked~div,
                    .frame input#push10:checked~div,
                    .frame input#push1:checked~div,
                    .frame input#push5:checked~div {
                        margin-left: -244px;
                    }
        
                    .frame input#push6:checked~div,
                    .frame input#push9:checked~div {
                        margin-left: -732px;
                    }
        
                    .frame::before {
                        width: 0;
                        border: none;
                    }
        
                    .product-thumb {
                        width: 290px;
                        height: 290px;
                        display: inline-block;
                    }
        
                    .frame label.left,
                    .frame label.right {
                        height: 78px;
                    }
        
                    .frame label.left img,
                    .frame label.right img {
                        margin-top: 29px;
                    }
        
                    .frame div {
                        padding-left: 30px;
                        padding-right: 30px;
                    }
        
                    .frame label.thumb::before {
                        bottom: -4px;
                    }
        
                    .frame label.left {
                        padding-left: 8px;
                    }
        
                    .frame label.right {
                        padding-right: 8px;
                    }
        
                    ul.list li {
                        width: 100%;
                        margin: 0 0 10px;
                    }
        
                    .footer ul li {
                        width: 100%;
                        margin: 0 0 10px !important;
                    }
        
                    .header .contact-info li {
                        margin-bottom: 8px !important
                    }
        
                    .header-right,
                    .header-left {
                        font-size: 14px;
                    }
        
                    .price {
                        width: 258px;
                        padding-left: 30px;
                    }
        
                    .content {
                        padding-bottom: 15px !important;
                    }
        
                }
        
                @media only screen and (min-width: 480px) and (max-width:639px) {
                    .product-slider {
                        width: 450px;
                        float: left;
                        height: auto;
                        margin: 0 auto;
                        float: none;
                    }
        
                    .label-block label {
                        margin: 0 15px;
                    }
        
                    .quick-links li {
                        margin: 0 15px;
                    }
        
                    ul.list li {
                        padding-right: 10px;
                    }
        
                    .frame label.left,
                    .frame label.right {
                        height: 100px;
                    }
        
                    .frame {
                        width: 450px;
                        float: none;
                        margin: 0 auto;
                        height: 380px
                    }
        
                    .frame .big-img {
                        width: 450px;
                        height: 265px;
                    }
        
                    .frame label.thumb {
                        height: 78px;
                        width: 91px;
                    }
        
                    .frame label.left img,
                    .frame label.right img {
                        margin-top: 37px;
                    }
        
                    .frame::before {
                        width: 0;
                        border: none;
                    }
        
                    .frame div {
                        margin-top: 290px;
                    }
        
                    .frame input#push3:checked~div,
                    .frame input#push12:checked~div {
                        margin-left: 0px;
                    }
        
                    .frame input#push11:checked~div,
                    .frame input#push7:checked~div,
                    .frame input#push4:checked~div,
                    .frame input#push8:checked~div {
                        margin-left: -808px;
                    }
        
                    .frame input#push2:checked~div,
                    .frame input#push10:checked~div,
                    .frame input#push1:checked~div,
                    .frame input#push5:checked~div {
                        margin-left: -404px;
                    }
        
                    .frame input#push6:checked~div,
                    .frame input#push9:checked~div {
                        margin-left: -1212px;
                    }
        
                    .product-thumb {
                        width: 215px;
                        height: 215px;
                        display: inline-block;
                    }
        
                    .product-item li:last-child {
                        margin: 0;
                    }
        
        
                }
        
                @media only screen and (max-width: 639px) {
                    .header .info-list {
                        width: 290px;
                        float: none;
                        text-align: left;
                        display: block;
                        margin: 0 auto;
                    }
        
                    .header .info-list li {
                        margin: 0 0 10px !important;
                    }
        
                    .half {
                        width: 100%;
                    }
        
                    .footer .info-list {
                        width: 290px;
                        float: none;
                        text-align: left;
                        display: block;
                        margin: 0 auto;
                    }
        
                    .footer .info-list li {
                        margin: 0 0 10px !important;
                    }
        
                    .product-item li p {
                        font-size: 16px;
                    }
        
                    .product-item li h3 {
                        font-size: 30px;
                    }
        
                    .price .sale-price {
                        font-size: 38px;
                    }
        
                    .frame div {
                        padding-left: 28px;
                        padding-right: 28px;
                    }
        
                    .frame label.left {
                        width: 28px;
                    }
        
                    .frame label.right {
                        width: 28px;
                    }
        
                    .frame label.thumb {
                        margin-right: 10px;
                    }
        
                }
        
                @media only screen and (min-width: 640px) and (max-width:767px) {
                    .half .list-block:last-child {
                        border: none;
                    }
        
                    .label-block label {
                        margin: 0 15px;
                        display: inline-block;
                        width: auto;
                        float: none;
                    }
        
                    .product-slider {
                        width: 610px;
                        float: none;
                        height: auto;
                        margin: 0 auto;
                    }
        
                    .frame {
                        float: none;
                    }
        
                    .product-thumb {
                        width: 288px;
                        height: 288px;
                        display: inline-block;
                    }
        
                    .product-item li:last-child {
                        margin: 0;
                    }
        
                    .frame .big-img {
                        width: 610px;
                    }
        
                    .frame label.thumb {
                        width: 124px;
                    }
        
                    .frame input#push3:checked~div,
                    .frame input#push12:checked~div {
                        margin-left: 0px;
                    }
        
                    .frame input#push11:checked~div,
                    .frame input#push7:checked~div,
                    .frame input#push4:checked~div,
                    .frame input#push8:checked~div {
                        margin-left: -1182px;
                    }
        
                    .frame input#push2:checked~div,
                    .frame input#push10:checked~div,
                    .frame input#push1:checked~div,
                    .frame input#push5:checked~div {
                        margin-left: -590px;
                    }
        
                    .frame input#push6:checked~div,
                    .frame input#push9:checked~div {
                        margin-left: -1772px;
                    }
        
                }
        
                @media only screen and (max-width: 767px) {
                    .container {
                        width: 100%;
                        padding: 0 15px;
                    }
        
                    .header-right {
                        padding: 0;
                    }
        
                    #navbar ul {
                        margin: 0;
                    }
        
                    .navbar-header>label,
                    .switch,
                    .menu-container label {
                        display: block;
                    }
        
                    #navbar {
                        display: none;
                    }
        
                    #menu-switcher:checked+#navbar {
                        display: block;
                    }
        
                    .product-item li {
                        width: 48%;
                        margin: 0 4% 30px 0;
                        float: left;
                        background-position: center bottom 10px;
                    }
        
                    .header-right {
                        width: 100%;
                        float: left;
                    }
        
                    .menu-container {
                        position: relative;
                        padding: 8px 0;
                        float: left;
                        width: 100%;
                    }
        
                    #navbar ul li {
                        width: 100%;
                        float: left;
                        text-align: left;
                    }
        
                    #navbar ul li a {
                        padding: 8px 0;
                        display: inline-block;
                    }
        
                    .content-inner {
                        padding: 0;
                    }
        
                    .desc-right {
                        width: 100%;
                        margin: 0 0 30px;
                    }
        
                    .list-block.size a {
                        margin-right: 10px;
                    }
        
                    .service-list {
                        padding: 30px 0px;
                    }
        
                    .service-list h3 {
                        font-size: 18px;
                    }
        
                    .service-list li {
                        width: 100%;
                        padding: 0 0 30px;
                        text-align: center;
                    }
        
                    .service-list li::after {
                        background: none;
                    }
        
                    .footer-logo {
                        text-align: center;
                    }
        
                    .footer ul {
                        width: 100%;
                        text-align: center;
                    }
        
                    .footer-top {
                        padding: 0 0 15px;
                    }
        
                    .footer ul li {
                        float: none;
                        display: inline-block;
                    }
        
                    .content {
                        padding: 30px 0 30px;
                    }
        
                    .tab-content {
                        padding: 0px 0 0px;
                        width: 100%;
                    }
        
                    .label-block label {
                        display: inline-block;
                        width: auto;
                        float: none;
                    }
        
                    .tab-block.tabs {
                        padding: 0;
        
                    }
        
        
                    .label-block label:hover::before {
                        width: 100%
                    }
        
                    .label-block {
                        width: 100%;
                        text-align: center;
                        padding: 5px 0;
                        margin: 0 0 20px;
                    }
        
                    .tab-content .half {
                        width: 100%;
                        padding: 0;
                    }
        
                    .tab-content p:last-child {
                        margin: 0 0 20px;
                    }
        
                    .label-block label {
                        padding: 10px 0;
                    }
        
                    .header ul {
                        float: left;
                        text-align: center;
                    }
        
                    .header ul li {
                        width: auto;
                        text-align: center;
                        display: inline-block;
                        margin: 0 10px !important;
                    }
        
                    .panel-left {
                        width: 100%;
                        padding: 0 0 30px;
                    }
        
                    .video-block {
                        width: 100%;
                        padding: 0;
                    }
        
                    .product-slider {
                        margin: 0 auto;
                    }
        
                    .header ul {
                        padding: 0;
                        width: 100%;
                        text-align: center;
                    }
        
                    .footer-logo {
                        width: 100%;
                        padding: 0;
                    }
        
                    .quick-link {
                        width: 100%;
                        margin: 10px 0 0;
                    }
        
                    .quick-link li {
                        margin: 0 10px;
                    }
        
                    .logo {
                        padding: 10px 0;
                        text-align: left;
                        width: auto;
                        position: relative;
                        transform: unset;
                        left: 15px;
                        top: 10px;
                        padding: 0;
                        float: left;
                    }
        
                    #navbar ul.pull-left,
                    #navbar ul.pull-right {
                        width: 100%;
                        padding: 0;
                    }
        
                    .tab-outer {
                        padding: 25px 0;
                    }
        
                    .footer ul li {
                        font-size: 14px;
                        margin: 0 10px;
                    }
        
                    .copyright {
                        font-size: 14px;
                    }
        
                    .footer {
                        padding-top: 60px;
                    }
        
                    .header-left {
                        width: 100%;
                        text-align: center;
                        border-bottom: none;
                        border-right: none;
                    }
        
                    .header-right {
                        border-left: none;
                    }
        
                    #navbar ul {
                        width: 100%;
                    }
        
                    .header #navbar ul li {
                        margin: 0 !important;
                    }
        
                    .header-logo {
                        left: 15px;
                        top: 109px;
                        transform: unset;
                        z-index: 9999;
                    }
        
                    .switch {
                        right: 15px;
                    }
        
                    #navbar {
                        position: absolute;
                        left: -1px;
                        right: -1px;
                        background: #fff;
                        top: 62px;
                        z-index: 9999;
                        background: rgba(55, 71, 79, 0.61);
                        padding: 0 15px;
                        border: 1px solid rgba(255, 255, 255, 0.61);
                        border-top: none;
                    }
        
                }
        
        
        
                @media only screen and (min-width: 768px) and (max-width:991px) {
                    .container {
                        width: 750px;
                    }
        
                    #navbar ul.pull-right {
                        width: auto;
                        text-align: right;
        
                    }
        
                    #navbar ul.pull-left {
                        width: auto;
                        text-align: left;
        
                    }
        
                    .content-inner {
                        padding: 0;
                    }
        
                    .desc-right {
                        width: 100%;
                    }
        
                    .service-list li {
                        padding: 0 20px;
                    }
        
                    #navbar .pull-left li {
                        margin-left: 0px;
                    }
        
                    #navbar .pull-right li {
                        margin-right: 0px;
                    }
        
                    .content {
                        padding: 35px 0 40px;
                    }
        
                    .tab-content {
                        padding: 0;
                    }
        
                    .header-right {
                        width: 70%;
                    }
        
                    #navbar ul li {
                        margin: 0 15px;
                    }
        
                    .tab-block.tabs {
                        padding: 0;
                    }
        
                    .tab-content {
                        width: 530px;
                    }
        
                    .product-slider {
                        width: 750px;
                        float: right;
                        margin: 30px 0 0;
                    }
        
                    .frame .big-img {
                        width: 750px;
                    }
        
                    .frame label.thumb {
                        width: 159px;
                    }
        
                    .frame input#push3:checked~div,
                    .frame input#push12:checked~div {
                        margin-left: 0px;
                    }
        
                    .frame input#push11:checked~div,
                    .frame input#push7:checked~div,
                    .frame input#push4:checked~div,
                    .frame input#push8:checked~div {
                        margin-left: -1462px;
                    }
        
                    .frame input#push2:checked~div,
                    .frame input#push10:checked~div,
                    .frame input#push1:checked~div,
                    .frame input#push5:checked~div {
                        margin-left: -730px;
                    }
        
                    .frame input#push6:checked~div,
                    .frame input#push9:checked~div {
                        margin-left: -2192px;
                    }
        
                    .frame input#push12:checked~div {
                        margin-left: 0;
                    }
        
        
                    .header-left,
                    .header-right {
                        width: 250px;
                        font-size: 14px;
                    }
                }
        
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                    .container {
                        width: 970px;
                    }
        
                    #navbar ul.pull-right {
                        width: auto;
                        text-align: right;
        
                    }
        
                    #navbar ul.pull-left {
                        width: auto;
                        text-align: left;
        
                    }
        
                    .content-inner {
                        padding: 0;
                    }
        
                    .tab-content {
                        width: 735px;
                    }
        
                    .product-slider {
                        width: 600px;
                        float: right;
                    }
        
                    .frame .big-img {
                        width: 600px;
                    }
        
                    .frame label.thumb {
                        width: 121px;
                    }
        
                    .frame input#push3:checked~div,
                    .frame input#push12:checked~div {
                        margin-left: 0px;
                    }
        
                    .frame input#push11:checked~div,
                    .frame input#push7:checked~div,
                    .frame input#push4:checked~div,
                    .frame input#push8:checked~div {
                        margin-left: -1156px;
                    }
        
                    .frame input#push2:checked~div,
                    .frame input#push10:checked~div,
                    .frame input#push1:checked~div,
                    .frame input#push5:checked~div {
                        margin-left: -578px;
                    }
        
                    .frame input#push6:checked~div,
                    .frame input#push9:checked~div {
                        margin-left: -1734px;
                    }
        
                    .frame input#push12:checked~div {
                        margin-left: 0;
                    }
        
        
                    .header-left,
                    .header-right {
                        width: 350px;
                    }
        
                    .service-list li {
                        padding: 0 25px;
                    }
        
                }
        
                @media only screen and (min-width: 1200px) {}
        
                @media only screen and (min-width: 1200px) and (max-width: 1349px) {}
            </style>
        </html>`
    }
}