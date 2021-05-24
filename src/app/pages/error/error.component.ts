import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  errorMessage: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage = this.route.snapshot.data['message'];
    console.log(this.route.snapshot.data);
  }

}
