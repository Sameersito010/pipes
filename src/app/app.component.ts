import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pipe';
  title1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam autem perspiciatis qui veniam unde consequuntur ipsum, mollitia, nesciunt ex velit optio impedit, temporibus voluptatibus pariatur architecto possimus dolorum eligendi?'

  course={
    title:"Mean Stack",
    student:12345,
    rating:4.5235,
    price:199.99,
    releaseDate:new Date(2024,1,4)
  }


   filesArray=[
  {
    fileName:'AnnualData',
    type:'pdf',
    size:78958309
  },
  {
    fileName:'Payslip-2024',
    type:'excel',
    size:672349098
  },
  {
    fileName:'Attrition',
    type:'word',
    size:9847579049
  },
]
}

