export class Lead {
    id: number;
    userTypeId: number;
    empId: string;
    suffix: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    city: string;
    state: string;
    country: string;
    leadAssigned: number;
    createdBy: string;
    leadStage: string;
    serviceName: string;
    status: boolean;

    constructor(
        id: number,
        userTypeId: number,
        empId: string,
        suffix: string,
        firstName: string,
        middleName: string,
        lastName: string,
        email: string,
        contactNumber: string,
        city: string,
        state: string,
        country: string,
        leadAssigned: number,
        createdBy: string,
        leadStage: string,
        serviceName: string,
        status: boolean
    ) {
        this.id = id;
        this.userTypeId = userTypeId;
        this.empId = empId;
        this.suffix = suffix;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.city = city;
        this.state = state;
        this.country = country;
        this.leadAssigned = leadAssigned;
        this.createdBy = createdBy;
        this.leadStage = leadStage;
        this.serviceName = serviceName;
        this.status = status
    }
}