import { Component, OnInit } from '@angular/core';
import { AtvServiceService } from '../services/atv-service.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit {

  public medicamentos: any[] = [];

  constructor(private service: AtvServiceService) { }

  ngOnInit(): void {
    this.medicamentos = this.service.getMedicamentos();
  }
}
