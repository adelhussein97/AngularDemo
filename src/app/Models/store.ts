export class Store
{
  constructor (public name:string,public branches:string[],public imgUrl:string)
  {
    this.name = name;
    this.branches = branches;
    this.imgUrl = imgUrl;
  }
}
