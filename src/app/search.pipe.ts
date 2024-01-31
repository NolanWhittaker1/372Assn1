import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipes:any[],querystring:string): any[] {
    return recipes.filter((r) => r.name.toLowerCase().includes(querystring.toLowerCase()));
  }

}
