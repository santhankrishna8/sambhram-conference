import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  speakers = [
    {
      name: 'Prof. Djumma Khusanov',
      title: 'Rector, Sambram University, Jizzakh, Uzbekistan',
      role: 'Member, Board of Governors - SGI',
      image: 'assets/g1.png'
    },
    {
      name: 'Dr. Ergash Alibekovich Soliyev',
      title: 'Former Governor, Jizzakh Region, Uzbekistan',
      role: 'Member, Board of Governors - SGI',
      image: 'assets/g2.png'
    },
    {
      name: 'Dr. Pasupuleti Visweswara Rao',
      title: 'Director - International Relation & Research Collaborations , Reva University',
      role: 'Member, Board of Governors - SGI',
      image: 'assets/g3.png'
    },
    {
      name: 'Dr. D.N. Murthy',
      title: 'Dean (M&R), ',
      role: 'Welingkar Institute of Management, Bangalore.',
      image: 'assets/g4.png'
    },
    {
      name: 'Mr. Naveen Kolluru',
      title: 'Sr. Lead Manager, ',
      role: 'Shell India Mktg. Pvt. Ltd.,Bangalore. ',
      image: 'assets/g5.png'
    },
    {
      name: 'Dr. Sangeetha G',
      title: 'Professor, Christ University',
      role: 'Bangalore',
      image: 'assets/g6.png'
    }
  ];
}



