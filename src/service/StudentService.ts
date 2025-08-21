import { Observable } from "rxjs";
import { StudentDTO } from "../dto/StudentDTO";

export abstract class StudentService{
    abstract getHello():string    
    abstract saveStudent(student:StudentDTO):Observable<boolean>
    abstract allStudent():Observable<StudentDTO[]>
    abstract findStudentById():Observable<StudentDTO>
    abstract deleteStudent(id:number):Observable<boolean>
}