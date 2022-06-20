import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Bankclient } from '../models/bankclient';
import { Bankaccount } from '../models/bankaccount';
import { BankclientService } from '../services/bankclient.service';
import { BankaccountService } from '../services/bankaccount.service';

@Component({
  selector: 'app-bankclient-form',
  templateUrl: './bankclient-form.component.html',
  styleUrls: ['./bankclient-form.component.css']
})
export class BankclientFormComponent implements OnInit {

  bankclientForm!: FormGroup;
  bankclients: Bankclient[] = [];
  bankaccounts : Bankaccount[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private bankclientService: BankclientService,
    private bankaccountService : BankaccountService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  get f(): { [key: string]: AbstractControl } {
    return this.bankclientForm.controls;
  }


  async ngOnInit() {

    this.bankclientForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      location: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      phoneNumber: ['', Validators.required],
      accountnumber: ['', Validators.compose([Validators.pattern('[0-9]{6}'), Validators.required])]
    });

    this.bankaccounts = await  this.bankaccountService.getAllBankAccounts();


    const id = this.activatedroute.snapshot.queryParams['id'];
    this.bankclients = await this.bankclientService.getAllBankclients();
    
    if (id) {
      const bankclient = await this.bankclientService.getBankclientByID(id);
      this.bankclientForm.controls['id'].setValue(bankclient?.id);
      this.bankclientForm.controls['nev'].setValue(bankclient?.name);
      this.bankclientForm.controls['szuletesihely'].setValue(bankclient?.location);
      this.bankclientForm.controls['phonenumber'].setValue(bankclient?.phonenumber);
      this.bankclientForm.controls['accountnumber'].setValue(bankclient?.accountnumber);
    }
    else {
     // this.bankclientForm.controls['accountnumber'].addValidators(this.clientAleardyExists(this.bankclients))
    }
  }

/*  private clientAleardyExists(list: Bankclient[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const index = list.find(x => x.bankaccount.accountnumber === control.value)


      if (index === undefined) {
        return null;
      }
      else {
        return { clientAleardyExists: true }
      }
    }
  }
*/
  async createBankclient() {
    const bankclient = this.bankclientForm.value;
    this.bankclientService.createBankclient(bankclient);
    this.router.navigateByUrl('/bankclient-list');
  }

}
