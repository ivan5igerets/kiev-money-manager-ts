import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({namespaced: true, name: 'auth'})
class Auth extends VuexModule {
    public name = '';
    public email = '';
    public isLoading = true;

    @Mutation
    public setName(newName: string): void {
        this.name = newName;
    }

    @Mutation
    public setEmail(newEmail: string): void {
        this.email = newEmail; 
    }

    @Mutation
    public loadingToggle(newValue: boolean): void {
        this.isLoading = newValue;
    }

}

export default Auth;