import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent implements OnInit {
  @Input('plan_name') plan_name;
  @Input('price') price;
  @Input('num') num;
  data:any;
  dataList = [
    {
      name: "FREE",
      price: 0,
      single_user: true,
      gb5_storage: true,
      unlimited_public_projects: true,
      comm_access: true,
      unlimited_private_projects: false,
      dedicated_phone_support: false,
      free_subdomain: false,
      monthly_stat_report: false
    },
    {
      name: "PLUS",
      price: 9,
      single_user: true,
      gb5_storage: true,
      unlimited_public_projects: true,
      comm_access: true,
      unlimited_private_projects: true,
      dedicated_phone_support: true,
      free_subdomain: true,
      monthly_stat_report: false
    },
    {
      name: "PRO",
      price: 49,
      single_user: true,
      gb5_storage: true,
      unlimited_public_projects: true,
      comm_access: true,
      unlimited_private_projects: true,
      dedicated_phone_support: true,
      free_subdomain: true,
      monthly_stat_report: true
    }
  ];
  
  constructor() {
    
   }

  ngOnInit(): void {
    this.data = this.dataList[this.num];
    console.log(this.data);
  }

}
