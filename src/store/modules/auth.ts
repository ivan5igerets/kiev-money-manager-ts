import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
// import authApi from '@/api/auth'

@Module({namespaced: true, name: 'auth'})
class Auth extends VuexModule {
    public name = '';
    public email = '';

    @Mutation
    public setName(newName: string): void {
        this.name = newName;
    }

    @Mutation
    public setEmail(newEmail: string): void {
        this.email = newEmail; 
    }

}

export default Auth;