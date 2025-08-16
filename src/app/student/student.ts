import { Component, inject } from '@angular/core';
import { StudentService } from '../../service/StudentService';
import { StudentDTO } from '../../dto/StudentDTO';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {

  constructor(private studentService: StudentService) {
    this.loadData();
  }

  studentList: StudentDTO[] = new Array();

  loadData() {
    this.studentService.allStudent().subscribe(data => {
      this.studentList = data;
      console.log(data)
    })
  }


  serch() {



  }



}
