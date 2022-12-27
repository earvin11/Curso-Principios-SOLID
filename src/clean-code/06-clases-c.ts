(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composicion frente a la herencia

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
        role: string
    }

    class User {

        public lastAcces: Date;
        public email: string;
        public role: string;

        constructor({
            email,
            role,
        }: UserProps ){
            this.lastAcces = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {    
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder
        }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory 
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
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