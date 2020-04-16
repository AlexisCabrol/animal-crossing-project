import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {News} from "../../models/News";
import {NewsService} from "../../services/news.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent implements OnInit {

  public postNewsForm: FormGroup;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private newsService: NewsService,
              private router: Router,
              private toastrService: ToastrService,
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.postNewsForm = this.formBuilder.group({
      titre: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      contenu: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  public getFormField() {
    return this.postNewsForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;

    // On vérifie le bon état du formulaire
    if (this.postNewsForm.invalid) {
      return;
    }

    const news = new News();
    news.titre = this.postNewsForm.value['titre'];
    news.description = this.postNewsForm.value['description'];
    news.contenu = this.postNewsForm.value['contenu'];

    this.newsService.posterUneNews(news).subscribe(() => {
      this.translateService.get('success.post-news').subscribe((texte: string) => {
        this.toastrService.success(texte);
      });
      this.router.navigate(['accueil']);
    });
  }

}
