import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {

    transform(value: string, enMayuscualas: boolean = true): string {
        // if( enMayuscualas ){
        //     return value.toUpperCase();
        // }
        // else{
        //     return value.toLowerCase();
        // }

        return ( enMayuscualas ) ? value.toUpperCase() : value.toLowerCase();
    }

}