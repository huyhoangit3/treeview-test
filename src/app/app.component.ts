import { Component, OnInit } from '@angular/core';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';
import { Organization } from './model/organization.model';
import { OrganizationItem } from './model/organizationItem.model';
import { OrganizationService } from './service/organization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private orgService: OrganizationService) {}

  org!: Organization;
  orgItems: OrganizationItem[] = [];
  items!: TreeviewItem[];
  config: TreeviewConfig = {
    hasAllCheckBox: false,
    hasFilter: true,
    hasCollapseExpand: false,
    decoupleChildFromParent: true,
    maxHeight: 500,
    hasDivider: false,
  };

  ngOnInit(): void {
    this.orgService
      .getOrganizations(1)
      .then((res) => {
        this.org = res;
        console.log(this.org);
        this.convert(res)
        console.log(this.orgItems);
        this.fillChildren(this.orgItems[0])
        console.log({...this.orgItems[0]});
        this.items = [new TreeviewItem({...this.orgItems[0]})]
      })
      .catch((err) => console.log('Error occured', err));
  }

  convert(org: Organization) {
    let orgItem: OrganizationItem = {
      text: org.name,
      value: org.path,
      id: org.id
    }
    this.orgItems.push(orgItem);

    if(org.children != null) {
      for (let i of org.children) {
        this.convert(i)
      }
    }
  }

  fillChildren(orgItem: OrganizationItem) {
    const abc = this.orgItems.slice(1).filter(item => {
      return item.value.endsWith(orgItem.id + "/");
    });
    if(abc != null) {
      orgItem.children = [...abc];
      for (let i of abc) {
        this.fillChildren(i)
      }
    }
  }
}
