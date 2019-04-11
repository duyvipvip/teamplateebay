import { Component, OnInit } from '@angular/core';
import { interteamplate } from '../share/share';
import { template1Service } from '../template1/template1';

@Component({
    selector: 'app-templateebay',
    templateUrl: './templateebay.component.html',
    styleUrls: ['./templateebay.component.scss']
})
export class TemplateebayComponent implements OnInit {
    public model: interteamplate;
    public result: string = '';
    public stringhinhanh: string = '';
    public arrAccount: any = [];
    public idAccount: string = '0';
    constructor(private template1Service: template1Service) { }

    ngOnInit() {
        this.model = {
            title: '',
            logo: 'https://www.co.pierce.wa.us/images/CivicAlerts/1/_no%20scam.png',
            price: '',
            arrHinhanh: [],
            description: '',
            videolink: '',
            fastshipping: '',
            customersupport: '',
            day30: '',
            linkebay_listting: 'https://www.ebay.com/sch/shophill/m.html?_nkw=&_armrs=1&_ipg=&_from=',
            linkebay_about: 'https://www.ebay.com/usr/shophill',
            linkebay_feedback: 'https://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&userid=shophill&myworld=true&items=25&iid=-1&de=off&which=positive&interval=365',
            linkebay_contact: 'https://contact.ebay.com/ws/eBayISAPI.dll?FindAnswers&frm=284&requested=shophill',
        }

        // ASIGN ACCOUNT
        this.arrAccount = [{
            name: 'duyvipvip345',
            id: 0,
        },{
            name: 'chauphuchiep',
            id: 1,
        },{
            name: 'nguyenvubet',
            id: 2,
        }]
    }

    submit(){
        this.result = this.template1Service.tempalte1(this.model);
    }

    deleteArrImage(index){
        let result = [];
        for(let i=0; i< this.model.arrHinhanh.length; i++){
            if(i != index){
                result.push(this.model.arrHinhanh[i]);
            }
        }
        this.model.arrHinhanh = result;
    }

    changeAcount(){
        if(this.idAccount == '0'){
            this.model.linkebay_listting = 'https://www.ebay.com/sch/shophill/m.html?_nkw=&_armrs=1&_ipg=&_from=';
            this.model.linkebay_about = 'https://www.ebay.com/usr/shophill';
            this.model.linkebay_feedback = 'https://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&userid=shophill&myworld=true&items=25&iid=-1&de=off&which=positive&interval=365';
            this.model.linkebay_contact = 'https://contact.ebay.com/ws/eBayISAPI.dll?FindAnswers&frm=284&requested=shophill';
        }
        if(this.idAccount == '1'){
            this.model.linkebay_listting = 'https://www.ebay.com/sch/chauhi0/m.html?_nkw=&_armrs=1&_ipg=&_from=';
            this.model.linkebay_about = 'https://www.ebay.com/usr/chauhi0';
            this.model.linkebay_feedback = 'https://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&userid=chauhi0&myworld=true&items=25&iid=-1&de=off&which=positive&interval=365';
            this.model.linkebay_contact = 'https://contact.ebay.com/ws/eBayISAPI.dll?FindAnswers&frm=284&requested=chauhi0';
        }
        if(this.idAccount == '2'){
            this.model.linkebay_listting = 'https://www.ebay.com/sch/nguvu_92/m.html?_nkw=&_armrs=1&_ipg=&_from=';
            this.model.linkebay_about = 'https://www.ebay.com/usr/nguvu_92';
            this.model.linkebay_feedback = 'https://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&userid=nguvu_92&myworld=true&items=25&iid=-1&de=off&which=positive&interval=365';
            this.model.linkebay_contact = 'https://contact.ebay.com/ws/eBayISAPI.dll?FindAnswers&frm=284&requested=nguvu_92';
        }
    }

    addArrImage(){
        if(this.stringhinhanh){
            this.model.arrHinhanh.push({name: this.stringhinhanh});
            this.stringhinhanh = '';
        }
    }

}
