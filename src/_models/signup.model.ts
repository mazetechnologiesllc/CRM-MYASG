export class SignUpModel {
    userType: number;
    createType?: string; // specifies that created under manager/individual (affiliate/manager)
    manager?: number; // needed if created under manager
    companyId: number; // parent company Id (default is 162)
    companyName: string; // needed if creating a company
    services: number[]; // needed if creating a client
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    gender: string;
    dateOfBirth: string;
    contact: string;
    email: string;
    country: string;
    state: string;
    city: string;
    addLine1: string;
    addLine2: string;
    zip: string;
    ssn: string;
    internalNotes: string;
    payBy: string;
    cardHolderName: string;
    cardNumber: string;
    cardExpMonth: number;
    cardExpYear: number;
    cvv: number
    amount: string;
    paymentCountry: string;
    paymentState: string;
    paymentCity: string;
    paymentAddLine1: string;
    paymentAddLine2: string;
    paymentZip: string;
}