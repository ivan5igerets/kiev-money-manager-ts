export class CoreDate {
  static now() {
    const o_date_now = new Date();
    const i_month = o_date_now.getMonth()+1;
    return o_date_now.getFullYear()+'-'+(i_month < 10 ? '0'+i_month : i_month)+'-'+o_date_now.getDate();
  }

  static toArray(dl_date) {
    return dl_date.split('-');
  }
}