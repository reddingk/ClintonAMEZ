export class LineTypeModel {
    public text: string;
    public color: string;
    public size: string;
    public bold: boolean; 

    constructor(myText, myColor, mySize, myBold){
        this.text = myText;
        this.color = myColor;
        this.size = mySize;
        this.bold = myBold;        
    }
}