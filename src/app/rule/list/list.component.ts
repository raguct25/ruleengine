import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RuleList } from '../rule.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  rulesList: RuleList[] = [
    {
      sno: 1,
      name: 'rule 1',
      description: 'description 1'
    },
    {
      sno: 2,
      name: 'rule 2',
      description: 'description 2'
    },
    {
      sno: 3,
      name: 'rule 3',
      description: 'description 3'
    },
    {
      sno: 4,
      name: 'rule 4',
      description: 'description 4'
    },
    {
      sno: 5,
      name: 'rule 5',
      description: 'description 5'
    },
    {
      sno: 6,
      name: 'rule 6',
      description: 'description 6'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  gotoAddRule() {
    this.router.navigate(['/rule/new']);
  }

  gotoRuleEdit() {
    const id = 10;
    this.router.navigate(['/rule/edit', id]);
  }
}
