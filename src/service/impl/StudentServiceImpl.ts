import { Injectable } from "@angular/core";
import { StudentService } from "../StudentService";
import { StudentDTO } from "../../dto/StudentDTO";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApplicationConstant } from "../../ApplicationConstant";

@Injectable()
export class StudentServiceImpl implements StudentService {

    constructor(private http: HttpClient) { }
    findStudentById(): Observable<StudentDTO> {
        throw new Error("Method not implemented.");
    }



    getHello(): string {
        return "hello";
    }
    saveStudent(student: StudentDTO): Observable<boolean> {
        throw new Error("Method not implemented.");
    }



    allStudent(): Observable<StudentDTO[]> {
        return this.http.get<StudentDTO[]>(`${ApplicationConstant.API_BASE_URL}/student/all`);
    }



    deleteStudent(id: number): Observable<boolean> {
        throw new Error("Method not implemented.");
    }

}