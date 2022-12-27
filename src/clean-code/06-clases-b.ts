(() => {

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date
        public gender: Gender;
        public name: string;

        constructor({name, gender, birthdate}: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate
        }
    }

    interface UserProps {
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class User extends Person {

        public lastAcces: Date;
        public email: string;
        public role: string;

        constructor({
            birthdate,
            email,
            gender,
            name,
            role,
        }: UserProps ){
            super({name, gender, birthdate});
            this.lastAcces = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate: Date;    
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }: UserSettingsProps){
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettigs = new UserSettings({
        workingDirectory: '/user/home',
        lastOpenFolder: '/home',
        email: 'earvin@gmail.com',
        role: 'ADMIN',
        name: 'Earvin',
        gender: 'M',
        birthdate: new Date('1996-11-1')
    });

    console.log({ userSettigs });

})();