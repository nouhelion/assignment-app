import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent {
  title = 'liste des devoirs';
  assignments = [
    {
      nom: 'devoir angular de mr buffa',
      dateRendu: '2022-12-31',
      status: false,
    },
    {
      nom: 'devoir angular de richard grin',
      dateRendu: '2023-01-20',
      status: false,
    },
    {
      nom: 'devoir angular de mr winter',
      dateRendu: '2023-03-20',
      status: true,
    },
  ];

}
