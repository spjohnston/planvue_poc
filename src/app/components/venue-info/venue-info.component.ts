import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Venue } from 'src/app/models/venue';

@Component({
  selector: 'app-venue-info',
  templateUrl: './venue-info.component.html',
  styleUrls: ['./venue-info.component.css']
})
export class VenueInfoComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  
  @ViewChild('imageSelector') 
  imageSelector!: ElementRef;

  venuForm!:FormGroup;

  ngOnInit(): void {
    this.buildForm();
    this.route.parent?.data
        .subscribe((data) => {
          const venue:Venue = data['venue'];
          const formValue = (({createdBy,createdOn,modifiedBy,modifiedOn, ...o}) => o)(venue);
          this.venuForm.setValue(formValue);
        });
  }

  buildForm():FormGroup {
    return this.venuForm = this.formBuilder.group({
      id: [{value: '', disabled: true}],
      name: ['', [Validators.required]],
      active: false,
      imageUri: ['', [Validators.required]]
    });
  }

  hasImage():boolean {
    return !this.venuForm.get('imageUri')?.invalid ?? false;
  }

  selectVenueImage():void {
    this.imageSelector.nativeElement.click();
  }

  imageSelected(event:Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      const reader = new FileReader();
      reader.readAsDataURL(fileList[0]);
      reader.onload = (event:any) => {
      };
    }
  }

  getImage():string {
    return this.venuForm.get('imageUri')?.value ?? '';
  }
}
