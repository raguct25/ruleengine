// From packages
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// From local files
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public rulesList = [];
  errorMessages = [];

  constructor(
    private router: Router,
    private ruleService: RuleService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.ruleService
      .fetchRules()
      .subscribe((data: any) => (this.rulesList = data));
  }

  gotoAddRule() {
    this.router.navigate(['/rule/new']);
  }

  gotoRuleEdit(id: number) {
    this.router.navigate(['/rule/edit', id]);
  }

  gotoRuleDelete(id: number) {
    const params = {
      ids: id.toString()
    };
    this.ruleService.deleteRule(params).subscribe(
      () => {
        this.toast.success('Rule deleted successfully !');
        this.router.navigate(['/rule']);
      },
      error => {
        if (error.hasValidationError) {
          this.errorMessages = error.errorList;
        } else {
          this.toast.error(error.message);
        }
      }
    );
  }
}
