export class LineTypeModel {
    public text: string;
    public size: string;
    public bold: boolean; 

    constructor(myText, mySize, myBold){
        this.text = myText;
        this.size = mySize;
        this.bold = myBold;        
    }
}