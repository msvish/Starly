import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface Data {
  camera_id:string;
  officer_name: string;
  address: string;
  attendance: string;
  status:string;
  action:string
  isEdit:boolean;
}



var ELEMENT_DATA: Data[] = [

  {camera_id: 'LPR-1478645LO', officer_name: 'John Doe', address:'175,5th main road, vinayaka layout, Yelahanka new town, Bangalore',status:'None',attendance:'71%',action:'None', isEdit:false},

  {camera_id: 'LPR-1478645LO', officer_name: 'John Doe', address:'175,5th main road, vinayaka layout, Yelahanka new town, Bangalore',status:'None',attendance:'86%',action:'None',isEdit:false},

  {camera_id: 'LPR-1478645LO', officer_name: 'John Doe', address:'175,5th main road, vinayaka layout, Yelahanka new town, Bangalore',status:'None',attendance:'92%',action:'None',isEdit:false},

  {camera_id: 'LPR-1478645L2', officer_name: 'Nancy', address:'175,5th main road, vinayaka layout, Yelahanka new town, Bangalore',status:'None',attendance:'54%',action:'None',isEdit:false},

  {camera_id: 'LPR-1478645LO', officer_name: 'John Doe', address:'175,5th main road, vinayaka layout, Yelahanka new town, Bangalore',status:'None',attendance:'36%',action:'None',isEdit:false},

  {camera_id: 'LPR-1478645LO', officer_name: 'John Doe', address:'175,5th main road, vinayaka layout, Yelahanka new town, Bangalore',status:'None',attendance:'98%',action:'None',isEdit:false},

  {camera_id: 'LPR-1478645LO', officer_name: 'John Doe', address:'175,5th main road, vinayaka layout, Yelahanka new town, Bangalore',status:'None',attendance:'95%',action:'None',isEdit:false},

];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit{
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['camera_id', 'officer_name', 'address', 'attendance', 'status','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  pageSize:number=ELEMENT_DATA.length;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  

  public onDelete(id:any){
       ELEMENT_DATA=ELEMENT_DATA.filter(u => u.camera_id !== id);
       this.dataSource = new MatTableDataSource( ELEMENT_DATA);
  }

  public onEdit(id: any){
        ELEMENT_DATA.forEach(element => {
            if(element.camera_id===id){
              element.isEdit=true;
            }
     });
     console.log(ELEMENT_DATA);
  }

  public onRefresh(){
   
  }
}
