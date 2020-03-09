import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { RuleService } from '../rule.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isLoading = false;
  errorMessages = [];

  rulesForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(200)]],
    description: ['', [Validators.required, Validators.maxLength(1000)]]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ruleService: RuleService,
    private toast: ToastrService,
  ) {}

  ngOnInit() {}

  get name() {
    return this.rulesForm.get('name');
  }

  get description() {
    return this.rulesForm.get('description');
  }

  goBack() {
    this.router.navigate(['/rule']);
  }

  onSubmit() {
    this.isLoading = true;
    const params = {
      rule: {
        name: this.rulesForm.value.name,
        description: this.rulesForm.value.description
      }
    };

    this.ruleService.addRules(params).subscribe(
      () => {
        this.rulesForm.reset();
        this.toast.success('Rule added successfully !');
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
