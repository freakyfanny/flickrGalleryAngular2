export class FlickrPhoto
{
    url: string = "";

    constructor(public id: string,public server: string,public farm: string,public secret: string, public title: string, public owner: string)
    {
        this.url = 'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'.jpg';
    }

}