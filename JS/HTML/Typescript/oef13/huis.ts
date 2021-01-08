import {gebouw} from './gebouw';

export class huis extends gebouw {

}

export class school extends gebouw{

    public getRuimte()
    {
        let print : string;
        print = '';

        print += 'Dit is een School met ';
        print += this.aantalr;
        print += ' lokalen';
        return print;
    }
}