import { Component } from '@angular/core';
import { every } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  title = 'pagination';
  POSTS:any;
  page:number=1;
  count:number=0;
  tableSize:number=10;
  tableSizes:any=[5,10,15,20];
constructor(private userServive:UserService){}

ngOnInit(){
  this.postList();
}
postList():void{
  this.userServive.getAllPosts().subscribe((Response)=>{
    this.POSTS=Response;
    console.log(this.POSTS);
    
  })
}

  onTableDataChange(event:any){
    // this.tableSize = event.target.value;
    this.page = event;
    this.postList();
}
onTableSizeChange(event:any):void{
  this.tableSize =event.target.value;
  this.page=1;
  this.postList();
}

}
