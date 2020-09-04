import { Component, OnInit } from '@angular/core';
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-categary',
  templateUrl: './categary.component.html',
  styleUrls: ['./categary.component.css']
})
export class CategaryComponent implements OnInit {

  public faStar = faStar;
  public faStarHalfAlt = faStarHalfAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
