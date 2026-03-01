import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { PortfolioData } from '../../../../shared/models/portfolio.model';

@Component({
  selector: 'app-dashboard-editor',
  templateUrl: './dashboard-editor.component.html',
  styleUrl: './dashboard-editor.component.css',
  standalone: false
})
export class DashboardEditorComponent implements OnInit {
  editorForm: FormGroup;

  errorMessage = '';
  successMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private portfolioService: PortfolioService,
    private router: Router
  ) {
    this.editorForm = this.formBuilder.group({
      hero: this.formBuilder.group({
        name: ['', [Validators.required]],
        title: ['', [Validators.required]],
        subtitle: ['', [Validators.required]],
        intro: [''],
        cvUrl: [''],
        image: ['', [Validators.required]]
      }),
      about: this.formBuilder.group({
        heading: ['', [Validators.required]],
        subheading: ['', [Validators.required]],
        paragraphs: this.formBuilder.array([]),
        stats: this.formBuilder.array([])
      }),
      skills: this.formBuilder.group({
        heading: ['', [Validators.required]],
        subtitle: ['', [Validators.required]],
        items: this.formBuilder.array([])
      }),
      projects: this.formBuilder.group({
        heading: ['', [Validators.required]],
        subtitle: ['', [Validators.required]],
        items: this.formBuilder.array([])
      }),
      contact: this.formBuilder.group({
        heading: ['', [Validators.required]],
        subtitle: ['', [Validators.required]],
        info: this.formBuilder.group({
          email: ['', [Validators.required]],
          phone: ['', [Validators.required]],
          location: ['', [Validators.required]]
        })
      })
    });
  }

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent(): void {
    this.portfolioService.getPortfolioData().subscribe((data) => {
      this.setFormData(data);
    });
  }

  saveContent(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.editorForm.invalid) {
      this.editorForm.markAllAsTouched();
      this.errorMessage = 'Please fill all required fields before saving.';
      return;
    }

    const data = this.editorForm.getRawValue() as PortfolioData;
    if (!this.isValidPortfolioData(data)) {
      this.errorMessage = 'Invalid content structure. Please review required sections.';
      return;
    }

    this.portfolioService.updatePortfolioData(data);
    this.successMessage = 'Saved successfully. Open portfolio to view changes.';
  }

  resetContent(): void {
    this.portfolioService.resetPortfolioData();
    this.loadContent();
    this.successMessage = 'Portfolio content reset to default.';
    this.errorMessage = '';
  }

  goToPortfolio(): void {
    this.router.navigate(['/']);
  }

  get aboutParagraphs(): FormArray {
    return this.editorForm.get('about.paragraphs') as FormArray;
  }

  get aboutStats(): FormArray {
    return this.editorForm.get('about.stats') as FormArray;
  }

  get skillItems(): FormArray {
    return this.editorForm.get('skills.items') as FormArray;
  }

  get projectItems(): FormArray {
    return this.editorForm.get('projects.items') as FormArray;
  }

  getTechArray(projectIndex: number): FormArray {
    return this.projectItems.at(projectIndex).get('tech') as FormArray;
  }

  addParagraph(value = ''): void {
    this.aboutParagraphs.push(this.formBuilder.control(value, [Validators.required]));
  }

  removeParagraph(index: number): void {
    this.aboutParagraphs.removeAt(index);
  }

  addStat(value = '', label = ''): void {
    this.aboutStats.push(
      this.formBuilder.group({
        value: [value, [Validators.required]],
        label: [label, [Validators.required]]
      })
    );
  }

  removeStat(index: number): void {
    this.aboutStats.removeAt(index);
  }

  addSkill(name = '', level = 80, colorClass = 'cyan-fill'): void {
    this.skillItems.push(
      this.formBuilder.group({
        name: [name, [Validators.required]],
        level: [level, [Validators.required, Validators.min(0), Validators.max(100)]],
        colorClass: [colorClass, [Validators.required]]
      })
    );
  }

  removeSkill(index: number): void {
    this.skillItems.removeAt(index);
  }

  addProject(title = '', description = '', image = '', tech: string[] = []): void {
    this.projectItems.push(
      this.formBuilder.group({
        title: [title, [Validators.required]],
        description: [description, [Validators.required]],
        image: [image, [Validators.required]],
        demoUrl: [''],
        tech: this.formBuilder.array(tech.map((item) => this.formBuilder.control(item, [Validators.required])))
      })
    );
  }

  removeProject(index: number): void {
    this.projectItems.removeAt(index);
  }

  addTech(projectIndex: number, value = ''): void {
    this.getTechArray(projectIndex).push(this.formBuilder.control(value, [Validators.required]));
  }

  removeTech(projectIndex: number, techIndex: number): void {
    this.getTechArray(projectIndex).removeAt(techIndex);
  }

  onHeroImageFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    this.readFileAsDataUrl(file, (dataUrl) => {
      this.editorForm.get('hero.image')?.setValue(dataUrl);
    });
    input.value = '';
  }

  onProjectImageFileSelected(projectIndex: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    this.readFileAsDataUrl(file, (dataUrl) => {
      this.projectItems.at(projectIndex).get('image')?.setValue(dataUrl);
    });
    input.value = '';
  }

  onCvFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    this.readFileAsDataUrl(file, (dataUrl) => {
      this.editorForm.get('hero.cvUrl')?.setValue(dataUrl);
    });
    input.value = '';
  }

  private setFormData(data: PortfolioData): void {
    this.editorForm.patchValue({
      hero: data.hero,
      about: {
        heading: data.about.heading,
        subheading: data.about.subheading
      },
      skills: {
        heading: data.skills.heading,
        subtitle: data.skills.subtitle
      },
      projects: {
        heading: data.projects.heading,
        subtitle: data.projects.subtitle
      },
      contact: data.contact
    });

    this.resetArray(this.aboutParagraphs);
    data.about.paragraphs.forEach((paragraph) => this.addParagraph(paragraph));

    this.resetArray(this.aboutStats);
    data.about.stats.forEach((stat) => this.addStat(stat.value, stat.label));

    this.resetArray(this.skillItems);
    data.skills.items.forEach((item) => this.addSkill(item.name, item.level, item.colorClass));

    this.resetArray(this.projectItems);
    data.projects.items.forEach((item) => {
      this.addProject(item.title, item.description, item.image, item.tech);
      const lastIndex = this.projectItems.length - 1;
      this.projectItems.at(lastIndex).get('demoUrl')?.setValue(item.demoUrl || '');
    });
  }

  private resetArray(formArray: FormArray): void {
    while (formArray.length > 0) {
      formArray.removeAt(0);
    }
  }

  private readFileAsDataUrl(file: File, onLoad: (dataUrl: string) => void): void {
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (result) {
        onLoad(result);
      }
    };
    reader.readAsDataURL(file);
  }

  private isValidPortfolioData(data: PortfolioData): boolean {
    return Boolean(data?.hero && data?.about && data?.skills && data?.projects && data?.contact);
  }
}
