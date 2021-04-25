import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({namespaced: true, name: 'date'})
class Date extends VuexModule {

    public month = '';

    @Mutation
    public setMonth(newMonth: string): void {
        this.month = newMonth;
    }
}

export default Date;