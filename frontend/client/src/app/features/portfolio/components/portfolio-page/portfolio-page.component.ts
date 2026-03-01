import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { PortfolioData } from '../../../../shared/models/portfolio.model';

const noUrlValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = String(control.value || '').toLowerCase();
  return value.includes('http://') || value.includes('https://') ? { noUrl: true } : null;
};

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.css',
  standalone: false
})
export class PortfolioPageComponent implements OnInit {
  data: PortfolioData | null = null;
  isLoading = true;
  loadError = '';

  contactModel = {
    name: '',
    email: '',
    message: ''
  };

  contactValidationForm;

  formError = '';
  submitted = false;

  constructor(
    private portfolioService: PortfolioService,
    private formBuilder: FormBuilder
  ) {
    this.contactValidationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(20), noUrlValidator]]
    });
  }

  ngOnInit(): void {
    this.reloadPortfolio();
  }

  reloadPortfolio(): void {
    this.isLoading = true;
    this.loadError = '';

    this.portfolioService.getPortfolioData().subscribe({
      next: (response) => {
        this.data = response;
        this.isLoading = false;
      },
      error: () => {
        this.loadError = 'Could not load portfolio content. Please refresh the page.';
        this.isLoading = false;
      }
    });
  }

  submitContactForm(form: NgForm): void {
    this.submitted = true;
    this.formError = '';

    this.contactValidationForm.patchValue(this.contactModel);

    if (form.invalid || this.contactValidationForm.invalid) {
      this.contactValidationForm.markAllAsTouched();
      this.formError = 'Please complete all fields with valid information.';
      return;
    }

    form.resetForm();
    this.contactValidationForm.reset();
    this.submitted = false;
  }
}
