import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { RuleService } from '../rule.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  isLoading = false;
  errorMessages = [];
  id: number;
  routeId: Subscription;
  subscription: Subscription;

  rulesEditForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(200)]],
    description: ['', [Validators.required, Validators.maxLength(1000)]]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private ruleService: RuleService
  ) {}

  ngOnInit() {
    this.routeId = this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.subscription = this.ruleService.fetchRuleById(this.id).subscribe(
      data => {
        this.rulesEditForm.patchValue({
          name: data.name,
          description: data.description
        });
      },
      error => {
        this.toast.error(error.message);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.routeId.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/rule']);
  }

  get name() {
    return this.rulesEditForm.get('name');
  }

  get description() {
    return this.rulesEditForm.get('description');
  }

  onSubmit() {
    this.isLoading = true;
    const params = {
      rule: {
        name: this.rulesEditForm.value.name,
        description: this.rulesEditForm.value.description
      }
    };

    this.ruleService.editRules(this.id, params).subscribe(
      () => {
        this.rulesEditForm.reset();
        this.toast.success('Rule edited successfully !');
        this.isLoading = false;
        this.goBack();
      },
      error => {
        this.isLoading = false;
        if (error.hasValidationError) {
          this.errorMessages = error.errorList;
        } else {
          this.toast.error(error.message);
        }
      }
    );
  }
}
