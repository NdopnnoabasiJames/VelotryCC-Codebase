export class User {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	phone: string;
	role: 'rider' | 'admin';
	emergencyContact: string;
	approvalStatus: 'pending' | 'approved' | 'rejected';
	isActive?: boolean;
}
