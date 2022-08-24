import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})

export class vuelaPipe implements PipeTransform {

    transform(value: string, enMayuscualas: boolean = true): string {
        // if( enMayuscualas ){
        //     return value.toUpperCase();
        // }
        // else{
        //     return value.toLowerCase();
        // }

        return ( value ) ? 'vuela' : 'no vuela';
    }

}