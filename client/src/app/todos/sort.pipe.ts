/**
 * Created by cookx876 on 2/13/17.
 */
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'sortBy'
})
export class sortBy implements PipeTransform{
    private sortByString(keyword){
        keyword = keyword.toLowerCase();
        return value => {
            return !keyword || value.toLowerCase().indexOf(keyword) !== -1;
        }
    }

    transform(array: any[], keyword: string): any {
        if(array==null){
            return null;
        }
        const type = typeof keyword;

        if(type === 'string'){
            console.log("IMA STRING! WUTTTTT!");
        }
        if (document.getElementById('Sort1')){
            // sort by Category
            return false;
        }

        return array.sort((todo1, todo2)=>{return todo1 - todo2});



    }

}