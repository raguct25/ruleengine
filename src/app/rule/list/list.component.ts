// From packages
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// From local files
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public rulesList = [];

  constructor(private router: Router, private ruleService: RuleService) {}

  ngOnInit() {
    this.ruleService
      .fetchRules()
      .subscribe((data: any) => (this.rulesList = data));
  }

  gotoAddRule() {
    this.router.navigate(['/rule/new']);
  }

  gotoRuleEdit() {
    const id = 10;
    this.router.navigate(['/rule/edit', id]);
  }
}
